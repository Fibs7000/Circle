import {createStore, applyMiddleware, combineReducers, compose} from "redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import auth, { authState } from "./auth";

const reducers = {
    auth: auth
}

export type AppState = {
    auth: authState
};

export function configureStore(){
    


    return createStore(combineReducers(reducers), applyMiddleware(thunk, logger));
}