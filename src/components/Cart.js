import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ItemList from './ItemList';
import { useDispatch } from 'react-redux';
import { clearItems } from '../utils/cartSlice';
import UserContext from '../utils/UserContext';
import CartItemList from './CartItemList';

const Popup = () => {
  return (
    <>
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"></div>
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 dark:bg-slate-700 bg-white p-6 rounded-lg shadow-lg z-50 flex flex-col items-center">
      <svg
        className="w-12 h-12 text-green-500 mb-4 checkmark-animation"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          strokeDasharray: 100,
          strokeDashoffset: 100,
        }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 13l4 4L19 7"
        ></path>
      </svg>
      <p>Thanks For ordering</p>
    </div>
  </>
  );
};

const Cart = () => {


  const [showPopup, setShowPopup] = useState(false);

  const handleCheckout = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      handlerBtn();
    }, 1500); // Pop-up will disappear after 3 seconds
    
  };

 const cartItems=useSelector(store=>store.cartD.items);
 const {loggedInUser}=useContext(UserContext)
 const [isCheckout,setIsCheckout]=useState(false)
 const [itemPrice,setItemPrice]=useState(0);

 const dispatch=useDispatch();
 const handlerBtn=()=>{
    dispatch(clearItems())
    
 }

 


useEffect(()=>{
  const totalPrice = cartItems.reduce((acc, item) => acc + item.quantity * (item?.card?.info?.price ? parseInt(item?.card?.info?.price/100) :parseInt(item?.card?.info?.defaultPrice/100)), 0);
  setItemPrice(totalPrice)
 
  
},[cartItems])




  return (
    <div className='text-center  w-screen py-16 pb-64 min-h-min dark:text-white'> 
        <h1 className='font-bold'>{loggedInUser.split(" ")[0]}'s Cart </h1>
        
        {cartItems.length!==0?<><button  className="py-1 px-4 rounded-md bg-white hover:scale-105   text-green-500 shadow-lg font-bold" onClick={()=>handlerBtn()}>Clear Cart</button>
        <div className="itemCartList px-60 my-9">        
             {/* <ItemList data={items}/> */}
            <CartItemList  data={cartItems}  /> 
            <h1>Total Price:₹{itemPrice}.</h1>
            

            <div className="relative">
      <button 
        onClick={handleCheckout} 
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Check Out
      </button>
      {showPopup && <Popup />}
    </div>



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