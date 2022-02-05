import {fork,all} from "redux-saga/effects";
import {watchGetPokemons} from "./pokemons";

function* mainSaga(){
    yield all([
        fork(watchGetPokemons),
    ])
}

export default mainSaga;