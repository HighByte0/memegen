import React from "react";

export default function Travel(props){


    return(
        <div className="card--flex">
             <img className="card--img" src={`./img/${props.image}`} width="300px"/>
            <div className="card--row"> 
           

            <div>

            <i class="fa-light fa-location-dot"></i> {props.location} <a href={props.googleurlmap}>voir dans le map</a>
                </div>
            <h1>{props.title}</h1>

            <div>{props.startdate} &nbsp; {props.enddate} </div>

            <p className="card--para">
            {props.description}
            </p>

            </div>
           
            


        </div>
    )
}