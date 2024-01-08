import React, { useState } from 'react'

export default function HomePage(props) {

    const [color, setColor] = useState('white')


















    return (



        <div>

            <h1 style={{ color: 'red' }} > המילה בעיברית</h1>
            <h1 id='h12' > </h1>
            <button style={{ height: '60px', width: '60px', borderRadius: '20%', backgroundColor: 'yellow' }} onClick={() => { props.rando(setColor) }} > the word</button>
            <br />
            <h1 style={{ color: color }} id='h13' > </h1>
            <button style={{ height: '60px', width: '60px', borderRadius: '20%', backgroundColor: 'red' }} onClick={() => { props.toShow(setColor) }} >{props.title}</button>
            <br /><br />


        </div >
    )
}
