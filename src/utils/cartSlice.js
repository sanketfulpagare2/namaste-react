import { createSlice } from "@reduxjs/toolkit"
import { useContext } from "react";
import UserContext from "./UserContext";



const cartSlice=createSlice({
    name:"cart",

    initialState:{
        items:[],
       



        
        
              
    },

    reducers:{
        addItems:(state,action)=>{
            const newItem = action.payload;
      const existingItem = state.items.find(item => item.card.info.id === newItem.card.info.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
                
        },
        clearItems:(state)=>{
            state.items.length=0;
        },
       removeItem:(state,action)=>{
        const index = state.items.findIndex((item) => item.card.info.id === action.payload.card.info.id); 
        const existingItem = state.items.find(item => item.card.info.id === action.payload.card.info.id);

      if (existingItem) {
        existingItem.quantity -= 1;
        if(existingItem.quantity===0){
          if (index > -1) {
            state.items.splice(index, 1);
          } else {
            alert("The item was not found in the list!");
            }
        }

      }
        else{
          alert("The item was not found in the list!");
        }
       },



    }
})
export const{addItems,clearItems,removeItem,addCount,subsCount}=cartSlice.actions;
export default cartSlice.reducer;