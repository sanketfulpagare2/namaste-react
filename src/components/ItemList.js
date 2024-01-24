import React, { useEffect, useState } from 'react'
import { CDN_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addItems, clearItems, removeItem } from '../utils/cartSlice'
import MenuCategoryItems from './MenuCategoryItems'

const ItemList = (item) => {
    const [vegfilter, setvegfilter] = useState("");
    
    
    

   
  return (
    <div>
        
        
        {item.data.map((data)=>
        
        <MenuCategoryItems
        key={data?.card?.info?.id}
        data={data}
        vegfilter={vegfilter}
        CDN_URL={CDN_URL}
        
        
        />
        )}
       
    </div>

  )
}

export default ItemList