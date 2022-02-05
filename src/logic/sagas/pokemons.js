import {put,takeEvery} from "redux-saga/effects";
import * as types from "../types/pokemons";
import * as actions from "../actions/pokemons";
import {fetchingPokemons} from "../services/pokemon.service";

export function* getPokemosSaga(){
    try {
        let response = yield fetchingPokemons();
        let {error,data} = response;
        if(error === null){
            yield put(actions.fetchPokemons(data));
        }else{
            yield put(actions.errorPokemons(error));
        }
    } catch (error) {
        yield put(actions.errorPokemons(error.message))
    }
}

export function* watchGetPokemons(){
    yield takeEvery(types.GET_POKEMON_STARTED,getPokemosSaga);
}