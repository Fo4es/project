import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import {genreService, movieService} from "../../services";

const initialState = {

    movies: [],
    errors:null,
    prev:null,
    next:null
};

const getAll = createAsyncThunk(
    'movieSlice/getAll',
         async ({page}, {rejectedWithValue})=>{
         try {
            const {data} = await movieService.getAll(page);
            return data;
        }catch (e){
            return rejectedWithValue(e.response.data)
        }
    }
)

const getGenre = createAsyncThunk(
    'movieSlice/genre',
    async ({id})=>{
        const {data} = await genreService.getGenre(id);
        return data;
    }
);

const getSortMovie = createAsyncThunk(
    'movieSlice/sort',
    async ({page})=>{
        const {data} = await movieService.getSortMovie(page);
        return data
    }
);

const movieSlice = createSlice({
    name:'movieSlice',
    initialState,
    reducers:{},
    extraReducers:(builder )=>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.errors = null
                state.movies = action.payload
            })
            .addCase(getAll.rejected, (state, action) => {
               state.errors = action.payload
            })
            .addCase(getGenre.fulfilled, (state, action) => {
                state.movies = action.payload
            })
            .addCase(getSortMovie.fulfilled, (state, action) => {
                state.movies = action.payload

            })

});
const {reducer:movieReducer} = movieSlice;

const movieActions = {
   getAll,
    getGenre,
    getSortMovie
}
export {
    movieReducer,movieActions
}