
import React, { useContext, useState } from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import DarkmodeTheme from "./components/DarkmodeTheme";
import { createBrowserRouter ,RouterProvider ,Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore";

const AppLayout = () =>{
    const  [showSearch,setShowserach]=useState(false)
    const {loggedInUser}=useContext(UserContext);

    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser: loggedInUser,showSearch,setShowserach}}>
                <div className="pb-10 dark:bg-slate-800 h-[100%]">
            

                    <Header/>
                    <Outlet/>
            
                 </div>
            </UserContext.Provider>
        </Provider>
    );
}


const appRouter =createBrowserRouter([
    {
        path:"/",
        element :<AppLayout/>,
        children:[
            {
                path:"/",
                element :<Body/>,
            },
            {
                path:"/about",
                element :<About/>,
            },
            {
                path:"/contact",
                element :<Contact/>,
            },
            
            {
                path:"/restaurants/:resId",
                element :<RestaurantMenu/>,
            }
        ],
        errorElement: <Error/>
    },
    




]);





const root =ReactDOM.createRoot(document.getElementById("root"));



root.render(<RouterProvider router={appRouter}/>);