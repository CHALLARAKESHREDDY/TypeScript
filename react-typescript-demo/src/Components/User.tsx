import React, { useContext } from 'react'
import { UserContext } from './UserContextProvider'

function User(){
  const contextObject=useContext(UserContext)

  const handleLogin=()=>{
    contextObject.setUser({name:"Rakesh",email:"rakeshchr17@gmail.com"})
  }

  const handleLogout=()=>{
    contextObject.setUser(null)
  }

  return (
    <div>
        <button onClick={()=>handleLogin()}>Login</button>
        <button onClick={()=>handleLogout()}>Logout</button>
        <h1>user name:{contextObject.user?.name}</h1>
        <h1>user name:{contextObject.user?.email}</h1>

    </div>
  )
}

export default User