import { FriendsProps } from "./FriendsList.types"

function FriendsList(props:FriendsProps) {
  return (
    <div>
       {
        props.names.map((item)=>(
            <>
            <h1 key={item.id}>{item.first}. {item.last}</h1>
            </>
        ))
       }
    </div>
  )
}

export default FriendsList
