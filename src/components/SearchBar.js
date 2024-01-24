import React from 'react'

const SearchBar = (props) => {
const {resListU,searchName,setsearchName,setfilterResList} =props;




    const filters = (name="") => {
        let filteredList = resListU.filter((item) => {
          return item.info.name.toLowerCase().includes(name.toLowerCase());
        });
        setfilterResList(filteredList);
       
      };
  return (
    
<div className="filter flex py-7  justify-center gap-10">
          <input
            className=" border-none rounded-full px-5 shadow-inner  bg-green-50 outline-none font-semibold w-[35rem]     "
            type="text"
            placeholder="Search By Name..."
            value={searchName}
            onChange={(e) => {
              setsearchName(e.target.value);
              filters(e.target.value);
              
            }}
          />
        
          <button
            className="search-btn bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => {
              setsearchName("");
              filters();
            }}
          >
            All
          </button>
          <button
            className="topRated-btn  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => {
              const filterList = resListU.filter(
                (res) => res.info.avgRating > 3.9
              );

              filterList.sort(
                (a,b)=>{
                  return b.info.avgRating-a.info.avgRating
                }
              )
              console.log(filterList)
              setfilterResList(filterList);
              
            }}
          >
            Top Rated
          </button>
        </div>



  )

}

export default SearchBar;