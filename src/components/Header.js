import React from 'react'
import { LOGO_URL } from '../utils/constants';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Header = () =>{
 const [btnName, setbtnName] = useState("Login");

    return (
        <div className="header">
            <div className="logo">
                <img src= {LOGO_URL}alt="LOGO" />
            </div>

            <div className="nav-items">
                <ul>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <button className='login-btn' onClick={()=>{
                           btnName==="Login" ? setbtnName("Logout") :setbtnName("Login");
                    }}>
                        {btnName}
                    </button>


                </ul>
            </div>

        </div>
    );
}

export default Header