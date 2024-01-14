
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

        
        const {login}=this.state.userInfo;
       
        return(
                <div className="user-card">
                  
                    
                    <h2>Name:{login}</h2>
                    
                </div>
        )
    
    }
}
export default UserClass;