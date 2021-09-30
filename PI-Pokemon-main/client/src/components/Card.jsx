import React from "react";

export default function Card({name, type, img, attack}) {
    return (
        <div>
            <h3>{name}</h3>
            <h5>Types: {type}</h5>
            <img src={img} alt="img not found" width="200px" height="250px"/>
        </div>
    )
}