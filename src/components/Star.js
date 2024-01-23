import React from "react";

export default function (props){
    const staricon=props.isfilled ? "../img/fillstar.png" : "../img/rmst.png" 
    return(

    

        <img onClick={props.handClick} src={staricon}
      width="40px"/>
    

    )
   
   

}