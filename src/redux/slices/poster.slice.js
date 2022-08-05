import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {posterService} from "../../services";
const initialState = {
    post:[],
    errors: null
}

const getPost = createAsyncThunk(

    'postSlice.getPost',
    async (picture, {rejectedWithValue})=>{
        try {
            const {data} = await posterService.getPost(picture);
            return data;
        }catch (e){
            return rejectedWithValue(e.response.data)
        }

    }
)

const postSlice = createSlice({
    name:'posterSlice',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(getPost.fulfilled, (state, action) => {
                state.errors = null
                state.post = action.payload
            })
            .addCase(getPost.rejected, (state, action) =>{
                state.errors = action.payload
            })
    }

});
const {reducer:postReducer} = postSlice;
const postActions = {
  getPost
}
export {postReducer,postActions}