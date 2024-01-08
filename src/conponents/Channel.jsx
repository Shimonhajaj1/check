import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

export default function Channel(props) {
    const nav = useNavigate();
   
    return (



        <div style={{textAlign:'left' , }} >
                       {/* <button onClick={nav('/')} >word in English</button>  */}
                       {/* <Link to={'/'} style={{ color: 'blue',margin:'0.5cm' }}  > <button style={{backgroundColor:'green',margin:'0.3cm' }} >word in English</button>  </Link> */}
                       <Link to={'/'}  > <button style={{ height: '60px', width: '60px', borderRadius: '20%', backgroundColor: 'yellow'}}  >word in English</button>  </Link>
                       <br /><br />
                       <Link to={'/bonus'} > <button style={{ height: '60px', width: '60px', borderRadius: '20%', backgroundColor: 'yellow' }}  >word in English-bonus</button> </Link>
                       <br /><br />
                       <button style={{ height: '60px', width: '60px', borderRadius: '20%', backgroundColor: 'yellow' }} onClick={() => { props.addWordTo() }} >add</button>

        </div >
    )
}
