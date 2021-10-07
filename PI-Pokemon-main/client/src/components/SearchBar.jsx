import React  from "react";
import { useState } from "react";
import {useDispatch} from "react-redux";
import { getNamePokemons } from "../actions";
import "./SearchBar.css";


export default function SearchBar (){
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    
    function handleInputChange(e){
        e.preventDefault()
        setName(e.target.value)
        console.log(name)
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(getNamePokemons(name))
    }
    
    return (
        <div className="search">
            <input className="searchTerm"
            type ="text"
            placeholder="Buscar..."
            onChange={(e) => handleInputChange(e)}
            />
            <button className="searchButton" type ="submit" onClick= {(e) => handleSubmit(e)}>Buscar</button>
        </div>
    )
}