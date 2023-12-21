import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";



const RestaurantMenu =(props)=>{
    const [resInfo,setresInfo]=useState(null);
    const {resId}=useParams();
    
    useEffect(()=>{

        fetchMenu();
    },[]);

    const fetchMenu =async()=>{
        let data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5642452&lng=73.7768511&restaurantId=${resId}`);
        let json = await data.json();
        setresInfo(json.data)  ;
        
        
    };
    if(resInfo===null){
        return <Shimmer/>
    }
    
    const {name ,cuisines ,costForTwoMessage}=resInfo?.cards[0]?.card?.card?.info;
    const {itemCards} =resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards);
    

   
    

    

    return (
        <div className="menu">

        <h1>{name}</h1>
        <p><b>Cusine:</b> {cuisines.join(", ")} - {costForTwoMessage} </p>
        <h2>Menu</h2>
        <ul>
            {itemCards.map((item)=>
            <li key={item.card.info.id}   >
                {item.card.info.name}
                -₹{item.card.info.price/100}
            </li>
            
            
            )}
           
        </ul>
        


      
    
        </div>
    )

   
}
export default RestaurantMenu;