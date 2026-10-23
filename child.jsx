import React ,{ useState } from 'react';
import Parent from './parent.jsx';
 
function Child() {
    let srikanth =100;
   let [A,B]= useState(1000);
   console.log(A);
   console.log(useState())
   console.log(srikanth)
   function Increses(srikanth){
    srikanth++;
    console.log(srikanth);
   }


  let inc=()=>{
   B(A+1);

    console.log("clicked")
   }

return(

    <div>
        <h2>this is srikanth {srikanth} </h2>
        <Parent value={srikanth} />
        <button onClick={()=>{Increses(srikanth)}}>Increment </button>
        <button onClick={inc}> click</button>
        <h1> THIS IS PARENT ELEMENT Incresess(200000)</h1>
    </div>
)}
export default Child;