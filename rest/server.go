package rest

import (
	"github.com/gorilla/mux"
	"www.seawise.com/controller/db"
	"www.seawise.com/controller/listener"
)

type Server struct {
	Router            *mux.Router
	Api               *db.Api
	RegisteredDevices map[string]*RegisteredDevice
}

type RegisteredDevice struct {
	DeviceInfo *db.Device
	Streamer   *listener.Listener
}

func Create(api *db.Api) *Server {
	router := mux.NewRouter()
	server := &Server{
		Api:               api,
		RegisteredDevices: make(map[string]*RegisteredDevice),
	}

	router.HandleFunc("/register", server.register).Methods("POST")
	router.HandleFunc("/devices", server.devices).Methods("GET")
	router.HandleFunc("/update", server.update)
	router.HandleFunc("/stream/{sn}", server.HandleOutbound)
	server.Router = router
	return server
}
