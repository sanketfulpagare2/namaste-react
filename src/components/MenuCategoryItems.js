import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItems, clearItems, removeItem, } from '../utils/cartSlice'


import UserContext from '../utils/UserContext'
import { useState,useEffect } from 'react'



const Items = ({data,vegfilter,CDN_URL}) => {

    useEffect(()=>{
        let thatItem=cartItems.find(item => (item.card.info.id === data.card.info.id))
        thatItem? setItemCount(thatItem.quantity):setItemCount(1);

    },[])


    const cartItems=useSelector(store=>store.cartD.items);
    
    const [itemCount, setItemCount] = useState(0);
    const dispatch=useDispatch();






    const handleAddItem=(data)=>{
        let thatItem=cartItems.find(item => (item.card.info.id === data.card.info.id))
         thatItem? setItemCount(thatItem.quantity+1):setItemCount(1);
        dispatch(addItems(data));
        
        

    }
    const handleremoveItem=(data)=>{
       
        dispatch(removeItem(data));
       setItemCount(itemCount-1)
      
    }
   
  return (
    <div>
    
    {((vegfilter==="VEG"?data?.card?.info?.itemAttribute.vegClassifier==="VEG":true ) && 
    
    <div  className=' border-b-2 m-2  p-5 flex border-gray-600 dark:border-gray-600 text-left'>
            <div className="w-9/12">
                <div className="font-semibold  ">
                    <span>{(data?.card?.info?.itemAttribute.vegClassifier==="NONVEG")
                    ?(<h1 className='text-red-600'>🥩 Non-Veg</h1>)
                    :(<h1 className='text-green-600'  >🍏 Veg</h1>)
                          
                    }</span>
                    <span>{data?.card?.info?.name}</span><br/>
                    <span>₹{
                    parseInt(
                    (itemCount!==0)?
                    (data?.card?.info?.price ? data?.card?.info?.price/100 :data?.card?.info?.defaultPrice/100 )
                     :         (data?.card?.info?.price ? data?.card?.info?.price/100 :data?.card?.info?.defaultPrice/100 )  
                     
                    )
                }</span>
                </div>
            
                <p className='text-xs my-5'>{data?.card?.info?.description}</p>
            </div>
            <div className=' relative mx-4 flex justify-center place-items-end'>
            <div className=" flex py-5 justify-center">
                  
                     
                <img  src={CDN_URL+data?.card?.info?.imageId} className= "w-[190px] h-[120px] rounded-lg object-cover "></img>  
                  <div className="div absolute py-1 px-1 rounded-md bg-white hover:scale-105   text-amber-500 shadow-lg font-extrabold bottom-1">
                
                   {cartItems.find(item => (item.card.info.id === data.card.info.id))

 
                
                   ?
                   <>
                      <button className='px-2  border-solid border-r-2 border-amber-300 '
                    
                        onClick={()=>handleremoveItem(data)}
                    
                        >-</button>

                       
                        
                        <span className='px-2  '>
                            {itemCount}
                            </span>
                        
                        <button className=' px-2 border-solid border-l-2 border-amber-300'
                    
                        onClick={()=> handleAddItem(data)}
                    
                         >+</button>
                    </>: ( <button className=' px-4  border-solid  border-amber-300'
                    
                    onClick={()=>handleAddItem(data)}
                
                     >Add +</button>)
                    
                  }
                   
                    </div>

                </div>

            </div>  
        </div>
        

        )}
    
    </div>
  )
}

export default Items;