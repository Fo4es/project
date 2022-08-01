import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {movieReducer, postReducer} from "./slices";

const rootReducer  = combineReducers({
    movies:movieReducer,
    posts:postReducer
});

const setupStore = ()=>configureStore({
    reducer:rootReducer
})

export {setupStore}
