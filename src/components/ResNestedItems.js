import React from 'react'
import { useState } from 'react';
import ItemList from './ItemList';

const ResNestedItems = (props) => {

    const{title,categories}=props?.data;
    const [count, setcount] = useState(1);
   
    const clickHandler=()=>{
       
        props.setShowIndex();
      
      
      }
      console.log(categories)
  return (


    <div className="w-7/12 mx-auto my-4 m-5 py-2 px-4 rounded-md  bg-blue-100 shadow-md dark:bg-slate-700 dark:text-white  ">
      
    <div className="cursor-pointer flex  justify-between" onClick={clickHandler}>
      
      <span className="font-semibold text-lg">
        {title}</span>
        <span>{ props.showItems?"▲":"▼"}</span>
    
    </div>
          
         { 
            categories.map((item,index)=>< div key={index}  >  

                {props.showItems && <ItemList data={item.itemCards}/>}
                
                </div>)
         }
          

    </div>


  )
}

export default ResNestedItems;