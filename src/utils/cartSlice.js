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
       
            
            console.log(action?.payload?.info)      
        //    console.log(state.items.indexOf(action.payload.card.info.id),action.payload.card.info.id)


       },
      
    
    }
})
export const{addItems,clearItems,removeItem,addCount,subsCount}=cartSlice.actions;
export default cartSlice.reducer;