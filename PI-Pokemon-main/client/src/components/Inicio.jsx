import React from "react";
import {Link} from "react-router-dom";
import "./Home.css"; 

export default function Inicio(){
    return(
        <div className="fondoinicio">
            <h1>Bienvenido a mi pagina de Pokemon</h1>
            <Link to ="/home">
            <button className="pixelart-to-css animated flash">Ingresar</button>
            </Link>
            <br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    )
}