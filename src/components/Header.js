import React from 'react'
import { LOGO_URL } from '../utils/constants';

const Header = () =>{
    return (
        <div className="header">
            <div className="logo">
                <img src= {LOGO_URL}alt="LOGO" />
            </div>

            <div className="nav-items">
                <ul>
                    <li><a href="#home" >Home</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                    <li><a href="/contact">Cart</a></li>


                </ul>
            </div>

        </div>
    );
}

export default Header