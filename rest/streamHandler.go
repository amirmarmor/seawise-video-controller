package rest

import (
	"encoding/json"
	"fmt"
	"github.com/gorilla/mux"
	"net/http"
	"strconv"
	"www.seawise.com/controller/core"
	"www.seawise.com/controller/log"
)

func sendErrorMessage(w http.ResponseWriter) {
	w.WriteHeader(500)
	_, err := w.Write([]byte("an error occured"))
	if err != nil {
		log.Warn("failed to write response")
	}
}

func (s *Server) HandleOutbound(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	sn := vars["sn"]
	ch := vars["ch"]

	if sn == "" || ch == "" {
		log.Warn(fmt.Sprintf("invalid address"))
		sendErrorMessage(w)
	}

	channel, err := strconv.Atoi(ch)
	if err != nil {
		log.Warn(fmt.Sprintf("invalid address"))
		sendErrorMessage(w)
	}

	streamer := s.Devices[sn]

	baseUrl := fmt.Sprintf("http://%v:%v", streamer.DeviceInfo.Ip, strconv.Itoa(core.Config.Device))

	log.V5(fmt.Sprintf("Starting device - %v", baseUrl))

	s.OutboundConn[sn]++
	s.Devices[sn].Listeners[channel].Stream.ServeHTTP(w, r)

	//s.OutboundConn[sn]--
	//if s.OutboundConn[sn] == 0 {
	//	_, err = http.Get(baseUrl + "/stop")
	//	if err != nil {
	//		log.Warn(fmt.Sprintf("Failed to stop device - %v", err))
	//		return
	//	}
	//	log.V5(fmt.Sprintf("Stopping - %v", s.Devices[sn][0].DeviceInfo.Ip))
	//}
}

func (s *Server) handleDisconnect() {
	for {
		select {
		case d := <-s.DisconnectQueue:
			log.V5(fmt.Sprintf("%v", d))
			//go s.removeStreamers(d)
		}
	}
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
