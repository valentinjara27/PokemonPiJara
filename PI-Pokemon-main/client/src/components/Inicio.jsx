import React from "react";
import {Link} from "react-router-dom";
import "./Home.css"; 

export default function Inicio(){
    return(
        <div className="fondoinicio">
            <h1>Bienvenido a mi pagina de Pokemon</h1>
            <Link to ="/home">
            <button className="button">Ingresar</button>
            </Link>
            
        </div>
    )
}