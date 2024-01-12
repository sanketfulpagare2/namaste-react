import { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";


const RestaurantMenu = (props) => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);


  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  // const {itemCards} =resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
     
  return (
    <div className="menu text-center my-10 h-fit">
      <h1 className="my-5 font-bold text-2xl dark:text-white">{name}</h1>
      <p className="font-medium dark:text-white">
        <b></b> {cuisines.join(", ")}
      </p>
      {categories.map((category, index) => (

          <>
         

        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={(index === showIndex)
           ?true:false}
          
        
          setShowIndex={() => setShowIndex(index)}
        /></>
      ))}
    </div>
  );
};
export default RestaurantMenu;
