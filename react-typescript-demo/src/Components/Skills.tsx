
type SkillsProp={
    children:React.ReactNode
}

function Skills(props:SkillsProp) {
  return (
    <div>
      {props.children}
    </div>
  )
}

export default Skills
