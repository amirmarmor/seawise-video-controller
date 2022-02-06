package rest

import (
	"encoding/json"
	"fmt"
	"github.com/gorilla/mux"
	"io"
	"net/http"
	"path/filepath"
	"sort"
	"strconv"
	"www.seawise.com/controller/core"
	"www.seawise.com/controller/db"
	"www.seawise.com/controller/log"
)

type deviceResponse struct {
	Configuration *db.DeviceConfiguration `json:"configuration"`
	Status        bool                    `json:"status"`
	Channels      int                     `json:"channels"`
}

func (s *Server) serveFile(w http.ResponseWriter, r *http.Request) {
	log.V5("Serving file")
	http.ServeFile(w, r, filepath.Join(s.clientRoot, "/build/index.html"))
}

func (s *Server) devices(w http.ResponseWriter, r *http.Request) {
	devices := make([]*deviceResponse, 0)
	for _, streamer := range s.Devices {
		device := &deviceResponse{
			Configuration: streamer.DeviceInfo,
			Channels:      streamer.Channels,
			Status:        streamer.Status,
		}
		devices = append(devices, device)
	}

	sort.SliceStable(devices, func(i, j int) bool {
		return devices[i].Configuration.Sn < devices[j].Configuration.Sn
	})

	encoder := s.createEncoder(w)

	err := encoder.Encode(devices)
	if err != nil {
		log.Warn(fmt.Sprintf("failed to encode response: %v", err))
	}
}

func (s *Server) activate(w http.ResponseWriter, r *http.Request) {
	encoder := s.createEncoder(w)
	vars := mux.Vars(r)
	sn := vars["sn"]

	s.Devices[sn].Status = true

	url := fmt.Sprintf("http://%v:%v", s.Devices[sn].DeviceInfo.Ip, core.Config.Device)

	resp, err := http.Get(url + "/getchannels")
	if err != nil {
		log.Warn(fmt.Sprintf("failed to getchannels from device %v: %v", sn, err))
		sendErrorMessage(w)
		return
	}
	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		log.Warn(fmt.Sprintf("invalid activation response from device %v: %v", sn, err))
		sendErrorMessage(w)
		return
	}

	channels, err := strconv.Atoi(string(body))
	if err != nil {
		log.Warn(fmt.Sprintf("invalid activation response from device %v: %v", sn, err))
		sendErrorMessage(w)
		return
	}

	s.Devices[sn].Channels = channels
	err = s.Devices[sn].CreateListeners(&s.DisconnectQueue)
	if err != nil {
		log.Warn(fmt.Sprintf("failed to create listeners port %v: %v", s.Devices[sn].Port, err))
		sendErrorMessage(w)
		return
	}

	resp, err = http.Get(fmt.Sprintf("%v/start/%v", url, s.Devices[sn].Port))
	if err != nil {
		log.Warn(fmt.Sprintf("failed to activate device %v: %v", s.Devices[sn].DeviceInfo.Sn, err))
		sendErrorMessage(w)
		return
	}
	defer resp.Body.Close()

	body, err = io.ReadAll(resp.Body)
	if err != nil || string(body) != "ok" {
		log.Warn(fmt.Sprintf("invalid activation response from device %v: %v", sn, err))
		sendErrorMessage(w)
		return
	}

	response := deviceResponse{
		Configuration: s.Devices[sn].DeviceInfo,
		Status:        s.Devices[sn].Status,
		Channels:      s.Devices[sn].Channels,
	}

	err = encoder.Encode(response)
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
	device := &db.DeviceConfiguration{}

	err := decoder.Decode(device)
	if err != nil {
		log.Warn(fmt.Sprintf("failed to decode device: %v", err))
		sendErrorMessage(w)
		return
	}

	newDevice, err := s.Api.UpdateDeviceConfiguration(device)
	if err != nil || newDevice == nil {
		log.Warn(fmt.Sprintf("failed to update device: %v", err))
		sendErrorMessage(w)
		return
	}

	streamer := s.Devices[newDevice.Sn]
	streamer.DeviceInfo = newDevice

	for _, l := range s.Devices[newDevice.Sn].Listeners {
		l.Recorder.Rules = newDevice.Rules
	}

	err = encoder.Encode(newDevice)
	if err != nil {
		log.Warn(fmt.Sprintf("failed to encode response: %v", err))
	}
}
