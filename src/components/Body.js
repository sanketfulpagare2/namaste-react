import React, { Suspense, useEffect, useState } from "react";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

import UserContext from "../utils/UserContext";
import { useContext } from "react";
import SearchBar from "./SearchBar.js";

const Body = () => {
  const [resListU, setresListU] = useState([]);
  const [filterResList, setfilterResList] = useState([]);
  const [searchName, setsearchName] = useState("");
  const { showSearch } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5642452&lng=73.7768511&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setresListU(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.sort(
        (a,b)=>{
          return a.info.sla.deliveryTime-b.info.sla.deliveryTime
        }
      )
    );

    setfilterResList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.sort(
        (a,b)=>{
          return a.info.sla.deliveryTime-b.info.sla.deliveryTime
        }
      )
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1>You are currently offline!</h1>;

  //conditional Rendring
  if (resListU.length === 0) {
    return <Shimmer />;
  }
 
  


  if (filterResList === undefined) {
    return <Shimmer />;
  }

  return (
    <div className="body my-20">




        



    

      {showSearch && (
       <SearchBar 
       resListU={resListU}
       searchName={searchName} 
       setsearchName={setsearchName}
       setfilterResList={setfilterResList}
       ></SearchBar>
       
      )}

      




      <div className="card-container m-10 justify-center flex flex-wrap gap-7  ">
          {console.log(filterResList)}
    


        {filterResList.map((restaurant) => (
          <Link
            className="my-3"
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <ResCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
