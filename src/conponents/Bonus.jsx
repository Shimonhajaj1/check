import React, { useState } from 'react'

export default function Bonus(props) {
    const [color, setColor] = useState('white')
   
    return (



        <div>
          
            
            <h1 id='h89' > </h1>
            <button style={{ height: '60px', width: '60px', borderRadius: '20%', backgroundColor: 'yellow', margin: '0.5cm' }} onClick={() => { props.addBonus() }} >bunos</button>
            <h1 style={{ color: color }} id='h98' > </h1>
            <button style={{ height: '60px', width: '60px', borderRadius: '20%', backgroundColor: 'red' }} onClick={() => { props.toShow(setColor) }} >{props.title}</button>
        </div >
    )
}
