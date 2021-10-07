import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../actions/index";
import { useEffect } from "react";

export default function Details(props){
    console.log(props);
const dispatch = useDispatch()

useEffect(()=>{
    dispatch(getDetails(props.match.params.id))
}, [])

const myPokemon = useSelector ((state) => state.details)

return (
    <div className ="fondodetails">
        {
        
        <div>
           <h1>{myPokemon.name}</h1>
            <img src= {myPokemon.img}/>
            <h4>Vida: {myPokemon.hp}</h4>
            <h4>Ataque: {myPokemon.attack}</h4>
            <h4>Defensa: {myPokemon.defense}</h4>
            <h4>Velocidad: {myPokemon.speed}</h4>
            <h4>Altura: {myPokemon.height}</h4>
            <h4>Peso: {myPokemon.weight}</h4>
            <h4>Tipos: {myPokemon.createdInBd ?  myPokemon.types.map(el => el.name + (" ")) : myPokemon.type + " " }</h4>
        </div> 
    }
        <Link to="/home">
            <button>Volver</button>
        </Link>
    </div>
)

}