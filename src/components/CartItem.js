import React from 'react'
import { CDN_URL } from '../utils/constants';
import MenuCategoryItems from "./MenuCategoryItems"

const CartItem = ({item}) => {
    console.log(item);

    if(!item){
        return;
    }
  return (
    <div>

<MenuCategoryItems
        key={item?.card?.info?.id}
        data={item}
       
        CDN_URL={CDN_URL}
        
        
        />




    </div>
  )
}

export default CartItem