import React, {useState, useEffect} from "react";
import {Link,useHistory} from "react-router-dom";
import {postPokemon, getTypes, getPokemons} from "../actions/index";
import { useDispatch, useSelector } from "react-redux";
import "./Creations.css"

function validate(input){
    let errors = {};
    if(!input.name){
        errors.name = "Se requiere un Nombre";
    } else if (!input.hp){
        errors.hp = "Hp debe ser completado";
    }
    else if (!input.attack){
        errors.attack = "attack debe ser completado";
    } else if (!input.defense){
        errors.defense = "defense debe ser completado";
    } else if (!input.speed){
        errors.speed = "speed debe ser completado";
    } else if (!input.height){
        errors.height = "height debe ser completado";
    } else if (!input.weight){
        errors.weight = "weight debe ser completado";
    } else if (!input.img){
        errors.img = "img debe ser completado";
    }

    return errors;
}

export default function Creations(){
    const dispatch = useDispatch()
    const hystory = useHistory()
    const types = useSelector((state) => state.types)
    const [errors, setErrors] = useState({})

    const[input, setInput] = useState({
        name:"",
        hp:"",
        attack:"",
        defense:"",
        speed:"",
        height:"",
        weight:"",
        img: "",
        type: [],
    })

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value,
        
        })
        setErrors(validate({
            ...input,
            [e.target.name] : e.target.value
        }))

    }
    function handleSelect(e){
        setInput({
            ...input,
            type: [...input.type, e.target.value]
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(postPokemon(input))
        alert("Pokemon creado!!")
        setInput({
            name:" ",
            hp:"",
            attack:"",
            defense:"",
            speed:"",
            height:"",
            weight:"",
            img: "",
            type: [],
        })
        
    }

    function handleDelete(el){
        setInput({
            ...input,
            type: input.type.filter( type => type!== el)
        })
    }

    useEffect(() => {
        dispatch(getTypes())
    },[])


    return(
        <div className ="fondo">
            <Link to="/home"><button>Volver</button></Link>
            <h1>Crea tu Pokemon!</h1>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <div>
                    <label>Nombre:</label>
                    <input
                    type= "text"
                    value= {input.name}
                    name= "name"
                    onChange={handleChange}
                    />
                </div>
                {errors.name && (
                    <p className="error">{errors.name}</p>
                )}
                <div>
                    <label>Vida:</label>
                    <input
                    type= "text"
                    value= {input.hp}
                    name= "hp"
                    onChange={handleChange}
                    />
                </div>
                {errors.hp && (
                    <p className="error">{errors.hp}</p>
                )}
                <div>
                    <label>Ataque:</label>
                    <input
                    type= "text"
                    value= {input.attack}
                    name= "attack"
                    onChange={handleChange}
                    />
                </div>
                {errors.attack && (
                    <p className="error">{errors.attack}</p>
                )}
                <div>
                    <label>Defensa:</label>
                    <input
                    type= "text"
                    value= {input.defense}
                    name= "defense"
                    onChange={handleChange}
                    />
                </div>
                {errors.defense && (
                    <p className="error">{errors.defense}</p>
                )}
                <div>
                    <label>Velocidad:</label>
                    <input
                    type= "text"
                    value= {input.speed}
                    name= "speed"
                    onChange={handleChange}
                    />
                </div>
                {errors.speed && (
                    <p className="error">{errors.speed}</p>
                )}
                <div>
                    <label>Altura:</label>
                    <input
                    type= "text"
                    value= {input.height}
                    name= "height"
                    onChange={handleChange}
                    />
                </div>
                {errors.height && (
                    <p className="error">{errors.height}</p>
                )}
                <div>
                    <label>Peso:</label>
                    <input
                    type= "text"
                    value= {input.weight}
                    name= "weight"
                    onChange={handleChange}
                    />
                </div>
                {errors.weight && (
                    <p className="error">{errors.weight}</p>
                )}
                <div>
                    <label>img:</label>
                    <input
                    type= "text"
                    value= {input.img}
                    name= "img"
                    onChange={handleChange}
                    />
                </div>
                {errors.img && (
                    <p className="error">{errors.img}</p>
                )}
                
                <select className="caja" onChange={(e) => handleSelect(e)}>
                        {types.map((pok)=>(
                            <option value={pok.name}>{pok.name}</option>
                        ))}
                </select>
                <button onSubmit={(e)=>handleSubmit(e)} >Crear</button>
                </form>
                    {input.type.map(el=>
                    <div>
                        <p>{el}</p>
                        <button onClick={()=>handleDelete(el)}>x</button>
                    </div>
                    )}
            
        </div>
    )
}