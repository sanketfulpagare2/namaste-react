import { json } from "express/lib/response";
import React from "react";
class UserClass extends React.Component{

    constructor(props){
        super(props)
        this.state = {
             
            userInfo:{
                name:"NA",
                location:"NA",
                contact:" NA ",
            }

        }
    }

    async componentDidMount(){
        const data =await fetch("https://api.github.com/users/sanketfulpagare2");
        const json =await data.json();
        console.log(json)
        this.setState(
            {
                userInfo:json,
            }
            
        )
    }
    render(){

        
        const {name,location,contact}=this.state.userInfo;
       
        return(
                <div className="user-card">
                  
                    
                    <h2>Name:{name}</h2>
                    <h3>Location:{location}</h3>
                    <h4>Contact:{contact}</h4>
                </div>
        )
    
    }
}
export default UserClass;