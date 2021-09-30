import React, {useState, useEffect} from "react";
import {Link,useHistory} from "react-router-dom";
import {postPokemon, getTypes, getPokemons} from "../actions/index";
import { useDispatch, useSelector } from "react-redux";

export default function Creations(){
    const dispatch = useDispatch()
    const hystory = useHistory()
    const types = useSelector((state) => state.types)

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

    useEffect(() => {
        dispatch(getTypes())
    },[])


    return(
        <div>
            <Link to="/home"><button>Volver</button></Link>
            <h1>Crea tu Pokemon!</h1>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <div>
                    <label>Name:</label>
                    <input
                    type= "text"
                    value= {input.name}
                    name= "name"
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Hp:</label>
                    <input
                    type= "text"
                    value= {input.hp}
                    name= "hp"
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label>attack:</label>
                    <input
                    type= "text"
                    value= {input.attack}
                    name= "attack"
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label>defense:</label>
                    <input
                    type= "text"
                    value= {input.defense}
                    name= "defense"
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label>speed:</label>
                    <input
                    type= "text"
                    value= {input.speed}
                    name= "speed"
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label>height:</label>
                    <input
                    type= "text"
                    value= {input.height}
                    name= "height"
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label>weight:</label>
                    <input
                    type= "text"
                    value= {input.weight}
                    name= "weight"
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label>img:</label>
                    <input
                    type= "text"
                    value= {input.img}
                    name= "img"
                    onChange={handleChange}
                    />
                </div>
                
                <select onChange={(e) => handleSelect(e)}>
                        {types.map((pok)=>(
                            <option value={pok.name}>{pok.name}</option>
                        ))}
                </select>
                <ul><li>{input.type.map(el=>el+ ",")}</li></ul>
                <button type="submit">Crear Pokemon</button>
                
            </form>
        </div>
    )
}