import React from "react";
import "./Card.css";

export default function Card({name, type, img, attack, id}) {
    return (
        <div className = "carta">
            <h3 className = "name">{name}</h3>
            <h5 className = "type">Types: {type}</h5>
            <img className = "image" src={img} width="200px" height="250px"/>
        </div>
    )
}