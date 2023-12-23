import { useState } from "react";



const User = (props) =>{
    const [count,setcount]=useState("0")
    const [count2,setcount2]=useState("1")
    return(
        <div className="user-card">
            <h1>Count:{count}</h1>
            <h1>Count2:{count2}</h1>
            <h2>Name:{props.name}</h2>
            <h3>Location:{props.location}</h3>
            <h4>Contact:{props.contact}</h4>
        </div>
    )
}
export default User;