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
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.11610&lng=79.07060&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log(json.data?.cards[0]?.card?.card?.imageGridCards?.info)
      setCarousel(json.data?.cards[0]?.card?.card?.imageGridCards?.info);
  
      setresListU(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants.sort(
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