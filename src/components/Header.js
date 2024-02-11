import React from 'react'
import { LOGO_URL } from '../utils/constants';
import { useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import DarkmodeTheme from './DarkmodeTheme';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';





const Header = () =>{

 const cartItems =useSelector((store)=>store.cartD.items);
 

const [btnName, setbtnName] = useState("Login");
const onlineStatus=useOnlineStatus();

 const {loggedInUser,setShowserach,showSearch}=useContext(UserContext);

    return (
        <div className="flex justify-between h-[85px] bg-white dark:bg-slate-700 items-center shadow-2xl shadow-amber-100   dark:shadow-sky-900 ">
            <div className="logo-container flex items-center gap-9">
                <img className="w-[75px] rounded-full ms-6 mx-2 "src= {LOGO_URL}alt="LOGO"/>

                   
                    {(btnName==="Logout") ? ( <div className="profile shadow-inner p-2 pe-5 rounded-full flex items-center gap-4 bg-amber-100 dark:bg-slate-800 ">
                        <img className='w-9  rounded-full' src="https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=" />
                        <h1 className=' font-semibold  text-amber-600 dark:text-sky-500'>{loggedInUser}</h1>
                    </div>):setShowserach(false) }


            </div>

            <div className="nav-items
            
            ">

                <ul className="flex p-4 m-4 gap-10 text-black dark:text-white font-medium items-center">

                <DarkmodeTheme/>

                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li ><Link to="/cart">




                        <div className="flex items-center">
                            Cart
                             { cartItems.length!==0 &&
                        <span className="relative flex h-5 w-5  bottom-2 ">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-5 w-5 bg-amber-500 justify-center   items-center text-sm text-white" >{cartItems.length}</span>
                        </span>

                        }
                        
                       
                    </div>



                    </Link></li>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>{
                           btnName==="Login" ? (setbtnName("Logout"), setShowserach(true)) : setbtnName("Login");
                    }}>
                        {btnName}
                    </button>

                </ul>
            </div>

        </div>
    );
}

export default Header;