
import React from 'react'
import { CDN_URL } from '../utils/constants';
import { useState } from 'react';
import ResCard from './ResCard';
import { Link } from 'react-router-dom';



const Carousel = ({carousel,setfilterResList}) => {

   
   const [carouselList,setCarouselList]=useState([]);
    
  return (
    <div className='mx-14'>
       
            <div className="flex overflow-x-auto  rounded-full  scrollbar-hide">


                {carousel.map((item)=> <img key={item.id} className='w-32 hover:cursor-pointer' 
                
                
                
                onClick={
                    
                    
                
                    async ()=>{

                        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5642452&lng=73.7768511&collection="+item.entityId.slice(36)+"&sortBy=&filters=&type=rcv2&offset=0&page_type=null")
                        const json =await data.json()
                        console.log(json.data.cards)
                        const carousels= json.data.cards.filter((c) =>
                        c.card?.card?.["@type"] ===
                        ("type.googleapis.com/swiggy.presentation.food.v2.Restaurant") )
                        setCarouselList(carousels);
                  
                    }
                } src={CDN_URL+item.imageId}/>)}





            </div>

            <div className={carouselList.length!==0 && `m-10 py-2 rounded-xl bg-[#FDECCE] dark:bg-transparent dark:border-2 dark:border-slate-700 `}>
              
              <h1 className='font-bold mx-8 my-6 text-2xl dark:text-white'>Here are some popular restaurants in your area</h1>
                  <div className=" flex w-11/12 py-5 overflow-x-scroll gap-5 ps-5 rounded-md  mx-auto  scrollbar-hide ">
            {carouselList.length!==0 && carouselList.map(restaurant=>
            <Link
            className="my-3"
            key={restaurant.card.card.info.id}
            to={"/restaurants/" + restaurant.card.card.info.id}
          >
            <ResCard resData={restaurant.card.card} />
          </Link>
            
            )


            }
            </div>
          </div>

    </div>
  )
}

export default Carousel