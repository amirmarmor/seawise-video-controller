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

type DeviceConfiguration struct {
	Sn    string  `json:"sn"`
	Ip    string  `json:"ip"`
	Owner string  `json:"owner"`
	Rules []*Rule `json:"rules"`
}

func (a *Api) UpdateDeviceConfiguration(device *DeviceConfiguration) (*DeviceConfiguration, error) {
	exists, err := a.GetDeviceConfiguration(device.Sn)
	if err != nil {
		return nil, fmt.Errorf("failed to get device: %v", err)
	}

	if exists == nil {
		return nil, nil
	}

	exists.Rules = device.Rules

	err = a.setDeviceConfiguration(exists)
	if err != nil {
		return nil, fmt.Errorf("failed to save device: %v", err)
	}

	return exists, nil
}

func (a *Api) RegisterDeviceConfiguration(device *DeviceConfiguration) (*DeviceConfiguration, error) {
	exists, err := a.GetDeviceConfiguration(device.Sn)
	if err != nil {
		return nil, fmt.Errorf("failed to get device: %v", err)
	}

	if exists == nil {
		err = a.setDeviceConfiguration(device)
		if err != nil {
			return nil, fmt.Errorf("failed to save device: %v", err)
		}
		return device, nil
	}

	exists.Ip = device.Ip

	err = a.setDeviceConfiguration(exists)
	if err != nil {
		return nil, fmt.Errorf("failed to save device: %v", err)
	}

	return exists, nil
}

func (a *Api) setDeviceConfiguration(device *DeviceConfiguration) error {
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

func (a *Api) GetDevicesConfiguration() ([]*DeviceConfiguration, error) {
	resp, err := a.hgetall(devicesKey)
	if err != nil {
		return nil, fmt.Errorf("failed to get devices: %v", err)
	}

	devices := make([]*DeviceConfiguration, 0)
	for _, row := range resp {
		device := &DeviceConfiguration{}
		err = json.Unmarshal([]byte(row), device)
		if err != nil {
			return nil, fmt.Errorf("failed to unmarshal device: %v", err)
		}
		devices = append(devices, device)
	}

	return devices, nil
}

func (a *Api) GetDeviceConfiguration(sn string) (*DeviceConfiguration, error) {
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

	device := &DeviceConfiguration{}
	err = json.Unmarshal([]byte(deviceString), device)
	if err != nil {
		return nil, fmt.Errorf("failed to unmarshal device: %v", err)
	}

	return device, nil
}
