import {createSlice} from "@reduxjs/toolkit"

const initialState = {}
const api = "http://localhost:8080"

export const deviceSlice = createSlice({
  name: 'device',
  initialState,
  reducers: {
    updateCurrent: (state, action) => {
      state.current = action.payload
    },
    updateDevices: (state, action) => {
      state.list = action.payload
    },
    updateRealtime: (state, action) => {
      state.realtime = action.payload
    },
    default: state => state
  }
})

export const getDevicesAsync = () => {
  return async (dispatch, getState) => {
    try {
      const state = getState()
      const result = await fetch(`${api}/devices`)
      const json = await result.json()
      if(state.device.current && state.device.current.status){
        let retainCurrent = false
        json.forEach(item => {
          if(state.device.current.configuration.sn === item.configuration.sn && item.status){
            retainCurrent = true
          }
        })
        if(!retainCurrent){
          dispatch(updateCurrent({}))
        }
      }
      dispatch(updateDevices(json))
    } catch (err) {
      console.log(err)
    }
  }
}

export const activateDeviceAsync = (sn) => {
  return async (dispatch) => {
    try {
      console.log(api, sn)
      let resp = await fetch(`${api}/activate/${sn}`)
      let json = await resp.json()
      console.log(json)
      dispatch(updateCurrent(json))
    } catch(err){
      console.log(err)
    }
  }
}

export const updateDeviceAsync = (current) => {
  return async (dispatch) => {
    try {
      await fetch(`${api}/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(current)
      })
      dispatch(updateCurrent(true))
    } catch (err) {
      console.log(err)
    }
  }
}

export const directDeviceAsync = (sn, action) => {
  return async () => {
    try {
      console.log(sn, action)
      await fetch(`${api}/action/${action}/${sn}`)
    } catch(err){
      console.log(err)
    }
  }
}

export const {
  updateCurrent,
  updateDevices,
  updateRealtime,
} = deviceSlice.actions
export const selectDevices = state => state.device.list
export const selectCurrent = state => state.device.current
export const selectRealtime = state => state.device.realtime

export default deviceSlice.reducer

