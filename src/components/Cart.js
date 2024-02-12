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
    <div className='text-center m-5 p-5 dark:text-white'> 
        <h1 className='font-bold'>{loggedInUser.split(" ")[0]}'s Cart </h1>
        
        <button  className="py-1 px-4 rounded-md bg-white hover:scale-105   text-green-500 shadow-lg font-bold" onClick={()=>handlerBtn()}>Clear Cart</button>
        <div className="itemCartList px-60 my-9">        
             {/* <ItemList data={items}/> */}
            <CartItemList  data={cartItems}  /> 

        </div>
        <h1>Total Price:
          
         {itemPrice}
           </h1>

    </div>
  )
}

export default Cart;