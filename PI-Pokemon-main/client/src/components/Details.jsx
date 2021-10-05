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
    <div>
        {
        
        <div>
           <h1>{myPokemon.name}</h1>
            <img src= {myPokemon.img? myPokemon.img : myPokemon.img}/>
            <h4>Tipos: {!myPokemon.createdInDb? myPokemon.type + " " : myPokemon.type.map(el => el.name + (" "))}</h4>
        </div> 
    }
        <Link to="/home">
            <button>Volver</button>
        </Link>
    </div>
)

}