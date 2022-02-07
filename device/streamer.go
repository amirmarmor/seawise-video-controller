package device

import (
	"time"
	"www.seawise.com/controller/db"
)

type Streamer struct {
	Listeners       []*Listener
	Timeout         *time.Timer
	Channels        int
	DeviceInfo      *db.DeviceConfiguration
	Status          bool
	Port            int
	disconnectQueue *chan string
	Alive           bool
}

func Create(device *db.DeviceConfiguration, port int, dq *chan string) *Streamer {
	streamer := &Streamer{
		DeviceInfo:      device,
		Port:            9000 + (port * 10),
		Timeout:         time.NewTimer(2 * time.Second),
		disconnectQueue: dq,
		Alive:           true,
	}

	go streamer.timeout()
	return streamer
}

func (s *Streamer) timeout() {
	for s.Alive {
		select {
		case <-s.Timeout.C:
			*s.disconnectQueue <- s.DeviceInfo.Sn
			s.Alive = false
		default:
		}
	}
}

//func (s *Streamer) remove() {
//	log.V5("TIMEOUT")
//	for _, l := range s.Listeners {
//		err := l.TCPListener.Close()
//		if err != nil {
//			log.Warn(fmt.Sprintf("Failed to close listener: %v", err))
//		}
//		*s.disconnectQueue <- s.DeviceInfo.Sn
//	}
//
//	s.Listeners = s.Listeners[:0]
//	log.V5(fmt.Sprintf("closed all ports"))
//}
