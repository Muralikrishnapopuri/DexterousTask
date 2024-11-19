import React, { useContext } from 'react'
import { modeContext } from '../App';

function Footer() {
  const {Mode,setMode}=useContext(modeContext);

  return (
    <div style={{background:Mode==0?"white":"black",color:Mode==0?"black":'white',padding:"1rem",display:'flex',justifyContent:"space-between"}}>
      <div>
        <h4>Dexterous@Copyright 2024</h4>
      </div>
      <div>
          <h3>Contact Us</h3>
      </div>

    </div>
  )
}

export default Footer