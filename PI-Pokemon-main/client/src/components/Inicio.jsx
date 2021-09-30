import React from "react";
import {Link} from "react-router-dom";

export default function Inicio(){
    return(
        <div>
            <h1>Bienvenido a mi pagina de Pokemon</h1>
            <Link to ="/home">
                <button>Ingresar</button>
            </Link>
        </div>
    )
}