package entrypoint

import (
	"fmt"
	"net/http"
	"www.seawise.com/controller/core"
	"www.seawise.com/controller/db"
	"www.seawise.com/controller/log"
	"www.seawise.com/controller/rest"
)

type EntryPoint struct {
	server *rest.Server
	api    *db.Api
	//configManager *core.ConfigManager
}

func (p *EntryPoint) Run() {
	core.InitFlags()
	log.InitFlags()

	log.ParseFlags()
	log.Info("Starting")

	p.buildBlocks()
	//p.addHandlers()
	cleanSigTerm := Produce()
	port := fmt.Sprintf(":%v", core.Config.Port)
	err := http.ListenAndServe(port, p.server.Router)
	if err != nil {
		panic(err)
	}
	cleanSigTerm.WaitForTermination()
}

func (p *EntryPoint) buildBlocks() {
	//var err error
	p.api = db.Create()

	p.server = rest.Create(p.api)

	//p.configManager, err = core.Create()
	//if err != nil {
	//	panic(err)
	//}

	//p.servers, err = rest.Create(p.configManager.Devices)
	//if err != nil {
	//	panic(err)
	//}
}

//func (p *EntryPoint) addHandlers() {
//	for _, s := range p.servers {
//		path := "/stream/" + strconv.Itoa(s.Port)
//		http.HandleFunc(path, s.HandleOutbound)
//	}
//
//	http.HandleFunc("/sync", p.SyncHandler)
//}

//func (p *EntryPoint) SyncHandler(w http.ResponseWriter, r *http.Request) {
//	log.V5("Syncing....")
//	for _, device := range p.configManager.Devices {
//		err := p.configManager.GetConfig(device.Id)
//		if err != nil {
//			log.Warn(fmt.Sprintf("Failed to sync device %v configuartion: %v", device.Id, err))
//		}
//	}
//
//	_, err := w.Write([]byte("Done"))
//	if err != nil {
//		log.Warn(fmt.Sprintf("Failed to respond to sync: %v", err))
//	}
//}
