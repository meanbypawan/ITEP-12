import { createSlice } from "@reduxjs/toolkit";

const slice =  createSlice({
    name: "Message-Slice",
    initialState:{
        m1: "hello",
        m2: "Good Morning"
    }
});

export default slice.reducer;