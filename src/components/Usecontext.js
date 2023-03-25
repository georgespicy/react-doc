import React from 'react'
import { createContext, useState } from 'react'
import ThemeChange from './ThemeChange'

function Usecontext() {
    const ThemeContext = createContext()
    
    const [darkTheme, lightTheme] = useState(true)

    const toggleTheme = () => {
        lightTheme(lighttheme => !lighttheme)
    }

  return (
    <ThemeContext.Provider value={darkTheme}>
        <ThemeChange toggleTheme={toggleTheme} ThemeContext={ThemeContext} />
    </ThemeContext.Provider>
  )
}

export default Usecontext