import React from 'react'
import { LOGO_URL } from '../utils/constants';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import DarkmodeTheme from './DarkmodeTheme';
const Header = () =>{
 const [btnName, setbtnName] = useState("Login");
 const onlineStatus=useOnlineStatus();
 

    return (
        <div className="flex justify-between bg-white dark:bg-slate-700 items-center shadow-2xl shadow-amber-100  dark:shadow-sky-900   ">
            <div className="logo-container">
                <img className="w-24 rounded-full mx-2"src= {LOGO_URL}alt="LOGO" />
            </div>

            <div className="nav-items">
                <ul className="flex p-4 m-4 gap-10 text-black dark:text-white font-medium items-center">


                <DarkmodeTheme/>


                    





                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>{
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