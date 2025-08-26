import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name:"Data-Slice",
    initialState:{
        counter: 100
    },
    reducers:{
        incrementCounter: (state,action)=>{
            state.counter = state.counter + 1
        },
        decrementIncrement: (state,action)=>{
            state.counter = state.counter - 1;
        }
    }
});
console.log(slice.actions);
export const {incrementCounter,decrementIncrement} = slice.actions;
export default slice.reducer;

