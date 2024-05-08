import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Person from './Components/Person';
import FriendsList from './Components/FriendsList';
import Status from './Components/Status';
import Heading from './Components/Heading';
import Skills from './Components/Skills';
import Button from './Components/Button';
import Input from './Components/Input';
import StyledComponent from './Components/StyledComponent';
import Box from './Components/Box';
import ThemeProvider from './Components/ThemeProvider';
import UserContextProvider from './Components/UserContextProvider';
import User from './Components/User';
import Private from './Components/Private';
import Component from './Components/Component';
import ListItems from './Components/ListItems';

let friendsList=[
  {
    id:1,
    first:"challa",
    last:"prashanth"
  },
  {
    id:2,
    first:"challa",
    last:"madhu"
  }
]

let stringsList=[
  "KL Rahul",
  "Rahul Dravid",
  "Virat Kohli",
  "Sachin Tendulkar"
]

function App() {
  const name={
    
    first:"Challa",
    last:"Rakesh"
  }

  return (
    <div className="App">
      {/*<Heading children="Details"/>
       <Greet name="Rakesh" />
       <Person name={name}/>
       <FriendsList names={friendsList} />
       <Status status="online" />
       <Skills><Heading>Skills: React Native</Heading></Skills>
       <Input value={""} handleChange={(event)=>console.log(event)}/>
       <Button handleClick={(event)=>{console.log("button clicked",event.target)}}/>
       <StyledComponent styles={{margin:10,color:"green"}}/>
       <ThemeProvider>
        <Box />
       </ThemeProvider>
        <UserContextProvider >
         <User />
       </UserContextProvider>
      <Private isLoggedIn={true} component={Component}/>
       */}
      <ListItems list={stringsList} onClick={(value)=>console.log(value)}/>
      <ListItems list={[1,2,3,4,5,6]} onClick={(value)=>console.log(value)}/>
    </div>
  );
}

export default App;
