import React, { Suspense, useEffect, useState } from "react";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

import UserContext from "../utils/UserContext";
import { useContext } from "react";
import SearchBar from "./SearchBar.js";
import useResList from "../utils/useResList";
import Carousel from "./Carousel.js";

const Body = () => {
  const [searchName, setsearchName] = useState("");
  const { showSearch } = useContext(UserContext);
  
  const [resListU,setresListU,filterResList,setfilterResList,carousel]=useResList();
  

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


      <Carousel carousel={carousel}
      setfilterResList={setfilterResList}
       />

      {showSearch && (
       <SearchBar 
       resListU={resListU}
       searchName={searchName} 
       setsearchName={setsearchName}
       setfilterResList={setfilterResList}
       ></SearchBar>
       
      )}

    
      <div className="card-container m-10  py-2 rounded-xl  justify-center flex flex-wrap gap-7  ">
        
    


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
