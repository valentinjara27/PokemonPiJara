import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../actions/index";
import { useEffect } from "react";

export default function Details(props){
    console.log(props);
const dispatch = useDispatch()
var idPokemon = props.match.params.id;
useEffect(()=>{
    
    dispatch(getDetails(props.match.params.id))
}, [])

const myPokemon = useSelector ((state) => state.details)

return (
    <div className ="fondodetails">
        {
        myPokemon.length  ?
        <div className = "details">
            {
                myPokemon[0].id = idPokemon ? <div>
           <h1>{myPokemon[0].name.charAt(0).toUpperCase() + myPokemon[0].name.slice(1)}</h1>
            <img src= {myPokemon[0].img} width="100px" height="150px"/>
            <h4>Vida: {myPokemon[0].hp}</h4>
            <h4>Ataque: {myPokemon[0].attack}</h4>
            <h4>Defensa: {myPokemon[0].defense}</h4>
            <h4>Velocidad: {myPokemon[0].speed}</h4>
            <h4>Altura: {myPokemon[0].height}</h4>
            <h4>Peso: {myPokemon[0].weight}</h4>
            <h4>Tipos: {myPokemon[0].createdInBd ?  myPokemon[0].types.map(el => el.name + (" ")) : myPokemon[0].type + " " }</h4>
            </div>
            : <div class ="preloader"> </div> } 
             
        </div> 
         : <div class ="preloader"> </div>
    }
        <Link to="/home">
            <button className="button">Volver</button>
        </Link>
    </div>
)

}