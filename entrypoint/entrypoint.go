package entrypoint

import (
	"fmt"
	"github.com/gorilla/handlers"
	"net/http"
	"www.seawise.com/controller/core"
	"www.seawise.com/controller/db"
	"www.seawise.com/controller/log"
	"www.seawise.com/controller/rest"
)

type EntryPoint struct {
	server      *rest.Server
	api         *db.Api
	methods     *handlers.CORSOption
	credentials *handlers.CORSOption
	origins     *handlers.CORSOption
}

func (p *EntryPoint) Run() {
	core.InitFlags()
	log.InitFlags()

	log.ParseFlags()
	log.Info("Starting")

	p.buildBlocks()
	p.addHandlers()

	cleanSigTerm := Produce()
	port := fmt.Sprintf(":%v", core.Config.Port)
	err := http.ListenAndServe(port, handlers.CORS(*p.credentials, *p.methods, *p.origins)(p.server.Router))
	if err != nil {
		panic(err)
	}
	cleanSigTerm.WaitForTermination()
}

func (p *EntryPoint) buildBlocks() {
	p.api = db.Create()
	p.server = rest.Create(p.api)
}

func (p *EntryPoint) addHandlers() {
	credentials := handlers.AllowCredentials()
	p.credentials = &credentials

	methods := handlers.AllowedMethods([]string{"POST", "GET"})
	p.methods = &methods

	origins := handlers.AllowedOrigins([]string{"*"})
	p.origins = &origins

}
