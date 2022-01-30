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
  return async (dispatch) => {
    try {
      const result = await fetch(`${api}/devices`)
      const json = await result.json()
      dispatch(updateDevices(json))
    } catch (err) {
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

export const restartDeviceAsync = (ip) => {
  return async () => {
    try {
      console.log(ip)
      await fetch(`${api}/restart/${ip}`)
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

