import React, { useState } from "react";

export default function Login(){
    const [login,setlogin]=useState({
        email:"",
        pass:"",
        conpass:""
    })
    console.log(login)
    function hundlLogin(event){
        const {name,value}=event.target
    
        setlogin((prevlogin)=>(
                {
                    ...prevlogin,
                    [name]: value
                }
            )
        )

    }
    function checkpass(){
        if(login.pass==login.conpass){
            console.log("you registred successfuly")
        }else {
            console.log("rak lcod ghlat")
        }
    }
 

    return(
        <div>
             <form className="formdata">
            <label htmlFor="email">votre email</label>
            <input onChange={hundlLogin} className="inputdata" placeholder="votre email" type="text" value={login.email}
            name="email" />
            <label >votre password</label>
            <input onChange={hundlLogin} type="password" className="inputdata" placeholder="password" name="pass"  value={login.pass} />
            <label>confirm password </label>
            <input  className="inputdata" type="password" placeholder="confirm votre password" name="conpass"  value={login.conpass} onChange={hundlLogin} />
        

            
        </form>
        <button onClick={checkpass} >submit </button>

        </div>
   
    )
}