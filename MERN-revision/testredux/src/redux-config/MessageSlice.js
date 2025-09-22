import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "MessageSlice",
    initialState:{
        m1: "GM",
        m2: "GN"
    },
    reducers:{
        setM1: (state,action)=>{
            state.m1 = action.payload;
        },
        setM2: (state,action)=>{
            state.m2 = action.payload;
        }
    }
});

console.log(slice.reducer);
export const {setM1,setM2} = slice.actions;
export default slice.reducer;