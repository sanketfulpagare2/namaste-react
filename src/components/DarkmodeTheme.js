import React from 'react'
import { useState } from 'react';

const DarkmodeTheme = () => {
    const [darkModeBtn,setDarkmodeBtn]=useState("🌙");
   
   
   
    const toggleTheme=()=>{
    document.documentElement.classList.toggle('dark');
   
  }


  
  return (
    <div>
        <button className="cursor-pointer" onClick={()=>{
                        toggleTheme();
                        darkModeBtn==="🌙" ? setDarkmodeBtn("🔆"):setDarkmodeBtn("🌙")

                    }}>{darkModeBtn}</button>
                   
    </div>
  )
}

export default DarkmodeTheme