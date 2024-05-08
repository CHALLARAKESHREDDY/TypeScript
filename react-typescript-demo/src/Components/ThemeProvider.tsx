import React, { createContext } from 'react'
import { Theme } from './Theme'

export const ThemeContext=createContext(Theme)

type ThemeProps={
    children:React.ReactNode
}

function ThemeProvider({children}:ThemeProps) {
  return (
    <ThemeContext.Provider value={Theme}>
       {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
