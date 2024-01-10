
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu =(props)=>{


    const {resId}=useParams();
    const resInfo=useRestaurantMenu(resId);

    if(resInfo===null){
        return <Shimmer/>
    }
    
    const {name ,cuisines ,costForTwoMessage}=resInfo?.cards[0]?.card?.card?.info;
    const {itemCards} =resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    
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