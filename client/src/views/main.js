import React from "react"
import {useDispatch, useSelector} from "react-redux"
import {directDeviceAsync, selectCurrent, updateDeviceAsync} from "../features/device/deviceSlice"
import {Alert, Col, Container, Row} from "react-bootstrap"
import ConfigForm from "../components/Configuration/configForm"
import Recording from "../components/Channels/recording"

function Main() {
  const current = useSelector(selectCurrent)
  const dispatch = useDispatch()

  function handleClick(action) {
    dispatch(directDeviceAsync(current.configuration.sn, action))
  }

  function handleSubmit(e, current) {
    e.preventDefault()
    dispatch(updateDeviceAsync(current))
  }

  function renderConfiguration() {
    if (!current) {
      return <Alert variant={"danger"}>Please select device first!</Alert>
    }
    return <ConfigForm current={current.configuration} channels={current.channels} handleSubmit={handleSubmit}/>
  }

  return (
    <Container fluid>
      <Row>
        <Col md="12">
          <Row>
            {renderConfiguration()}
          </Row>
          <Row>
            {current !== undefined ? <Recording current={current} handleClick={handleClick}/> : ""}
          </Row>
          <Row>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Main
