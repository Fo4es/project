import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genreService} from "../../services";

const initialState = {

    genre:[],
    errors:null,
};

const getAll = createAsyncThunk(
    'genreSlice',
    async (_,{rejectWithValue})=>{
      try {
          const {data} = await genreService.getAll();
          return data
      }catch (e){
         return  rejectWithValue(e.response.data)
      }
    }
);

const genreSlice = createSlice({
    name:'genreSlice',
    initialState,
    reducers:{},
    extraReducers:(builder )=>
    {
        builder
            .addCase(getAll.fulfilled,(state, action) => {
                state.errors = null
                state.genre = action.payload
            })
            .addCase(getAll.rejected, (state, action) => {
                state.errors = action.payload
            })
    }
});

const {reducer:genreReducer} = genreSlice;

const genreActions ={
   getAll
}
export {genreReducer,genreActions}
