import React, { useState } from 'react'
import CartItem from './CartItem'
import MenuCategoryItems from "./MenuCategoryItems"
import { CDN_URL } from '../utils/constants'


// import UserContext from '../utils/UserContext'


const CartItemList = ({data}) => {

  
  console.log(data)
  return (
    <div>{
       data.map((item=><div className="">
      <MenuCategoryItems
      key={item?.card?.info?.id}
      data={item}
     
      CDN_URL={CDN_URL}


      
      
      />
      <h1 className='absolute -mt-14 ps-7 font-medium'>Price For {item?.quantity} Items: ₹{(item?.card?.info?.price ? parseInt(item?.card?.info?.price/100) :parseInt(item?.card?.info?.defaultPrice/100))*item?.quantity}</h1>
      

      </div>
      ))
    
    
      
      
      }</div>
  )
}

export default CartItemList