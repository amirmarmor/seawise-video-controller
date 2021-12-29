package core

//
//import (
//	"encoding/json"
//	"fmt"
//	"io/ioutil"
//	"net/http"
//	"strconv"
//	"www.seawise.com/controller/log"
//)
//
//type ConfigManager struct {
//	Devices       []*Device
//	DevicesConfig map[int]*DeviceConfiguration
//}
//
//type DeviceConfiguration struct {
//	Id        int    `json:"id"`
//	Offset    int    `json:"offset"`
//	Cleanup   bool   `json:"cleanup"`
//	Fps       int    `json:"fps"`
//	RecordNow bool   `json:"record"`
//	Rules     string `json:"rules"`
//}
//
//type Rule struct {
//	Id        int64  `json:"id"`
//	Recurring string `json:"recurring"`
//	Start     int64  `json:"start,string"`
//	Duration  int64  `json:"dgetIpuration,string"`
//	Type      string `json:"type"`
//}
//
//type Device struct {
//	Id       int    `json:"id,string"`
//	Channels int    `json:"channels,string"`
//	Ip       string `json:"ip"`
//}
//
//func Create() (*ConfigManager, error) {
//	cm := &ConfigManager{
//		DevicesConfig: make(map[int]*DeviceConfiguration),
//	}
//	err := cm.GetDevices()
//	if err != nil {
//		return nil, fmt.Errorf("failed to get devices: %v", err)
//	}
//
//	for _, device := range cm.Devices {
//		err := cm.GetConfig(device.Id)
//		if err != nil {
//			return nil, fmt.Errorf("failed to get device %v configuration: %v:", device.Id, err)
//		}
//	}
//
//	return cm, nil
//}
//
//func (cm *ConfigManager) GetDevices() error {
//	backend := "http://" + Config.BackendHost + ":" + strconv.Itoa(Config.BackendPort) + "/api/devices"
//	resp, err := http.Get(backend)
//	if err != nil || resp.StatusCode != 200 {
//		return fmt.Errorf("failed to get Configuration from remote using local: %v", err)
//		//TODO: read actual files for Sass model
//	}
//
//	body, err := ioutil.ReadAll(resp.Body)
//	if err != nil {
//		return fmt.Errorf("Invalid response from server EXITING: %v", err)
//	}
//
//	err = json.Unmarshal(body, &cm.Devices)
//	if err != nil {
//		return fmt.Errorf("failed to unmarshall devices - %v", err)
//	}
//
//	return nil
//}
//
//func (cm *ConfigManager) GetConfig(id int) error {
//	var body []byte
//	backend := fmt.Sprintf("http://%v:%v", Config.BackendHost, Config.BackendPort)
//	dc := &DeviceConfiguration{}
//
//	resp, err := http.Get(backend + "/api/device/" + strconv.Itoa(id))
//
//	if err != nil || resp.StatusCode != 200 {
//		log.Warn(fmt.Sprintf("failed to get Configuration from remote using local: %v", err))
//		//TODO: read actual files for Sass model
//	} else {
//		body, err = ioutil.ReadAll(resp.Body)
//		if err != nil {
//			return fmt.Errorf("Invalid response from server EXITING: %v", err)
//		}
//		defer resp.Body.Close()
//	}
//
//	err = json.Unmarshal(body, dc)
//	if err != nil {
//		return fmt.Errorf("failed to unmarshal: %v", err)
//	}
//
//	cm.DevicesConfig[id] = dc
//	return nil
//}
