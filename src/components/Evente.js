import React, { useState } from "react";

export default function App(){
    const [things,usethings]=React.useState(["thing1 ","thing2" ])
    function additem(){
        usethings(
            prevthing=>[...things,`thing ${things.length +1}`]
        )

    }

    const thingelem=things.map(datathing=><p key={1}>{datathing}</p>)
   
  


    return(

        <div className="containner">
            <button onClick={additem} > add thing </button>
       
        {thingelem}
       
       

    </div>
    )
}

