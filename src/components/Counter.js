import React from "react";
import Resul from "./Resul";

export default function Counter(){

    function addnum(){
        
        return setnum(oldval=>oldval+1 )
        

        


    }
    function minusnum(){
        if(resul===0){
            return setnum(0)
        }
        else{
            return setnum(oldval=>oldval-1 )

        }
       

    }

    const [resul,setnum] =React.useState(0)
    console.log(resul)

 



    return (

        <div className="counter" align="center" >
        <button className="counter--minus" onClick={minusnum}>-</button>
        <Resul resul={resul} />

     
        <button className="counter--plus"  onClick={addnum}>+</button>
        
        
        
        </div>
    )
}