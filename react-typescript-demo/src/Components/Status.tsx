type StatusProps={
    status:"online" | "offline" | "switchoff"
}

function Status(props:StatusProps) {
    let  message
    switch (props.status){
        case "online":
            message = "Online"
            break
        case "offline":
            message = "Offline"
            break
        case "switchoff":
            message = "SwitchOff"
    }
  return (
    <div>
      <h1>{message}</h1>
    </div>
  )
}

export default Status
