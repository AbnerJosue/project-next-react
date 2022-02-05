import * as types from "../types/pokemons";

export const fetchingPokemons = () =>({
    type: types.GET_POKEMON_STARTED,
})

export const fetchPokemons = (pokemons) => ({
    type: types.GET_POKEMON_COMPLETED,
    payload:{pokemons}
});

export const errorPokemons = (error) => ({
    type: types.GET_POKEMON_FAILED,
    payload:{error}
})