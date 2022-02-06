package rest

import (
	"encoding/json"
	"fmt"
	"github.com/gorilla/mux"
	"io"
	"net/http"
	"www.seawise.com/controller/core"
	"www.seawise.com/controller/db"
	"www.seawise.com/controller/device"
	"www.seawise.com/controller/log"
)

func (s *Server) register(w http.ResponseWriter, r *http.Request) {
	decoder := json.NewDecoder(r.Body)
	encoder := json.NewEncoder(w)

	deviceConfig := &db.DeviceConfiguration{}

	err := decoder.Decode(deviceConfig)
	if err != nil {
		log.Warn(fmt.Sprintf("failed to decode device: %v", err))
		sendErrorMessage(w)
		return
	}

	newDevice, err := s.Api.RegisterDeviceConfiguration(deviceConfig)
	if err != nil {
		log.Warn(fmt.Sprintf("failed to register device: %v", err))
		sendErrorMessage(w)
		return
	}

	s.Devices[newDevice.Sn] = device.Create(newDevice, s.ports, &s.DisconnectQueue)
	err = encoder.Encode(newDevice)
	if err != nil {
		log.Warn(fmt.Sprintf("failed to encode response: %v", err))
	}

	s.ports++
}

func (s *Server) handleAction(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	sn := vars["sn"]
	action := vars["action"]

	if sn == "" || action == "" {
		log.Warn(fmt.Sprintf("invalid sn"))
		sendErrorMessage(w)
		return
	}

	s.Devices[sn].Alive = false
	s.Devices[sn].Timeout.Stop()

	url := fmt.Sprintf("http://%v:%v/action/%v", s.Devices[sn].DeviceInfo.Ip, core.Config.Device, action)
	response, err := http.Get(url)
	if err != nil {
		log.Warn(fmt.Sprintf("faield to do action %v: %v", action, err))
		sendErrorMessage(w)
		return
	}
	defer response.Body.Close()

	s.removeStreamer(sn)

	body, err := io.ReadAll(response.Body)
	if err != nil {
		log.Warn(fmt.Sprintf("failed to get body: %v", err))
		sendErrorMessage(w)
		return
	}

	_, err = w.Write(body)
	if err != nil {
		panic(err)
	}
}

//func (s *Server) handleRegistration(deviceConfig *db.DeviceConfiguration) (*db.DeviceConfiguration, error) {
//
//	streamer := &device.Streamer{}
//	if device.Status == "report" {
//		streamer.Registered = false
//		streamer.DeviceInfo = device
//	} else {
//		port := 9000 + (s.ports * 10)
//
//		var listeners []*streamer.Listener
//
//		listeners, err = streamer.CreateListener(port, device, &s.DisconnectQueue)
//		if err != nil {
//			return nil, fmt.Errorf("failed to open socket %v: %v", port, err)
//		}
//
//		streamer.Listeners = listeners
//		newDevice.Port = port
//		streamer.Registered = true
//		s.ports++
//	}
//
//	s.Devices[newDevice.Sn] = streamer
//
//	return newDevice, nil
//}
