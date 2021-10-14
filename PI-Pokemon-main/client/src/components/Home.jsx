import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { getPokemons, filterPokemonsByType, filterCreated, orderByName, orderByForce } from "../actions";
import { Link } from "react-router-dom";
import Card from "./Card";
import { connect } from "react-redux";
import Paginado from "./Paginado";
import SearchBar from "./SearchBar";
import "./Home.css"; 

  export default function Home () {
    const dispatch = useDispatch()
    const allPokemons = useSelector ((state)=> state.pokemons)
    const [orden, setOrden] = useState(" ")
    const [fuerza, setFuerza] = useState(" ")
    const [currentPage, setCurrentPage] = useState(1)
    const [pokemonsForPage, setPokemonsForPage] = useState(12)
    const indexOfLastPokemon = currentPage * pokemonsForPage
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsForPage
    let currentPokemons = allPokemons
    currentPokemons = allPokemons.slice(indexOfFirstPokemon,indexOfLastPokemon)
   

    const paginado = (pageNumber) =>{
        setCurrentPage(pageNumber)
    }

    

    useEffect (()=>{
        dispatch(getPokemons()) 
    },[])
    
    function handleClick(e){
        e.preventDefault();
        dispatch(getPokemons())
    }

    function handleFilterByType(e){
        dispatch(filterPokemonsByType(e.target.value))
    }
    function handleFilterCreated(e){
        dispatch(filterCreated(e.target.value))
    }
    function handleSort(e){
        e.preventDefault()
        dispatch(orderByName(e.target.value))
        setCurrentPage(1);
        setOrden(e.target.value)
    }
    function handleForce(e){
        e.preventDefault()
        dispatch(orderByForce(e.target.value))
        setCurrentPage(1);
        setFuerza(e.target.value)
    }

    return (
        <>
         {
             
            
        <div className = "fondo">
           
            
            <Link to = "/pokemons"><button className ="button">Crear Pokemon</button></Link>
            <h1>Pokemon App</h1>
            <button className ="button" onChange={e=>{handleClick(e)}}>Recargar</button>
            <div>
                <select className="caja" onChange={e => handleSort(e)}>
                <option value="all">Todos</option>
                    <option value="asc">A-Z</option>
                    <option value="desc">Z-A</option>
                </select>

                <select className="caja" onChange={e => handleForce(e)}>
                <option value="all">Todos</option>
                    <option value="mas">Mas Fuerte</option>
                    <option value="menos">Menos Fuerte</option>
                </select>
                
                <select className="caja" onChange={e => handleFilterByType(e)}>
                    <option value="all">Todos los tipos</option>
                    <option value="normal">Normal</option>
                    <option value="fighting">Fighting</option>
                    <option value="flying">Flying</option>
                    <option value="poison">Poison</option>
                    <option value="ground">Ground</option>
                    <option value="rock">Rock</option>
                    <option value="bug">Bug</option>
                    <option value="ghost">Ghost</option>
                    <option value="steel">Steel</option>
                    <option value="fire">Fire</option>
                    <option value="water">Water</option>
                    <option value="grass">Grass</option>
                    <option value="electric">Electric</option>
                    <option value="psychic">Psychic</option>
                    <option value="ice">Ice</option>
                    <option value="dragon">Dragon</option>
                    <option value="dark">Dark</option>
                    <option value="fairy">Fairy</option>
                    <option value="unknown">Unknown</option>
                    <option value="shadow">Shadow</option>
                </select>
        
                <select className="caja" onChange={e => handleFilterCreated(e)}>
                    <option value="all">Todos</option>
                    <option value="Exis">Existente</option>
                    <option value="created">Creado</option>
                </select>
                <Paginado 
                pokemonsForPage= {pokemonsForPage}
                allPokemons={allPokemons.length}
                paginado= {paginado}
                />
                <SearchBar/>
                <div className = "columna">
               {

            
                     allPokemons.length > 0 ?
                    currentPokemons?.map(el =>{ 
                       return(
                           <fragment className="carta">
                           <Link to={"/home/" + el.id}>
                                {el.createdInBd?
                       <Card  name={el.name} type={el.types} img={el.img} createdInBd={el.createdInBd}  />
                       :<Card  name={el.name} type={el.type} img={el.img}   />
                                }
                              
                       </Link>
                       </fragment>
                       )
                   
                })
               
                
                : <div class ="preloader"> </div>

                }  
                 </div>
            </div>
           
            
        </div>
         
         
            }
         </>
    )
}

