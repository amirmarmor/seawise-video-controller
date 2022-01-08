import React from "react"
import {Nav} from "react-bootstrap"
import {useDispatch, useSelector} from "react-redux"
import {selectCurrent, selectDevices, updateCurrent, restartDeviceAsync} from "../../features/device/deviceSlice"

function Sidebar({color, image}) {
  const devices = useSelector(selectDevices)
  const current = useSelector(selectCurrent)
  const dispatch = useDispatch()

  function handleClick(device) {
    dispatch(updateCurrent(device))
  }

  function handleXCLick(device) {
    dispatch(restartDeviceAsync(device))
  }

  function renderDevices() {
    const xstyle = {
      display: "box",
      position: "absolute",
      right: "5px",
      top: "2px"
    }
    if (devices !== undefined) {
      return devices.map((device) =>
        <li
          className={current && device.sn === current.sn ? "active" : ""}
          key={`device-${device.sn}`}
          onClick={() => handleClick(device)}
        >
          <p className="nav-link"
             style={{cursor: "pointer", position: "relative"}}
          ><span onClick={() => handleXCLick(device)} style={xstyle}>x</span>Device - {device.sn}<br/>({device.ip})</p>
        </li>
      )
    }
    return ""
  }

  return (
    <div className="sidebar" data-image={image} data-color={color}>
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
          {renderDevices()}
        </Nav>
      </div>
    </div>
  )
}

export default Sidebar