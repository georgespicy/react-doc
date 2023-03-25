import React from 'react'
import { useState } from 'react'

function Usestate() {
    const [increament, setIncreament] = useState(0)
    const increasment = () => {
        return setIncreament(increament + 1)
    }
    const deincreasment= () => {
        return setIncreament(increament - 1)
    }
    return (
        <div>
            <button onClick={increasment} style={{
                backgroundColor: 'darkgreen',
                border: 'none',
                color: 'white',
                marginRight: '10px'
            }}>+</button>
            {increament}
            <button onClick={deincreasment} style={{
                backgroundColor: 'darkred',
                border: 'none',
                color: 'white',
                marginLeft: '10px'
            }}>-</button>
        </div>
    )
}

export default Usestate