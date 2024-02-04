import React from 'react'
import { useState,useEffect } from 'react';
const useResList = () => {
 
 
 
    const [resListU, setresListU] = useState([]);
    const [filterResList, setfilterResList] = useState([]);
    const [carousel,setCarousel]=useState([]);
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5642452&lng=73.7768511&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();

      setCarousel(json.data?.cards[0]?.card?.card?.imageGridCards?.info);
  
      setresListU(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.sort(
          (a,b)=>{
            return a.info.sla.deliveryTime-b.info.sla.deliveryTime
          }
        )
      );
  
      setfilterResList(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.sort(
          (a,b)=>{
            return a.info.sla.deliveryTime-b.info.sla.deliveryTime
          }
        )
      );
    };
 
 
 
 
 
 
 
 
 
 
    return [resListU,setresListU,filterResList,setfilterResList,carousel];
}

export default useResList