import React, { useEffect, useState } from "react";

export default function Win(){
    const [winwidth,setwinwidth]=useState(window.innerWidth)

    useEffect(()=>{
        function watchwid(){
            console.log("ana khdam")

           let width=window.innerWidth
         setwinwidth(prevwid=>width)
            
        }

     window.addEventListener("resize",watchwid)
     return function(){
        console.log("ana tasb")
        window.removeEventListener("resize",watchwid)
     }
    },[])
    return(
        
        <h1  > window width is : {winwidth}  </h1>
    )
}