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
    if(Array.isArray(allPokemons)){
    currentPokemons = allPokemons.slice(indexOfFirstPokemon,indexOfLastPokemon)
    }
    else{
        
    }

    const paginado = (pageNumber) =>{
        setCurrentPage(pageNumber)
    }

    

    useEffect (()=>{
        dispatch(getPokemons()) //todo esto para no usar mapdispatchtoprops
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
            <button className ="button" onClick={e=>{handleClick(e)}}>Recargar</button>
            <div>
                <select className="caja" onClick={e => handleSort(e)}>
                    <option value="asc">Ascendentemente</option>
                    <option value="desc">Descendentemente</option>
                </select>
                <select className="caja" onClick={e => handleForce(e)}>
                    <option value="mas">Mas Fuerte</option>
                    <option value="menos">Menos Fuerte</option>
                </select>
                <select className="caja" onChange={e => handleFilterByType(e)}>
                    <option value="all">All</option>
                    <option value="normal">Normal</option>
                    <option value="fighting">Fighting</option>
                    <option value="flying">flying</option>
                    <option value="poison">poison</option>
                    <option value="ground">ground</option>
                    <option value="rock">rock</option>
                    <option value="bug">bug</option>
                    <option value="ghost">ghost</option>
                    <option value="steel">steel</option>
                    <option value="fire">fire</option>
                    <option value="water">water</option>
                    <option value="grass">grass</option>
                    <option value="electric">electric</option>
                    <option value="psychic">psychic</option>
                    <option value="ice">ice</option>
                    <option value="dragon">dragon</option>
                    <option value="dark">dark</option>
                    <option value="fairy">fairy</option>
                    <option value="unknown">unknown</option>
                    <option value="shadow">shadow</option>
                </select>
                <select className="caja" onChange={e => handleFilterCreated(e)}>
                    <option value="all">All</option>
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

