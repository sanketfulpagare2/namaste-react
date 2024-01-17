import React, { useState } from 'react'
import { CDN_URL } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addItems } from '../utils/cartSlice'

const ItemList = (item) => {
    const [vegfilter, setvegfilter] = useState("")

    const dispatch=useDispatch()

    const handleAddItem=(data)=>{
        dispatch(addItems(data));
    }
   
  return (
    <div>
        
        
        {item.data.map((data)=>
        
        
        ((vegfilter==="VEG"?data?.card?.info?.itemAttribute.vegClassifier==="VEG":true ) && <div key={data?.card?.info?.id} className=' border-b-2 m-2  p-5 flex border-gray-600 dark:border-gray-600 text-left'>
            <div className="w-9/12">
                <div className="font-semibold  ">
                    <span>{(data?.card?.info?.itemAttribute.vegClassifier==="NONVEG")
                    ?(<h1 className='text-red-600'>🥩 Non-Veg</h1>)
                    :(<h1 className='text-green-600'  >🍏 Veg</h1>)
                    
                    
                     
                    }</span>
                    <span>{data?.card?.info?.name}</span><br/>
                    <span>₹{(data?.card?.info?.price ? data?.card?.info?.price/100 :data?.card?.info?.defaultPrice/100 )}</span>
                </div>
            
                <p className='text-xs my-5'>{data?.card?.info?.description}</p>
            </div>
            <div className=' relative mx-4 flex justify-center place-items-end'>
            <div className=" flex py-5 justify-center">
                  
                  
                  
                <img  src={CDN_URL+data?.card?.info?.imageId} className= "w-[190px] h-[120px] rounded-lg shadow-lg object-cover "></img>  
                  
                    <button className=' absolute py-1 px-4 rounded-md bg-white hover:scale-105   text-amber-500 shadow-lg font-bold bottom-1 '
                    
                        onClick={()=>handleAddItem(data)}
                    
                    >Add +</button>

                
                </div>

            </div>  
        </div>
        

        ))}
       
    </div>

  )
}

export default ItemList