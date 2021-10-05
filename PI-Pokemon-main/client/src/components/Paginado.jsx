import React from "react";
import "./Paginado.css";

export default function Paginado ({pokemonsForPage, allPokemons, paginado}){
    const pageNumbers = []
    for(let i=1; i<=Math.ceil(allPokemons/pokemonsForPage); i++){
      
        pageNumbers.push(i)
    }

    return (
        <nav className = "paginado">
            <ul>
                { pageNumbers &&
                pageNumbers.map(number =>(
                    <li className="number" key={number}>
                    <a onClick={()=> paginado(number)}>{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}