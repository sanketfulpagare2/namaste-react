import React, { useState } from 'react'
import ResCard from './ResCard';
import resList from '../utils/mockData';

const Body = () =>{
    const [resListU, setresListU] = useState(resList)
    return(
        <div className="body">
            <div className="filter">
                
                    <button className='filter-btn'
                    onClick={()=>{
                        const filterList = resListU.filter((res)=>res.info.avgRating >4.3);
                        setresListU(filterList);
                            console.log(filterList);

                    }}
                    
                    
                    >Top Rated</button>
                    
                
                
            </div>
            <div className="card-container">
               {resListU.map((restaurant)=>(
                <ResCard key={restaurant.info.id} resData={restaurant}/>
                
               ))
                }
            </div>


        </div>
    )
}

export default Body