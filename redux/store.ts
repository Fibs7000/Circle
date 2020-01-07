import {createStore, applyMiddleware, combineReducers, compose} from "redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import auth, { authState } from "./auth";
import placeReducer, { placeState } from "./placeReducer";

const reducers = {
    auth: auth,
    place: placeReducer
}

export type AppState = {
    auth: authState,
    place: placeState
};

export function configureStore(){
    


    return createStore(combineReducers(reducers), applyMiddleware(thunk, logger));
}