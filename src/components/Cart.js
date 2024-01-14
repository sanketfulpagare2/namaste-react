import React from 'react'
import { useSelector } from 'react-redux'
import ItemList from './ItemList';
import { useDispatch } from 'react-redux';
import { clearItems } from '../utils/cartSlice';

const Cart = () => {




 const {items,myname}=useSelector(store=>store.cartD);

 const dispatch=useDispatch();
 const handlerBtn=()=>{
    dispatch(clearItems())
    console.log("clicked")
 }
 

  return (
    <div className='text-center m-5 p-5 dark:text-white'> 
        <h1 className='font-bold'>{myname}'s Cart </h1>
        
        <button  className="py-1 px-4 rounded-md bg-white hover:scale-105   text-green-500 shadow-lg font-bold" onClick={()=>handlerBtn()}>Clear Cart</button>
        <div className="itemCartList px-60 my-9">        
            <ItemList data={items}/>

        </div>

    </div>
  )
}

export default Cart;