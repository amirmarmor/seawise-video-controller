package db

import (
	"context"
	"fmt"
	"github.com/go-redis/redis/v8"
	"www.seawise.com/controller/core"
)

type Api struct {
	client *redis.Client
	ctx    context.Context
}

func Create() *Api {
	dbConn := fmt.Sprintf("%v:%v", core.Config.DbHost, "6379")
	rdb := redis.NewClient(&redis.Options{
		Addr:     dbConn,
		Password: "", // no password set
		DB:       0,  // use default DB
	})

	return &Api{
		client: rdb,
		ctx:    context.Background(),
	}
}

func (a *Api) get(key string) (string, error) {
	val, err := a.client.Get(a.ctx, key).Result()
	if err != nil {
		return "", fmt.Errorf("failed to get key %v: %v", key, err)
	}
	return val, nil
}

func (a *Api) set(key string, value string) error {
	err := a.client.Set(a.ctx, key, value, 0).Err()
	if err != nil {
		return fmt.Errorf("failed to set key %v: %v", key, err)
	}
	return nil
}

func (a *Api) hset(key string, field string, value interface{}) error {
	cmd := a.client.HSet(a.ctx, key, field, value)
	err := cmd.Err()
	if err != nil {
		return fmt.Errorf("failed to hset key %v: %v", key, err)
	}
	return nil
}

func (a *Api) hget(key string, field string) (string, error) {
	cmd := a.client.HGet(a.ctx, key, field)
	err := cmd.Err()
	if err != nil {
		return "", fmt.Errorf("failed hget command, field %v: %v", field, err)
	}

	result, err := cmd.Result()
	if err != nil {
		return "", fmt.Errorf("failed hget result, field %v: %v", field, err)
	}

	return result, nil
}

func (a *Api) hgetall(key string) (map[string]string, error) {
	cmd := a.client.HGetAll(a.ctx, key)
	err := cmd.Err()
	if err != nil {
		return nil, fmt.Errorf("failed hgetall command, key %v: %v", key, err)
	}

	result, err := cmd.Result()
	if err != nil {
		return nil, fmt.Errorf("failed hgetall result, key %v: %v", key, err)
	}
	return result, nil
}

func (a *Api) hexists(key string, field string) (bool, error) {
	cmd := a.client.HExists(a.ctx, key, field)
	err := cmd.Err()
	if err != nil {
		return false, fmt.Errorf("failed hexists command, key %v, field %v: %v", key, field, err)
	}

	result, err := cmd.Result()
	if err != nil {
		return false, fmt.Errorf("failed hexists result, key %v, field %v: %v", key, field, err)
	}

	return result, nil
}
