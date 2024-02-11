import { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import ResNestedItems from "./ResNestedItems";
import { useDispatch, useSelector } from "react-redux";
import { Switch } from "@mui/material";




const RestaurantMenu = (props) => {
  const dispatch=useDispatch();
  const { resId } = useParams();
  
  const [showIndex, setShowIndex] = useState(0);
  const resInfo = useRestaurantMenu(resId);
  const [prevIndex, setprevIndex] = useState(0)
  const [vegfilter, setvegfilter] = useState("");
  
  
 

  if (resInfo.length === 0) {
    return <Shimmer />;
  }
  const { name, cuisines ,sla } = resInfo?.cards[0]?.card?.card?.info;

  
 



    



  const categories= resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) =>
      c.card?.card?.["@type"] ===
      ("type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")  );

      

  const categories2= resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) =>
      c.card?.card?.["@type"] ===
      ("type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory") )
      


    // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    const isVegFilter=()=>{
      vegfilter===""?setvegfilter("VEG"):setvegfilter("");
    }


 
  return (
    <div className="menu text-center my-10 h-fit">
      <h1 className="my-5 font-bold text-2xl dark:text-white">{name}</h1>
      <p className="font-medium dark:text-white">
        <b></b> {cuisines.join(", ")}
      </p>
        <h1 className="font-medium dark:text-white">Delivery Time : {sla.deliveryTime}mins </h1>
         
        <span className="flex justify-center items-center"> 
         <h4 className="text-green-600 font-bold">Only Veg </h4> <Switch color="info" onChange={isVegFilter}/>
         </span>
     


      {categories.map((category, index) => (
        
       
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            vegfilter={vegfilter}
            showItems={index === showIndex ? true : false}

            
            //below prop works on click,dose not get invoked while re-render
            setShowIndex={() => setShowIndex(index===showIndex?null:index)}
          />
       
      ))}
      {categories2.map((category, index) => (
     
          <ResNestedItems
            key={category?.card?.card?.title}
            data={category?.card?.card}
            vegfilter={vegfilter}
            showItems={index === showIndex ? true : false}
            
            //below prop works on click,dose not get invoked while re-render
            setShowIndex={() => setShowIndex(index===showIndex?null:index)}
          />
       
      ))}





    </div>
  );
};
export default RestaurantMenu;
