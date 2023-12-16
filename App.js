import React from "react";
import  ReactDOM  from "react-dom/client";

const jsxHeading= (<h1 className="heading">Hello React From jsx</h1>);






const Title =() => ( 
<h1>hello from comp 1</h1>
);



const Title2 =() => {
    return <>
    <div className="heading2">

        <h1 >this 2nd type of Component</h1>
    </div>
    </>
};



const Heading = () => (
    <div className="container">
        {jsxHeading}

        <Title />

        // ! AT the end of day it is JS function
        {Title()}
        
        <Title2 />

         <h2>I am a Component RC </h2>
    </div>
);




const root =ReactDOM.createRoot(document.getElementById("root"));



root.render(<Heading/>);