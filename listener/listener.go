package listener

import (
	"bytes"
	"fmt"
	"net"
	"sync"
	"www.seawise.com/controller/core"
	"www.seawise.com/controller/db"
	"www.seawise.com/controller/log"
	"www.seawise.com/controller/recorder"
	"www.seawise.com/controller/stream"
)

type Listener struct {
	DeviceInfo              *db.Device
	TCPListener             net.Listener
	TCPListenerMutex        sync.Mutex
	Frame                   *bytes.Buffer
	FrameMutex              sync.RWMutex
	timeStampPacketSize     uint
	contentLengthPacketSize uint
	Stream                  *stream.Stream
	Recorder                *recorder.Recorder
	disconnectQueue         *chan string
}

func Create(port int, device *db.Device, dq *chan string) ([]*Listener, error) {
	if core.Config.Parallel {
		listeners := make([]*Listener, 0)
		for i := 0; i < device.Channels; i++ {
			actualPort := port + i
			rec := recorder.Create(device.Sn, device.Ip, device.Rules)

			tcpListener, err := net.ListenTCP("tcp", &net.TCPAddr{
				IP:   net.ParseIP("0.0.0.0"),
				Port: actualPort,
			})

			if err != nil {
				return nil, fmt.Errorf("generate tcp server failed! - %v", err)
			}

			buf := new(bytes.Buffer)

			listener := &Listener{
				DeviceInfo:              device,
				TCPListener:             tcpListener,
				TCPListenerMutex:        sync.Mutex{},
				Frame:                   buf,
				FrameMutex:              sync.RWMutex{},
				timeStampPacketSize:     8,
				contentLengthPacketSize: 8,
				Stream:                  stream.NewStream(),
				Recorder:                rec,
				disconnectQueue:         dq,
			}

			log.V5(fmt.Sprintf("Listening on 0.0.0.0:%v", actualPort))
			go listener.Run()

			listeners = append(listeners, listener)
		}
		return listeners, nil
	}

	//TODO: add logic for rotating case listener
	return nil, nil
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
		err := l.Recorder.DoRecord(l.Frame.Bytes())
		if err != nil {
			log.Warn(fmt.Sprintf("failed to record: %v", err))
		}
		l.Stream.UpdateJPEG(l.Frame.Bytes())
		l.FrameMutex.RUnlock()
	}
}
