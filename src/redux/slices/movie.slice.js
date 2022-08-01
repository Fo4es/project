import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import {movieService} from "../../services";

const initialState = {
    movies: [],
    errors:null
};

const getAll = createAsyncThunk(
    'movieSlice/getAll',
         async (_, {rejectedWithValue})=>{
         try {
            const {data} = await movieService.getAll();
            return data;
        }catch (e){
            return rejectedWithValue(e.response.data)
        }

    }
)

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

});
const {reducer:movieReducer} = movieSlice;

const movieActions = {
   getAll
}
export {
    movieReducer,movieActions
}