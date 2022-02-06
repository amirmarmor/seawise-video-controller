package rest

import (
	"github.com/gorilla/mux"
	"net/http"
	"time"
)

func (s *Server) health(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	sn := vars["sn"]

	if s.Devices[sn].Timeout != nil {
		s.Devices[sn].Timeout.Stop()
	}

	s.Devices[sn].Timeout = time.NewTimer(4 * time.Second)
	_, err := w.Write([]byte("ok"))
	if err != nil {
		panic(err)
	}
}

func (s *Server) handleHealthcheckTimeout() {
	for {
		select {
		case sn := <-s.DisconnectQueue:
			s.removeStreamer(sn)
		default:
		}

	}
}
