import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { setMins } from "../utils/cartSlice";

const ResCard = (props) => {
  
   const { resData } = props;
  const {
    name,
    cuisines,

    avgRating,
    aggregatedDiscountInfoV3,

    cloudinaryImageId,
    sla,
  } = resData?.info;
 
 

  
  return (
    <div
      className="res-card  p-3 mx-2 w-[250px] min-h-[300px] bg-slate-50 justify-center rounded-md shadow-xl text-gray-700 dark:text-white
         dark:bg-slate-700  hover:scale-105 transition duration-300 ease-in-out "
    >
      <div className="res-logo ">
        <h4 className="absolute bg-green-500 font-normal   px-2 rounded-r-full    ">
          {aggregatedDiscountInfoV3.header}
        </h4>

        <img
          className=" w-full h-[150px] object-cover rounded-md"
          src={CDN_URL + cloudinaryImageId}
          alt="product"
        />
      </div>
      <h2 className="font-bold text-lg">{name} </h2>

      <div className="flex gap-2 font-semibold">
        <div className="rating">
          <h4>⭐{avgRating} </h4>
        </div>
        <h4>|</h4>
        <h4>{sla.deliveryTime} mins</h4>
      </div>

      <h4 className="font-normal">{cuisines.slice(0, 4).join(", ")}</h4>
    </div>
  );
};

export default ResCard;
