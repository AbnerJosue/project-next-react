import { combineReducers } from "redux";
import * as types from "../types/pokemons";

const pokemonsFetching = (state = false, action)=> {
    switch (action.type) {
        case types.GET_POKEMON_STARTED:{
            return true
        }
        case types.GET_POKEMON_COMPLETED:{
            return false
        }
    
        case types.GET_POKEMON_FAILED:{
            return false
        }
        default:{
            return state
        }
    }
}


const pokemonsFailed = (state = false, action)=> {
    switch (action.type) {
        case types.GET_POKEMON_STARTED:{
            return false
        }
        case types.GET_POKEMON_COMPLETED:{
            return false
        }
    
        case types.GET_POKEMON_FAILED:{
            return true
        }
        default:{
            return state
        }
    }
}

const pokemonsCompleted = (state=null, action) => {
    switch (action.type) {
        case types.GET_POKEMON_COMPLETED:{
            return action.payload.pokemons || state
        }
        default:{
            return state
        }
    }
}



const pokemonsReducer = combineReducers({
    pokemonsFetching,
    pokemonsCompleted,
    pokemonsFailed
})

export default pokemonsReducer;

export const getPokemons = (state) => state.pokemonsFetching;
export const pokemonsObtained = (state) => state.pokemonsCompleted;
export const getFailedPokemons = (state) => state.pokemonsFailed;