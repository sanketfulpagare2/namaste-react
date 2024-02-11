import React, { useState } from 'react'
import ItemList from './ItemList';


const RestaurantCategory = (props) => {
const{title,itemCards}=props?.data;




  

const clickHandler=()=>{

  
    
   
     props.setShowIndex();



}



  return (
    
      <div className="w-7/12 mx-auto my-4 m-5 py-2 px-4 rounded-md  bg-amber-50 shadow-md dark:bg-slate-700 dark:text-white  ">
      
        <div className="cursor-pointer flex  justify-between" onClick={clickHandler}>
          
          <span className="font-semibold text-lg">
            {title}({itemCards.length})</span>
          <span>{props.showItems  ?"▲":"▼"}</span>
        
        </div>

              
           
              {/* {props.showItems &&  <ItemList data={itemCards} /> } */}
              {props.showItems && <ItemList data={itemCards} vegfilter={props.vegfilter} /> }
              {/* { <div className={`${(props.showItems)? " hidden  ":" m-2 bg-black"}`}><ItemList data={itemCards} /></div> } */}
              
              
              
        </div>
   
  )
}

export default RestaurantCategory;