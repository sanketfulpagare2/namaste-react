
import React from 'react'
import { CDN_URL } from '../utils/constants';
import { useState } from 'react';
import ResCard from './ResCard';


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
  )
}

export default Carousel