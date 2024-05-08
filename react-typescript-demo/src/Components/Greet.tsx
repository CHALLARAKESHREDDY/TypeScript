type GreetProps={
    name:string,
    surname?:string
}

export default function Greet(props:GreetProps) {
    const {surname = "Not Mentioned"} = props
  return (
    <div>
        <h1>Hello {props.name}</h1>
        <h1>Surname: {surname}</h1>
    </div>
  )
}
