import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ItemList from './ItemList';
import { useDispatch } from 'react-redux';
import { clearItems } from '../utils/cartSlice';
import UserContext from '../utils/UserContext';
import CartItemList from './CartItemList';


const Cart = () => {




 const cartItems=useSelector(store=>store.cartD.items);
 const {loggedInUser}=useContext(UserContext)
 const [itemPrice,setItemPrice]=useState(0);

 const dispatch=useDispatch();
 const handlerBtn=()=>{
    dispatch(clearItems())
    
 }





  return (
    <div className='text-center  w-screen py-16 h-screen dark:text-white'> 
        <h1 className='font-bold'>{loggedInUser.split(" ")[0]}'s Cart </h1>
        
        {cartItems.length!==0?<><button  className="py-1 px-4 rounded-md bg-white hover:scale-105   text-green-500 shadow-lg font-bold" onClick={()=>handlerBtn()}>Clear Cart</button>
        <div className="itemCartList px-60 my-9">        
             {/* <ItemList data={items}/> */}
            <CartItemList  data={cartItems}  /> 

        </div> </>: <>
        <div className='text-2xl font-bold mt-9'>Your Cart is Empty</div>
        <div className="flex content-center    justify-center items-center">
          <img className='m-10 rounded' src=''/>
        </div>  
          <h2 className='font-medium text-2xl'>Add Some Cart Items</h2></>}
        

    </div>
  )
}

export default Cart;