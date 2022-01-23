import React from "react"
import {Nav} from "react-bootstrap"
import {useDispatch, useSelector} from "react-redux"
import {activateDeviceAsync, selectCurrent, selectDevices, updateCurrent} from "../../features/device/deviceSlice"

function Sidebar({color, image}) {
  const devices = useSelector(selectDevices)
  const current = useSelector(selectCurrent)
  const dispatch = useDispatch()

  function handleClick(device) {
    dispatch(updateCurrent(device))
  }

  function handleReportedClick(ip){
    dispatch(activateDeviceAsync(ip))
  }

  function renderRegistered() {
    if (devices === undefined) {
      return ""
    }

    return devices.Registered.map((device) => {
      let classname = ""
      if (current && device.sn === current.sn) {
        classname = "active"
      }

      return <li className={classname} key={`device-${device.sn}`} onClick={() => handleClick(device)}>
        <p className="nav-link" style={{cursor: "pointer", position: "relative"}}>
          Device - {device.sn} ({device.ip})
        </p>
      </li>
    })
  }

  function renderReported() {
    if (devices === undefined) {
      return
    }
    return devices.Reported.map(ip =>
      <li key={`device-${ip}`} onClick={() => handleReportedClick(ip)}>
        <p className="nav-link" style={{cursor: "pointer", position: "relative"}}>
          {ip}
        </p>
      </li>
    )
  }

  return (<div className="sidebar" data-image={image} data-color={color}>
    <div
      className="sidebar-background"
      style={{
        backgroundImage: "url(" + image + ")"
      }}
    />
    <div className="sidebar-wrapper">
      <div className="logo d-flex align-items-center justify-content-start">
        <a
          href="https://www.creative-tim.com?ref=lbd-sidebar"
          className="simple-text logo-mini mx-1"
        >
          <div className="logo-img">
            <img
              src={require("../../assets/img/logo_transparent.png").default}
              alt="..."
            />
          </div>
        </a>
        <a className="simple-text" href="http://www.seawisely.com">
          SeaWise
        </a>
      </div>
      <Nav>
        <Nav.Item style={{marginLeft: "10px"}}>
          <p>Registered Device</p>
        </Nav.Item>
        {renderRegistered()}
      </Nav>
      <Nav>
        <Nav.Item style={{marginLeft: "10px"}}>
          <p>Reported Device</p>
        </Nav.Item>
        {renderReported()}
      </Nav>
    </div>
  </div>)
}

export default Sidebar