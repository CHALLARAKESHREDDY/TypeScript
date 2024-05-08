type ButtonsProps={
    handleClick:(event:React.MouseEvent<HTMLButtonElement>)=>void
}

function Button(props:ButtonsProps) {
  return (
    <div>
      <button onClick={()=>props.handleClick}>Click Here</button>
    </div>
  )
}

export default Button
