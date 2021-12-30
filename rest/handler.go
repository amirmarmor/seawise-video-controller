package rest

import (
	"encoding/json"
	"fmt"
	"github.com/gorilla/mux"
	"net/http"
	"strconv"
	"www.seawise.com/controller/core"
	"www.seawise.com/controller/db"
	"www.seawise.com/controller/listener"
	"www.seawise.com/controller/log"
	"www.seawise.com/controller/recorder"
)

//func send404(w http.ResponseWriter) {
//	w.WriteHeader(404)
//	_, err := w.Write([]byte("page not found"))
//	if err != nil {
//		log.Warn("failed to write response")
//	}
//}

func sendErrorMessage(w http.ResponseWriter) {
	w.WriteHeader(500)
	_, err := w.Write([]byte("an error occured"))
	if err != nil {
		log.Warn("failed to write response")
	}
}

func (s *Server) register(w http.ResponseWriter, r *http.Request) {
	decoder := json.NewDecoder(r.Body)
	encoder := json.NewEncoder(w)

	device := &db.Device{}

	err := decoder.Decode(device)
	if err != nil {
		log.Warn(fmt.Sprintf("failed to decode device: %v", err))
		sendErrorMessage(w)
		return
	}

	w.Header().Set("Contnet-Type", "application/json")

	newDevice, err := s.Api.RegisterDevice(device)

	if err != nil {
		log.Warn(fmt.Sprintf("failed to register device: %v", err))
		sendErrorMessage(w)
		return
	}

	log.V5(fmt.Sprintf("registering device %v", device.Sn))

	port := core.Config.Port + 1 + len(s.RegisteredDevices)

	rec := recorder.Create(newDevice.Sn, newDevice.Ip, newDevice.Rules)

	streamer, err := listener.Create(port, &s.DisconnectQueue, rec)
	if err != nil {
		log.Warn(fmt.Sprintf("failed to open socket %v: %v", port, err))
		sendErrorMessage(w)
		return
	}

	newDevice.Port = port
	registeredDevice := &RegisteredDevice{
		DeviceInfo: newDevice,
		Streamer:   streamer,
	}

	s.RegisteredDevices[newDevice.Sn] = registeredDevice

	err = encoder.Encode(newDevice)
	if err != nil {
		log.Warn(fmt.Sprintf("failed to encode response: %v", err))
	}
}

func (s *Server) devices(w http.ResponseWriter, r *http.Request) {
	devices := make([]*db.Device, 0)
	for _, device := range s.RegisteredDevices {
		devices = append(devices, device.DeviceInfo)
	}

	encoder := s.createEncoder(w)

	err := encoder.Encode(devices)
	if err != nil {
		log.Warn(fmt.Sprintf("failed to encode response: %v", err))
	}
}

func (s *Server) update(w http.ResponseWriter, r *http.Request) {
	encoder := s.createEncoder(w)

	if r.Method == "OPTIONS" || r.Method == "GET" {
		return
	}

	decoder := json.NewDecoder(r.Body)
	device := &db.Device{}

	err := decoder.Decode(device)
	if err != nil {
		log.Warn(fmt.Sprintf("failed to decode device: %v", err))
		sendErrorMessage(w)
		return
	}

	newDevice, err := s.Api.UpdateDevice(device)
	if err != nil || newDevice == nil {
		log.Warn(fmt.Sprintf("failed to update device: %v", err))
		sendErrorMessage(w)
		return
	}

	s.RegisteredDevices[newDevice.Sn].DeviceInfo = newDevice
	s.RegisteredDevices[newDevice.Sn].Streamer.Recorder.Rules = newDevice.Rules

	err = encoder.Encode(newDevice)
	if err != nil {
		log.Warn(fmt.Sprintf("failed to encode response: %v", err))
	}
}

func (s *Server) HandleOutbound(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	sn := vars["sn"]
	if sn == "" {
		log.Warn(fmt.Sprintf("invalid sn"))
		sendErrorMessage(w)
	}

	url := "http://" + s.RegisteredDevices[sn].DeviceInfo.Ip + ":" + strconv.Itoa(core.Config.Device) + "/start"

	log.V5(fmt.Sprintf("Starting device - %v", url))

	_, err := http.Get(url)
	if err != nil {
		log.Warn(fmt.Sprintf("Failed to start device - %v", url))
	}

	s.RegisteredDevices[sn].Streamer.Stream.ServeHTTP(w, r)

	//_, err = http.Get(url + "/stop/" + strconv.Itoa(s.Channel))
	//if err != nil {
	//	log.Warn(fmt.Sprintf("Failed to stop device - %v", s.Port))
	//}
	//log.V5(fmt.Sprintf("Stopping - %v, channel - %v", s.Ip, s.Channel))
}

func (s *Server) handleDisconnect() {
	for {
		select {
		case d := <-s.DisconnectQueue:
			go s.removeRegisteredDevice(d)
		}
	}
}

func (s *Server) removeRegisteredDevice(d string) {
	delete(s.RegisteredDevices, d)
	log.V5(fmt.Sprintf("removed device: %v", d))
}

func (s *Server) createEncoder(w http.ResponseWriter) *json.Encoder {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
	w.Header().Set("Access-Control-Expose-Headers", "Authorization")
	w.Header().Set("Contnet-Type", "application/json")

	encoder := json.NewEncoder(w)
	return encoder
}
