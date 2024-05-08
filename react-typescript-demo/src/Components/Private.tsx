import React from 'react'
import Login from './Login';
import Component from './Component';
import { ComponentProps } from './Component';

type PrivateProps={
    isLoggedIn: boolean,
    component:React.ComponentType<ComponentProps>
}

function Private({isLoggedIn, component:Component}: PrivateProps ) {
   if (isLoggedIn){
    return <Component name="Rakesh"/>
   }
   return <Login  />
}

export default Private
