import React from 'react'
import { CDN_URL } from '../utils/constants';

const ResCard = (props) =>{
    const {resData }= props;
    const {
        name,
        cuisines,
        costForTwo,
        avgRating,
        cloudinaryImageId,
        sla
    }=resData?.info;


    return(
        <div className="res-card">
            <div className="res-logo">
                <img src={CDN_URL+ cloudinaryImageId} alt="product"/>
            </div>
            <h3>{name} </h3>
            <h4>{cuisines.join(", ")}</h4>

            <h4>{costForTwo}</h4>
            

            <h4>{sla.deliveryTime}minutes</h4>
            <div className="rating"><h4>{avgRating} ⭐</h4></div>

        </div>
    )
}

export default ResCard;