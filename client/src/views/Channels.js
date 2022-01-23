import React from "react"
import {Container} from "react-bootstrap"
import {useSelector, useDispatch} from "react-redux"
import {
  selectCurrent, restartDeviceAsync
} from "../features/device/deviceSlice"
import Recording from '../components/Channels/recording'

function Channels() {
  const current = useSelector(selectCurrent)
  const dispatch = useDispatch()

  function handleClick(){
    dispatch(restartDeviceAsync(current.ip))
  }

  return (
    <Container fluid>
    {current !== undefined ? <Recording current={current} handleClick={handleClick}/> : ""}
    </Container>
  )
}

export default Channels
