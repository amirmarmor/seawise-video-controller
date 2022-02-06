package device

import (
	"bytes"
	"fmt"
	"net"
	"sync"
	"www.seawise.com/controller/log"
	"www.seawise.com/controller/recorder"
	"www.seawise.com/controller/stream"
)

type Listener struct {
	TCPListener             net.Listener
	TCPListenerMutex        sync.Mutex
	Frame                   *bytes.Buffer
	FrameMutex              sync.RWMutex
	timeStampPacketSize     uint
	contentLengthPacketSize uint
	Stream                  *stream.Stream
	Recorder                *recorder.Recorder
}

func (s *Streamer) CreateListeners(dq *chan string) error {
	listeners := make([]*Listener, 0)
	for i := 0; i < s.Channels; i++ {
		actualPort := s.Port + i
		rec := recorder.Create(s.DeviceInfo.Sn, s.DeviceInfo.Ip, s.DeviceInfo.Rules)

		tcpListener, err := net.ListenTCP("tcp", &net.TCPAddr{
			IP:   net.ParseIP("0.0.0.0"),
			Port: actualPort,
		})

		if err != nil {
			return fmt.Errorf("generate tcp server failed! - %v", err)
		}

		buf := new(bytes.Buffer)

		listener := &Listener{
			TCPListener:             tcpListener,
			TCPListenerMutex:        sync.Mutex{},
			Frame:                   buf,
			FrameMutex:              sync.RWMutex{},
			timeStampPacketSize:     8,
			contentLengthPacketSize: 8,
			Stream:                  stream.NewStream(),
			Recorder:                rec,
		}

		log.V5(fmt.Sprintf("Listening on 0.0.0.0:%v", actualPort))
		go listener.Run()

		listeners = append(listeners, listener)
	}

	s.Listeners = listeners
	return nil
}

func (l *Listener) Run() {
	defer func(tcpListener net.Listener) {
		err := tcpListener.Close()
		if err != nil {
			panic(err)
		}
	}(l.TCPListener)

	go l.run()

	for {
		l.FrameMutex.RLock()
		if l.Frame.Bytes() == nil {
			l.FrameMutex.RUnlock()
			continue
		}

		err := l.Recorder.DoRecord(l.Frame.Bytes())
		if err != nil {
			log.Warn(fmt.Sprintf("failed to record: %v", err))
		}

		l.Stream.UpdateJPEG(l.Frame.Bytes())
		l.FrameMutex.RUnlock()
	}
}
