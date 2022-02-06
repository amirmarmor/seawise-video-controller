package rest

import (
	"fmt"
	"github.com/gorilla/mux"
	"golang.org/x/crypto/ssh"
	"net/http"
	"path/filepath"
	"www.seawise.com/controller/core"
	"www.seawise.com/controller/db"
	"www.seawise.com/controller/device"
	"www.seawise.com/controller/log"
)

type Server struct {
	ports           int
	Router          *mux.Router
	Api             *db.Api
	Devices         map[string]*device.Streamer
	OutboundConn    map[string]int
	DisconnectQueue chan string
	clientRoot      string
	SshConfig       *ssh.ClientConfig
}

func Create(api *db.Api) *Server {
	router := mux.NewRouter()

	server := &Server{
		ports:           1,
		Api:             api,
		Devices:         make(map[string]*device.Streamer),
		OutboundConn:    make(map[string]int),
		DisconnectQueue: make(chan string),
		clientRoot:      core.Config.CRoot,
	}

	server.SshConfig = &ssh.ClientConfig{
		User: core.Config.SSHUser,
		Auth: []ssh.AuthMethod{ssh.Password(core.Config.SSHPass)},
	}

	fs := http.FileServer(http.Dir(filepath.Join(server.clientRoot, "/build/static/")))
	router.PathPrefix("/static/").Handler(http.StripPrefix("/static/", fs))
	router.HandleFunc("/", server.serveFile).Methods("GET")
	router.HandleFunc("/channels", server.serveFile).Methods("GET")
	router.HandleFunc("/configuration", server.serveFile).Methods("GET")
	router.HandleFunc("/register", server.register).Methods("POST")
	router.HandleFunc("/devices", server.devices).Methods("GET")
	router.HandleFunc("/update", server.update)
	router.HandleFunc("/action/{action}/{sn}", server.handleAction).Methods("GET")
	router.HandleFunc("/stream/{sn}/{ch}", server.HandleOutbound)
	router.HandleFunc("/health/{sn}", server.health).Methods("GET")
	router.HandleFunc("/activate/{sn}", server.activate).Methods("GET")
	server.Router = router

	//go server.handleDisconnect()
	go server.handleHealthcheckTimeout()
	return server
}

func (s *Server) removeStreamer(sn string) {
	s.Devices[sn].Alive = false
	s.Devices[sn].Timeout.Stop()

	for _, l := range s.Devices[sn].Listeners {
		err := l.TCPListener.Close()
		if err != nil {
			log.Warn(fmt.Sprintf("failed to close listener: %v", err))
		}
	}

	log.V5(fmt.Sprintf("listeners closed"))
	delete(s.Devices, sn)
	log.V5(fmt.Sprintf("device %v removed", sn))
}
