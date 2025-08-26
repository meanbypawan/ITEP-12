import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "Recipe-Slice",
    initialState:{
        recipeList: []
    },
    reducers:{
        setData: (state,action)=>{ // action :{payload:[]}
            state.recipeList = action.payload;
        }
    }
})
export const {setData} = slice.actions;
export default slice.reducer;