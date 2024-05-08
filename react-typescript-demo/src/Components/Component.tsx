export type ComponentProps={
    name:string
}

function Component(props:ComponentProps) {
  return (
    <div>
       <h1>Welcome! {props.name}</h1>
    </div>
  )
}

export default Component
