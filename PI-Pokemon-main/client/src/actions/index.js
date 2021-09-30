import axios from "axios";

export function getPokemons(){
    return async function(dispatch){
        var json = await axios("http://localhost:3001/pokemons",{
            
        });
        return dispatch({
            type: "GET_POKEMONS",
            payload: json.data
        })
    }
}

export function getNamePokemons( name){
    return async function (dispatch){
        try{
            var json = await axios.get("http://localhost:3001/pokemons?name=" + name);
            return dispatch({
                type: "GET_NAME_POKEMONS",
                payload: json.data
            })
        } catch(error){
            console.log(error)
        }

    }
}

export function getTypes(){
    return async function (dispatch){
        try{
            var json = await axios("http://localhost:3001/types" );
            return dispatch({
                type: "GET_TYPES",
                payload: json.data
            })
        } catch(error){
            console.log(error)
        }

    }
}

export function postPokemon(payload){
    return async function (dispatch){
            var json = await axios.post("http://localhost:3001/pokemons", payload );
            return json
            

    }
}

export function filterPokemonsByType(payload){
    return{
        type:"FILTER_BY_TYPE",
        payload
    }
}

export function filterCreated(payload){
    return{
        type:"FILTER_CREATED",
        payload
    }
}

export function orderByName(payload){
    return{
        type:"ORDER_BY_NAME",
        payload
    }
}

export function orderByForce(payload){
    return{
        type:"ORDER_BY_FORCE",
        payload
    }
}