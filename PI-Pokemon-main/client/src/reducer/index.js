
const initialState = {
    pokemons : [],
    allPokemons: [],
    types: [],
    detail: []
}

function rootReducer(state = initialState, action){
    switch (action.type) {
        case "GET_POKEMONS":
            return{
                ...state,
                pokemons: action.payload,
                allPokemons: action.payload,
            }
        case "GET_NAME_POKEMONS":
            return{
                ...state,
                pokemons: action.payload
            }
        case "GET_TYPES":
            return{
                ...state,
                types: action.payload
            }
        
        case "FILTER_BY_TYPE":
            const allPokemons = state.allPokemons
            const createdFiltered = action.payload === "all" ? allPokemons : allPokemons.filter(el => el.type.includes(action.payload) )
            return{
                ...state,
                pokemons: createdFiltered
            }

        case "FILTER_CREATED":
            const allPokemons2 = state.allPokemons
           const createdFilter = action.payload === "created" ? allPokemons2.filter(el => el.createdInDb) : allPokemons2.filter(el => !el.createdInDb)
           return{
            ...state,
            pokemons: action.payload === "all" ? state.allPokemons: createdFilter
           }
           
        
        case "ORDER_BY_NAME":
            let arrOrder = action.payload === "asc" ?
            state.pokemons.sort(function(a,b){
                if(a.name > b.name){
                    return 1;
                }
                if (b.name > a.name){
                    return -1
                }
                return 0
                }) :
                state.pokemons.sort(function(a,b){
                    if(a.name > b.name){
                        return -1;
                    }
                    if (b.name > a.name){
                        return 1
                    }
                    return 0
                    })
                    return {
                        ...state,
                        pokemons: arrOrder
                       }


            case "ORDER_BY_FORCE":
            let arrForce = action.payload === "menos" ?
            state.pokemons.sort(function(a,b){
                console.log(a.attack-b.attack)
                            return a.attack - b.attack
                            
                            }) :
             state.pokemons.sort(function(a,b){
                               return b.attack - a.attack
                                })
                                return {
                                    ...state,
                                    pokemons: arrForce
                                   }
            case "POST_POKEMON":
                return{
                    ...state,
                }
            case "GET_DETAILS":
                return{
                    ...state,
                    detail: action.payload
                }

            default:
            return state;
            }

    }




export default rootReducer