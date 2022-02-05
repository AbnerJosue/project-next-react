import { combineReducers } from "redux";
import pokemons,* as pokemonsSelectors from "./pokemons";

const reducer = combineReducers({
    pokemons
})

export default reducer; 

export const getPokemons = (state) => pokemonsSelectors.getPokemons(state.pokemons);
export const pokemonsObtained = (state) => pokemonsSelectors.pokemonsObtained(state.pokemons);
export const getFailedPokemons = (state) => pokemonsSelectors.getFailedPokemons(state.pokemons);