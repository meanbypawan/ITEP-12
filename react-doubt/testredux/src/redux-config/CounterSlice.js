import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name :"Counter-slice",
    initialState:{
        counter: 100,
        evenCounter: 0
    }
})

export default slice.reducer