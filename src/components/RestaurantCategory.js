import React, { useState } from 'react'
import ItemList from './ItemList';

const RestaurantCategory = (props) => {
const{title,itemCards}=props?.data;
const [count, setcount] = useState(1)




const clickHandler=()=>{
  (props.showItems)?setcount(count+1
    
   ):setcount(1);
   (count===2?setcount(1):setcount(count+1))
   
  
  props.setShowIndex()
}
  return (
    
      <div className="w-6/12 mx-auto my-4 m-5 py-2 px-4 rounded-md bg-slate-100 shadow-md dark:bg-slate-700 dark:text-white  ">
        <div className="cursor-pointer flex  justify-between" onClick={clickHandler}>
          
          <span className="font-semibold text-lg">
            {title}({itemCards.length})</span>
          <span>{"▼"}</span>
        
        </div>



              {console.log(count)}
              {props.showItems &&count===1 && <ItemList data={props?.data?.itemCards}/>}
        </div>
   
  )
}

export default RestaurantCategory;