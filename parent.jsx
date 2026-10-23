import React, { useState } from "react";
// import Child from "./child.jsx";

function Parent(props){      
    console.log(props.value);
    let [A,setA]=useState(20);
    console.log(A);
    console.log(props.value);
    let Incresess=()=>{
     setA(A+1);
     console.log("clicked")
    }
    

 
return(
    <div>
        <h2>This is parent element with value {props.value}</h2>
        <button onClick={Incresess}> Increses</button>

    </div>

)}
export default Parent;
