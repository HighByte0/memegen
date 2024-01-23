import React,{useState} from "react";
import Star from "./Star";



export default function Carte(){


    const [contact,setContact]=React.useState(
        {
            firstName:"hamza",
            lastName:"byhardi",
            phon:"+212 6060901478",
            email :"byhardihamza@gmail.com",
            isfavorite:true
        }
    )
    let staricon=contact.isfavorite ? "../img/fillstar.png" : "../img/rmst.png"

    function toglefavorite(){
    setContact(
        prevstat=>{
            return{
                ...prevstat,
                isfavorite:!prevstat.isfavorite

            }
        }
    )
        
    }

    return(
        <main>
            <article className="card">
                <img src="../img/tf.jpg"/>
                <div className="card--info">
                    <Star isfilled={contact.isfavorite}
                        handClick={toglefavorite} 
                          
                    
                    />
                    
               


                <h2>{contact.firstName} {contact.lastName} </h2>
                <p className="card--contact"> {contact.phon} </p>
                <p className="card--contact"> {contact.email} </p>


                </div>


                


                
            </article>
        </main>
        
    )
}
