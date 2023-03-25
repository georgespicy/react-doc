import React from 'react'
import { useContext } from 'react'

function ThemeChange({ toggleTheme, ThemeContext }) {
    const darkTheme = useContext(ThemeContext)
    const style = {
        backgroundColor: darkTheme ? '#14213d' : '#8d99ae',
        color: darkTheme ? 'white' : 'black',
        fontSize: '25px',
        width: '500px',
        height: '250px',
        textAlign: 'center',
        paddingTop: '10%'
    }
    return (
        <>
            <button onClick={toggleTheme}>Mode</button>
            <div style={style}>Theme</div>
            {console.log(darkTheme)}
        </>
    )
}

export default ThemeChange