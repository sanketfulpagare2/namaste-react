import React from 'react'
import { LOGO_URL } from '../utils/constants';
import { useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import DarkmodeTheme from './DarkmodeTheme';
import UserContext from '../utils/UserContext';
const Header = () =>{
const [btnName, setbtnName] = useState("Login");
const onlineStatus=useOnlineStatus();
 const {loggedInUser}=useContext(UserContext);

    return (
        <div className="flex justify-between bg-white dark:bg-slate-700 items-center shadow-2xl shadow-amber-100  dark:shadow-sky-900 ">
            <div className="logo-container flex items-center gap-9">
                <img className="w-24 rounded-full mx-2"src= {LOGO_URL}alt="LOGO"/>

                   
                    {(btnName==="Logout") ? ( <div className="profile p-2 pe-5 rounded-full flex items-center gap-4 bg-amber-100 dark:bg-slate-800 ">
                        <img className='w-9  rounded-full' src="https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=" />
                        <h1 className=' font-semibold  text-amber-600 dark:text-sky-500'>{loggedInUser}</h1>
                    </div>):"" }


            </div>

            <div className=" nav-items">

                <ul className="flex p-4 m-4 gap-10 text-black dark:text-white font-medium items-center">

                <DarkmodeTheme/>

                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>{
                           btnName==="Login" ? setbtnName("Logout") : setbtnName("Login");
                    }}>
                        {btnName}
                    </button>

                </ul>
            </div>

        </div>
    );
}

export default Header;