type ListProps<T>={
    list:T[],
    onClick:(value:T)=>void
}

const ListItems=<T extends {}>({list,onClick}:ListProps<T>)=>{
  return (
    <div>
      {
        list.map((item,index)=>{
            return(
                <div key={index}>
                    <button key={index} onClick={()=>onClick(item)}>{String(item)}</button>
                </div>
            )
        })
      }
    </div>
  )
}

export default ListItems