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
            state.items.push(action.payload);
                
        },
        clearItems:(state)=>{
            state.items.length=0;
        },
       removeItem:(state,action)=>{
        const index = state.items.findIndex((item) => item.card.info.id === action.payload.card.info.id); 
        
        if (index > -1) {
            state.items.splice(index, 1);
          } else {
            alert("The item was not found in the list!");
            }
       },
      
    }
})
export const{addItems,clearItems,removeItem,addCount,subsCount}=cartSlice.actions;
export default cartSlice.reducer;