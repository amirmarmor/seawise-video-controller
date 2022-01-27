package rest

import (
	"encoding/json"
	"fmt"
	"github.com/gorilla/mux"
	"golang.org/x/crypto/ssh"
	"net/http"
	"path/filepath"
	"strconv"
	"strings"
	"time"
	"www.seawise.com/controller/core"
	"www.seawise.com/controller/db"
	"www.seawise.com/controller/listener"
	"www.seawise.com/controller/log"
)

type DevicesResponse struct {
	Registered []*db.Device
	Reported   []string
}

func sendErrorMessage(w http.ResponseWriter) {
	w.WriteHeader(500)
	_, err := w.Write([]byte("an error occured"))
	if err != nil {
		log.Warn("failed to write response")
	}
}

func (s *Server) serveFile(w http.ResponseWriter, r *http.Request) {
	log.V5("Serving file")
	http.ServeFile(w, r, filepath.Join(s.clientRoot, "/build/index.html"))
}

func (s *Server) report(w http.ResponseWriter, r *http.Request) {
	addr := strings.Split(r.RemoteAddr, ":")
	s.Reported[addr[0]] = true
	w.WriteHeader(200)
	_, err := w.Write([]byte("ok"))
	if err != nil {
		sendErrorMessage(w)
	}
}

func (s *Server) activate(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	ip := vars["ip"]
	if ip == "" {
		log.Warn(fmt.Sprintf("invalid ip"))
		sendErrorMessage(w)
		return
	}

	err := s.sshCmd(ip, "bash -c '/home/pi/seawise-video-streamer/updatepi.sh > /home/pi/sw-activation.log 2>&1' &")
	if err != nil {
		log.Warn(fmt.Sprintf("failed to activate ip: %v", err))
		sendErrorMessage(w)
		return
	}

	response := "ip activated"
	_, err = w.Write([]byte(response))
	if err != nil {
		panic(err)
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

	if device.Channels == 0 {
		log.Warn(fmt.Sprintf("no channels"))
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

	port := core.Config.Port + 1 + (len(s.Streamers) * 10)

	streamer, err := listener.Create(port, newDevice, &s.DisconnectQueue)
	if err != nil {
		log.Warn(fmt.Sprintf("failed to open socket %v: %v", port, err))
		sendErrorMessage(w)
		return
	}

	newDevice.Port = port
	s.Streamers[newDevice.Sn] = streamer

	err = encoder.Encode(newDevice)
	if err != nil {
		log.Warn(fmt.Sprintf("failed to encode response: %v", err))
	}
}

func (s *Server) devices(w http.ResponseWriter, r *http.Request) {
	devices := make([]*db.Device, 0)
	for _, streamer := range s.Streamers {
		devices = append(devices, streamer[0].DeviceInfo)
	}

	reported := make([]string, 0)
	for ip, notRegistered := range s.Reported {
		if notRegistered {
			reported = append(reported, ip)
		}
	}

	response := &DevicesResponse{
		devices,
		reported,
	}
	encoder := s.createEncoder(w)

	err := encoder.Encode(response)
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

	for _, streamer := range s.Streamers[newDevice.Sn] {
		streamer.DeviceInfo = newDevice
		streamer.Recorder.Rules = newDevice.Rules
	}

	err = encoder.Encode(newDevice)
	if err != nil {
		log.Warn(fmt.Sprintf("failed to encode response: %v", err))
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

	baseUrl := fmt.Sprintf("http://%v:%v", s.Streamers[sn][0].DeviceInfo.Ip, strconv.Itoa(core.Config.Device))
	startUrl := fmt.Sprintf("%v/start", baseUrl)
	stopUrl := fmt.Sprintf("%v/stop", baseUrl)

	log.V5(fmt.Sprintf("Starting device - %v", baseUrl))

	resp, err := http.Get(startUrl)
	if err != nil {
		log.Warn(fmt.Sprintf("Failed to start device - %v", startUrl))
	}

	log.V5(fmt.Sprintf("response: %v", resp))
	time.Sleep(1 * time.Second)

	s.OutboundConn[sn]++
	s.Streamers[sn][channel].Stream.ServeHTTP(w, r)

	s.OutboundConn[sn]--
	if s.OutboundConn[sn] == 0 {
		_, err = http.Get(stopUrl)
		if err != nil {
			log.Warn(fmt.Sprintf("Failed to stop device - %v", stopUrl))
		}
		log.V5(fmt.Sprintf("Stopping - %v", s.Streamers[sn][0].DeviceInfo.Ip))
	}
}

func (s *Server) handleDisconnect() {
	for {
		select {
		case d := <-s.DisconnectQueue:
			go s.removeStreamers(d)
		}
	}
}

func (s *Server) handleRestart(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	ip := vars["ip"]
	if ip == "" {
		log.Warn(fmt.Sprintf("invalid ip"))
		sendErrorMessage(w)
		return
	}

	err := s.sshCmd(ip, "sudo reboot")
	if err != nil {
		log.Warn(fmt.Sprintf("failed to restart ip: %v", err))
		sendErrorMessage(w)
		return
	}

	response := "restarting"
	_, err = w.Write([]byte(response))
	if err != nil {
		panic(err)
	}

}

func (s *Server) removeStreamers(d string) {
	for _, l := range s.Streamers[d] {
		err := l.TCPListener.Close()
		if err != nil {
			log.Warn(fmt.Sprintf("Failed to close listener on device %v: %v", d, err))
		}
	}

	delete(s.Streamers, d)
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

func (s *Server) sshCmd(ip string, cmd string) error {
	s.SshConfig.HostKeyCallback = ssh.InsecureIgnoreHostKey()
	url := fmt.Sprintf("%v:22", ip)
	client, err := ssh.Dial("tcp", url, s.SshConfig)
	if err != nil {
		return fmt.Errorf("failed to open ssh connection to %v: %v", ip, err)
	}

	session, err := client.NewSession()
	if err != nil {
		return fmt.Errorf("failed to open session: %v", err)
	}

	out, err := session.CombinedOutput(cmd)
	if err != nil {
		return fmt.Errorf("failed to run cmd %v: %v", cmd, err)
	}

	log.V5(fmt.Sprintf("result %v", string(out)))
	err = client.Close()
	if err != nil {
		return fmt.Errorf("failed to close ssh connection: %v", err)
	}

	return nil
}
