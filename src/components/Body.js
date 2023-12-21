import React, { useEffect, useState } from 'react'
import ResCard from './ResCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';


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
       // console.log(json)
        setresListU(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilterResList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }



    //conditional Rendring
    if (resListU.length ===0){
        return <Shimmer/> 
         
        
        
        
    }

    return(
        <div className="body">
            <div className="filter">

                <input
                type='text'
                placeholder='Search By Name...'
                value={searchName}
                onChange={(e)=>{setsearchName(e.target.value)}}
                />
                <button className="search-btn" onClick={()=>{
                   
                    let filteredList= resListU.filter((item)=> {return item.info.name.toLowerCase().includes(searchName.toLowerCase())});

                    setfilterResList(filteredList);

                }}>Search</button>
                

                
                    <button className='topRated-btn'
                    onClick={()=>{
                        const filterList = resListU.filter((res)=>res.info.avgRating >3.9);
                        setfilterResList(filterList);
                            console.log(filterList);

                    }}
                    
                    
                    >Top Rated</button>
                    
                
                
            </div>
            <div className="card-container">
               {filterResList.map((restaurant)=>(
               <Link 
               key={restaurant.info.id} 
               to={"/restaurants/" + restaurant.info.id}> 
               <ResCard  resData={restaurant}/></Link>
                
               ))
                }
            </div>


        </div>
    )
}

export default Body