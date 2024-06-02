
import React, { Suspense, lazy, useContext, useState } from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

import { createBrowserRouter ,RouterProvider ,Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";





const AppLayout = () =>{
    const  [showSearch,setShowserach]=useState(false)
   
    const {loggedInUser}=useContext(UserContext);

    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser: loggedInUser,showSearch,setShowserach }}>
               
               
             
                <div className=" pb-20 bg-gradient-to-b from-white from-99%  via-white via-99% to-sky-900   dark:from-slate-800 dark:to-slate-800  ">
            
                    <div className="z-50 sticky top-0">
                        <Header/>
                    </div>

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
            } ,
            {
                path:"/cart",
                element :<Suspense><Cart/>
                </Suspense>

            }
        ],
        errorElement: <Error/>
    },
    




]);





const root =ReactDOM.createRoot(document.getElementById("root"));



root.render(<RouterProvider router={appRouter}/>);