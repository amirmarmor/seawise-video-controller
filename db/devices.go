package db

import (
	"encoding/json"
	"fmt"
)

const devicesKey = "devices"

type Rule struct {
	Id        int64  `json:"id"`
	Recurring string `json:"recurring"`
	Start     int64  `json:"start,string"`
	Duration  int64  `json:"duration,string"`
	Type      string `json:"type"`
}

type Device struct {
	Sn       string  `json:"sn"`
	Ip       string  `json:"ip"`
	Channels int     `json:"channels"`
	Loop     int     `json:"loop"`
	Port     int     `json:"port"`
	Owner    string  `json:"owner"`
	Rules    []*Rule `json:"rules"`
}

func (a *Api) UpdateDevice(device *Device) (*Device, error) {
	exists, err := a.GetDevice(device.Sn)
	if err != nil {
		return nil, fmt.Errorf("failed to get device: %v", err)
	}

	if exists == nil {
		return nil, nil
	}

	exists.Loop = device.Loop
	exists.Rules = device.Rules

	err = a.setDevice(exists)
	if err != nil {
		return nil, fmt.Errorf("failed to save device: %v", err)
	}

	return exists, nil
}

func (a *Api) RegisterDevice(device *Device) (*Device, error) {
	exists, err := a.GetDevice(device.Sn)
	if err != nil {
		return nil, fmt.Errorf("failed to get device: %v", err)
	}

	if exists == nil {
		err = a.setDevice(device)
		if err != nil {
			return nil, fmt.Errorf("failed to save device: %v", err)
		}
		return device, nil
	}

	exists.Channels = device.Channels
	exists.Ip = device.Ip

	err = a.setDevice(exists)
	if err != nil {
		return nil, fmt.Errorf("failed to save device: %v", err)
	}
	return exists, nil
}

func (a *Api) setDevice(device *Device) error {
	deviceJson, err := json.Marshal(device)
	if err != nil {
		return fmt.Errorf("failed to marshal device: %v", err)
	}

	err = a.hset(devicesKey, device.Sn, string(deviceJson))
	if err != nil {
		return fmt.Errorf("failed to set device: %v", err)
	}

	return nil
}

func (a *Api) GetDevices() ([]*Device, error) {
	resp, err := a.hgetall(devicesKey)
	if err != nil {
		return nil, fmt.Errorf("failed to get devices: %v", err)
	}

	devices := make([]*Device, 0)
	for _, row := range resp {
		device := &Device{}
		err = json.Unmarshal([]byte(row), device)
		if err != nil {
			return nil, fmt.Errorf("failed to unmarshal device: %v", err)
		}
		devices = append(devices, device)
	}

	return devices, nil
}

func (a *Api) GetDevice(sn string) (*Device, error) {
	exists, err := a.hexists(devicesKey, sn)
	if err != nil {
		return nil, fmt.Errorf("failed to hexists device: %v", err)
	}

	if !exists {
		return nil, nil
	}

	deviceString, err := a.hget(devicesKey, sn)
	if err != nil {
		return nil, fmt.Errorf("failed to hget device: %v", err)
	}

	device := &Device{}
	err = json.Unmarshal([]byte(deviceString), device)
	if err != nil {
		return nil, fmt.Errorf("failed to unmarshal device: %v", err)
	}

	return device, nil
}
