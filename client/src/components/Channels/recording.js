import {Alert, Card} from "react-bootstrap"
import Frame from "./frame"

function Recording(props) {

  function renderFrames() {
    let frames = []
    for (let i = 0; i < props.current.channels; i++) {
      frames.push(
        <Frame
          key={`Channels-${i}`}
          channel={i}
          sn={props.current.configuration.sn}
        />
      )
    }
    return frames
  }

  const styleMain = {
    width: "100%",
    height: "100%",
    textAlign: "center",
    position: "relative",
  }

  return (
    <>
      {props.current ?
        <Card>
          <Card.Header style={{position: "relative", height: "80px"}}>
            STREAMS
            <div style={{position: "absolute", right: "0"}}>
              <button style={{marginRight: "10px"}} onClick={()=>props.handleClick('stop')}>Stop</button>
              <button style={{marginRight: "10px"}} onClick={()=>props.handleClick('shutdown')}>Shutdown</button>
              <button style={{marginRight: "10px"}} onClick={()=>props.handleClick('restart')}>Restart</button>
              <button style={{marginRight: "10px"}} onClick={()=>props.handleClick('reboot')}>Reboot</button>
            </div>
          </Card.Header>
          <Card.Body>
            <div style={styleMain}>
              {renderFrames()}
            </div>
          </Card.Body>
        </Card> : <Alert variant={"danger"}>
          Please select device first!
        </Alert>
      }
    </>
  )
}

export default Recording