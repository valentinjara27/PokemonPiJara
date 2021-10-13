import React from "react";
import "./Card.css";

export default function Card({name, type, img, createdInBd}) {
    return (

        
        <div className = "carta">
            {
            name.length > 0 ?
            <div>
            <h3 className = "name">{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
            <h5 className = "type">{ createdInBd? type.map(el => el.name + (",")) : type + "," }</h5>
            <img className = "image" src={img} width="200px" height="250px"/>
            </div>
            : <div class ="preloader"> </div>
            }
        </div>
    )
}