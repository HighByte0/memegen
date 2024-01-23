import React,{useEffect, useState}  from "react";

export default function Api(){
    const [starwarsdata,setstarwarsdata]=React.useState({})
    const [count,setcount]=useState(Math.floor(Math.random()*30))
    React.useEffect(function(){
        console.log(count)
    fetch(`https://swapi.dev/api/people/${count} ` )
       
        .then(res=>res.json())
        .then(data=>setstarwarsdata(data))
        
    
    },[count])

    return(
        <div>
            <pre> {JSON.stringify(starwarsdata,null,2)} </pre>
            <button onClick={()=>setcount(prevcoount=>prevcoount+1)} > next character </button>
        </div>

    )
}
