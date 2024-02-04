import React from 'react'
import { CDN_URL } from '../utils/constants';

const Carousel = ({carousel,setfilterResList}) => {

   
    console.log(carousel)
    
  return (
    <div className='relative mx-10'>
       
            <div className="flex overflow-x-auto mix-blend-multiply">


                {carousel.map((item)=> <img key={item.id} className='w-40  hover:cursor-pointer' 
                
                
                
                onClick={
                    
                    
                
                    async ()=>{

                        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5642452&lng=73.7768511&collection="+item.entityId.slice(36)+"&sortBy=&filters=&type=rcv2&offset=0&page_type=null")
                        const json =await data.json()
                        console.log(json.data.cards)
                        const carousels= json.data.cards.filter((c) =>
                        c.card?.card?.["@type"] ===
                        ("type.googleapis.com/swiggy.presentation.food.v2.Restaurant") )




                            console.log(carousels)



                        console.log(item.entityId.slice(36))
                    }
                
                
                
                
                } src={CDN_URL+item.imageId}/>)}




            </div>

    </div>
  )
}

export default Carousel