import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {genreReducer, movieReducer, postReducer} from "./slices";

const rootReducer  = combineReducers({

    movies:movieReducer,
    posts:postReducer,
    genre:genreReducer
});

const setupStore = ()=>configureStore({
    reducer:rootReducer
})

export {setupStore}
