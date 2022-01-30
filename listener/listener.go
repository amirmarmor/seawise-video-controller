package listener

import (
	"bytes"
	"fmt"
	"gocv.io/x/gocv"
	"image/jpeg"
	"net"
	"sync"
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

		//buf, err := l.EncodeImage(l.Frame.Bytes())
		//if err != nil {
		//	log.Warn(fmt.Sprintf("failed to encode image: %v", err))
		//	return
		//}

		err := l.Recorder.DoRecord(l.Frame.Bytes())
		if err != nil {
			log.Warn(fmt.Sprintf("failed to record: %v", err))
		}

		l.Stream.UpdateJPEG(l.Frame.Bytes())
		l.FrameMutex.RUnlock()
	}
}

func (l *Listener) EncodeImage(data []byte) ([]byte, error) {
	const jpegQuality = 50

	mat, err := gocv.NewMatFromBytes(1080, 1920, gocv.MatTypeCV8UC3, data)
	if err != nil {
		return nil, fmt.Errorf("failed to recreate mat from bytes: %v", err)
	}

	jpegOption := &jpeg.Options{Quality: jpegQuality}

	image, err := mat.ToImage()
	if err != nil {
		return nil, fmt.Errorf("Failed to change to image: %v", err)
	}

	buf := new(bytes.Buffer)
	err = jpeg.Encode(buf, image, jpegOption)
	if err != nil {
		log.Warn(fmt.Sprintf("Failed to encode image: %v", err))
	}

	mat.Close()
	return buf.Bytes(), nil
}
