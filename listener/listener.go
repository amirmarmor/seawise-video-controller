package listener

import (
	"bytes"
	"fmt"
	"github.com/hybridgroup/mjpeg"
	"net"
	"sync"
	"www.seawise.com/controller/log"
	"www.seawise.com/controller/recorder"
)

type Listener struct {
	TCPListener             net.Listener
	TCPListenerMutex        sync.Mutex
	Frame                   *bytes.Buffer
	FrameMutex              sync.RWMutex
	timeStampPacketSize     uint
	contentLengthPacketSize uint
	Stream                  *mjpeg.Stream
	Recorder                *recorder.Recorder
	disconnectQueue         *chan string
}

func Create(port int, dq *chan string, rec *recorder.Recorder) (*Listener, error) {
	tcpListener, err := net.ListenTCP("tcp", &net.TCPAddr{
		IP:   net.ParseIP("0.0.0.0"),
		Port: port,
	})

	if err != nil {
		return nil, fmt.Errorf("generate tcp server failed! - %v", err)
	}

	buf := new(bytes.Buffer)

	listener := &Listener{
		TCPListener:             tcpListener,
		TCPListenerMutex:        sync.Mutex{},
		Frame:                   buf,
		FrameMutex:              sync.RWMutex{},
		timeStampPacketSize:     8,
		contentLengthPacketSize: 8,
		Stream:                  mjpeg.NewStream(),
		Recorder:                rec,
		disconnectQueue:         dq,
	}

	log.V5(fmt.Sprintf("Listening on 0.0.0.0:%v", port))
	go listener.Run()
	return listener, nil
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
