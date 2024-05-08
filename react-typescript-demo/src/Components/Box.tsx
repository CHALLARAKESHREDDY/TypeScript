import React, { useContext } from 'react'
import { ThemeContext } from './ThemeProvider'


function Box() {
  const themeContext=useContext(ThemeContext)

  return (
    <div>
      <h1 style={{color:themeContext.Secondary.main}}>Context Box</h1>
    </div>
  )
}

export default Box
