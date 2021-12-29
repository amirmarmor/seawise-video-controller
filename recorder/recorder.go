package recorder

import (
	"fmt"
	"gocv.io/x/gocv"
	"net/http"
	"os"
	"reflect"
	"strconv"
	"time"
	"www.seawise.com/controller/core"
	"www.seawise.com/controller/db"
	"www.seawise.com/controller/log"
)

type Recorder struct {
	Rules      []*db.Rule
	ticker     *time.Ticker
	startVideo *time.Time
	startImage *time.Time
	sn         string
	ip         string
	status     int
	writer     *gocv.VideoWriter
	started    bool
}

func Create(sn string, ip string, rules []*db.Rule) *Recorder {
	rec := &Recorder{
		Rules:  rules,
		ticker: time.NewTicker(1 * time.Second),
		sn:     sn,
		ip:     ip,
	}
	go rec.start()
	return rec
}

func (r *Recorder) start() {
	for {
		select {
		case t := <-r.ticker.C:
			go r.check(t)
		}
	}
}

func (r *Recorder) DoRecord(imgBytes []byte) error {
	if r.status == 0 {
		if r.writer != nil {
			err := r.writer.Close()
			if err != nil {
				return fmt.Errorf("failed to close writer: %v", err)
			}
			r.writer = nil
		}
		return nil
	}

	if !r.started {
		url := "http://" + r.ip + ":" + strconv.Itoa(core.Config.Device) + "/start"

		log.V5(fmt.Sprintf("Starting device - %v", url))

		_, err := http.Get(url)
		if err != nil {
			log.Warn(fmt.Sprintf("Failed to start device - %v", url))
		}
		r.started = true
		return nil
	}

	if imgBytes == nil {
		return nil
	}

	mat, err := gocv.IMDecode(imgBytes, gocv.IMReadUnchanged)
	if err != nil {
		return fmt.Errorf("failed to decode image: %v", err)
	}
	if r.status == 1 {
		return r.recordImage(&mat)
	} else {
		return r.recordVideo(&mat)
	}
}

func (r *Recorder) recordImage(mat *gocv.Mat) error {
	log.V5("Saving image")
	now := time.Now()
	saveFileName := core.Config.Path + "/" + now.Format("2006-01-02--15-04-05") + "-image.jpg"

	ok := gocv.IMWrite(saveFileName, *mat)
	if !ok {
		return fmt.Errorf("failed to write image")
	}
	return nil
}

func (r *Recorder) recordVideo(mat *gocv.Mat) error {
	log.V5("Recording video")
	var err error
	if r.writer == nil {
		r.writer, err = r.createVWriter(mat)
		if err != nil {
			return fmt.Errorf("faield to create writer: %v", err)
		}
	}

	err = r.writer.Write(*mat)
	if err != nil {
		return fmt.Errorf("read failed to write: %v", err)
	}

	return nil
}

func (r *Recorder) createVWriter(mat *gocv.Mat) (*gocv.VideoWriter, error) {
	now := time.Now()
	path, err := r.createSavePath()
	if err != nil {
		return nil, fmt.Errorf("failed to create path: %v", err)
	}

	saveFileName := path + "/" + now.Format("2006-01-02--15-04-05") + ".avi"

	writer, err := gocv.VideoWriterFile(saveFileName, "MJPG", float64(30), mat.Cols(), mat.Rows(), true)
	if err != nil {
		return nil, fmt.Errorf("failed to create writer", err)
	}

	return writer, nil
}

func (r *Recorder) createSavePath() (string, error) {
	_, err := os.Stat("videos")

	if os.IsNotExist(err) {
		log.V5("videos directory doesnt exist. creating it now!")
		err := os.Mkdir("videos", 0777)
		if err != nil {
			log.Error("couldnt create images directory", err)
			return "", err
		}
	}

	path := fmt.Sprintf("videos/%v", r.sn)
	_, err = os.Stat(path)

	if os.IsNotExist(err) {
		log.V5("creating file direcotry!")
		err = os.Mkdir(path, 0777)
		if err != nil {
			log.Error("couldnt create images directory", err)
			return "", err
		}
	}

	return path, nil
}

func (r *Recorder) check(now time.Time) {
	if len(r.Rules) == 0 {
		r.status = 0
	}

	for _, rule := range r.Rules {
		if rule.Duration == 0 {
			r.status = 0
		}

		if rule.Type == "image" {
			r.status = r.checkImageRules(&now, rule)
		} else {
			r.status = r.checkVideoRules(&now, rule)
		}
	}
}

func (r *Recorder) checkImageRules(now *time.Time, rule *db.Rule) int {
	var t float64
	if rule.Recurring == "Second" {
		t = time.Minute.Seconds()
	} else if rule.Recurring == "Minute" {
		t = time.Hour.Seconds()
	} else {
		t = time.Hour.Seconds() * 24
	}

	interval := time.Duration(t / float64(rule.Duration))

	if now.Sub(*r.startImage) >= interval {
		r.startImage = now
		return 1
	}

	return 0
}

func (r *Recorder) checkVideoRules(now *time.Time, rule *db.Rule) int {

	bar := GetTimeField(rule.Recurring, *now)

	if rule.Start == bar {
		r.startVideo = now
	}

	//log.V5(fmt.Sprintf("%v, %v, %v, %v, %v", rule.Start, bar, r.startVideo, rule.Duration, r.status))
	if r.startVideo == nil || now.Sub(*r.startVideo) > time.Second*time.Duration(rule.Duration) {
		r.startVideo = nil
		return 0
	}

	return 2
}

func GetTimeField(s string, now time.Time) int64 {
	r := reflect.ValueOf(now).MethodByName(s)
	f := r.Call(nil)
	return int64(f[0].Interface().(int))
}
