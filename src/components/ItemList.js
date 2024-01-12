import React from 'react'
import { CDN_URL } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addItems } from '../utils/cartSlice'

const ItemList = (item) => {

    const dispatch=useDispatch()
    const handleAddItem=()=>{
        dispatch(addItems("pizaa"));
    }
   
  return (
    <div>
        
        
        {item.data.map((data)=>
        
        <div key={data?.card?.info?.id} className=' border-t-2 m-2 mt-5 p-5 flex border-gray-600 dark:border-gray-600 text-left'>
            <div className="w-9/12">
                <div className="font-semibold  ">
                    <span>{data?.card?.info?.name}</span><br/>
                    <span>₹{(data?.card?.info?.price ? data?.card?.info?.price/100 :data?.card?.info?.defaultPrice/100 )}</span>
                </div>
            
                <p className='text-xs my-5'>{data?.card?.info?.description}</p>
            </div>
            <div className=' relative mx-4 flex justify-center place-items-end'>
            <div className="absolute ">
                    <button className=' py-1 px-4 rounded-md bg-blue-500 hover:bg-blue-600 text-white font-semibold'
                    
                        onClick={handleAddItem}
                    
                    >Add +</button>

                </div>
                <img  src={CDN_URL+data?.card?.info?.imageId} className= "w-[140px] h-[100px] rounded-lg shadow-md"></img>  
               

            </div>  
        </div>
        

        )}
       
    </div>

  )
}

export default ItemList