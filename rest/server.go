package rest

import (
	"github.com/gorilla/mux"
	"golang.org/x/crypto/ssh"
	"net/http"
	"path/filepath"
	"www.seawise.com/controller/core"
	"www.seawise.com/controller/db"
	"www.seawise.com/controller/listener"
)

type Server struct {
	Router          *mux.Router
	Api             *db.Api
	Streamers       map[string][]*listener.Listener
	OutboundConn    map[string]int
	DisconnectQueue chan string
	clientRoot      string
	Reported        map[string]bool
	SshConfig       *ssh.ClientConfig
}

//type RegisteredDevice struct {
//	DeviceInfo *db.Device
//	Streamer   []*listener.Listener
//}

func Create(api *db.Api) *Server {
	router := mux.NewRouter()

	server := &Server{
		Api:             api,
		Streamers:       make(map[string][]*listener.Listener),
		OutboundConn:    make(map[string]int),
		DisconnectQueue: make(chan string),
		clientRoot:      "/home/amirma/seawise/seawise-video-controller/client/", //"/usr/src/app/",
		Reported:        make(map[string]bool),
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
	router.HandleFunc("/restart/{ip}", server.handleRestart).Methods("GET")
	router.HandleFunc("/stream/{sn}/{ch}", server.HandleOutbound)
	router.HandleFunc("/report", server.report).Methods("GET")
	server.Router = router

	go server.handleDisconnect()
	return server
}
