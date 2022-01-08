import React, {useState} from "react"
function Frame(props) {
  const [overlay, setOverlay] = useState()
  const n = `${props.sn}/${props.channel}`
  const src = `/stream/${n}`

  function handleClick(){
    window.open(src, '_blank').focus()
  }

  function addCss(){
    let css = "img {width: 100%; height: 100%}"
    let style = document.createElement("style")
    style.type = "text/css"
    style.appendChild(document.createTextNode(css))

    let interval = setInterval(()=>{
      let iframe = document.getElementById(n)
      if(iframe){
        iframe.contentWindow.document.head.appendChild(style)
        clearInterval(interval)
      }
    }, 10)
  }

  const frameStyle={
    width: "100%",
    height: "500px",
  }

  const overlayStyle = {
    display: overlay ? "block" : "none",
    position: "absolute",
    width: "10%",
    height: "50px",
    top: "0",
    left: "0",
    background: "rgba(255,255,255,0.5)"
  }

  const wrapperStyle = {
    display: "inline-block",
    position: "relative",
    width: "49.9%",
  }

  return (
    <div
      style={wrapperStyle}
      onMouseEnter={()=>setOverlay(true)}
      onMouseLeave={()=>setOverlay(false)}
      onClick={()=>handleClick()}
    >
      <iframe title={`device-${props.sn}`} src={src} style={frameStyle} name={n} id={n}/>
      {addCss()}
      <div style={overlayStyle}>Full Screen</div>
    </div>
  )
}

export default Frame