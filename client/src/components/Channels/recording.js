import React, {useState} from "react"
import {Alert, Card} from "react-bootstrap"
import Frame from "./frame"

function Recording(props) {
  const [ch, setch] = useState()

  function handleClick(ch){
    stech(ch)
  }

  function renderChannels(){
    let lis = []
    for (let i = 0; i < props.current.channels; i++) {
      lis.push(<li onClick={()=>handleClick(i)}>i</li>)
    }
  }
  function renderFrames() {
    let frames = []
    for (let i = 0; i < props.current.channels; i++) {
      frames.push(
        <Frame
          key={`Channels-${i}`}
          channel={i}
          sn={props.current.sn}
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
          <Card.Header>
            STREAMS
          </Card.Header>
          <Card.Body>
            <div>
              Choose channel:
              <ul>
                {renderChannels()}
              </ul>
            </div>
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