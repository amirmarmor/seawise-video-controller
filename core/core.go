package core

import (
	"encoding/json"
	"github.com/namsral/flag"
	"www.seawise.com/controller/log"
)

type Configuration = struct {
	Port   int
	DbHost string
	Device int
	Path   string
}

var Config Configuration

func InitFlags() {
	flag.IntVar(&Config.Port, "port", 8080, "The stream port start")
	flag.IntVar(&Config.Device, "device", 4000, "The device port")
	flag.StringVar(&Config.DbHost, "dbhost", "localhost", "The db host")
	flag.StringVar(&Config.Path, "path", "/", "The db host")

	log.AddNotify(postParse)
}

func postParse() {
	marshal, err := json.Marshal(Config)
	if err != nil {
		log.Fatal("marshal config failed: %v", err)
	}

	log.V5("configuration loaded: %v", string(marshal))
}
