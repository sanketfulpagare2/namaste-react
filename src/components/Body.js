import React, { Suspense, useEffect, useState } from 'react'
import ResCard from './ResCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import DarkmodeTheme from './DarkmodeTheme';


const Body = () =>{
    const [resListU, setresListU] = useState([]);
    const [filterResList, setfilterResList] = useState([]);
    const [searchName, setsearchName] = useState("");
    

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData =async ()=>{

        const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5642452&lng=73.7768511&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json=await data.json();
       console.log(json)
       console.log("helo")
        setresListU(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       
        setfilterResList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }



    const onlineStatus=useOnlineStatus();
    if(onlineStatus===false)
        return (
        <h1>You are currently offline!</h1>);
    
    //conditional Rendring
    if (resListU.length===0 ){
        return <Shimmer/> 
         
        
      
    }

    return(
        <div className="body my-20" >
            <div className="filter flex py-7  justify-center gap-10">
               
               
               
               {console.log(resListU)}

                <input
                className=" border-none rounded-full px-5 bg-green-50 outline-none dark:bg-blue-200 font-semibold w-[35rem]  shadow-lg de   "
                type='text'
                placeholder='Search By Name...'
                value={searchName}
                onChange={(e)=>{setsearchName(e.target.value)}}
                />
                <button className="search-btn bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full" onClick={()=>{
                   
                    let filteredList= resListU.filter((item)=> {return item.info.name.toLowerCase().includes(searchName.toLowerCase())});

                    setfilterResList(filteredList);

                }}>Search</button>
                

                
                <button className='topRated-btn  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
                    onClick={()=>{
                        const filterList = resListU.filter((res)=>res.info.avgRating >3.9);
                        setfilterResList(filterList);
                        //    console.log(filterList);

                    }}
                    
                    
                    >Top Rated</button>
                    
                
                
            </div>
            <div className="card-container m-10 justify-center flex flex-wrap gap-7  ">
               {filterResList.map((restaurant)=>(
               <Link className="my-3"
               key={restaurant.info.id} 
               to={"/restaurants/" + restaurant.info.id}> 
               <ResCard  resData={restaurant}/>
               </Link>
                
               ))
                }
            </div>


        </div>
    )
}

export default Body