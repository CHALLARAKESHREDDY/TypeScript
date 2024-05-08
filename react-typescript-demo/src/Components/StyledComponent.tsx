type ContainerProps={
    styles:React.CSSProperties
}

function StyledComponent(props:ContainerProps) {
  return (
    <div>
      <h1 style={props.styles}>Styled Element</h1>
    </div>
  )
}

export default StyledComponent
