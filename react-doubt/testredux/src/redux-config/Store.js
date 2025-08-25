import { configureStore } from "@reduxjs/toolkit";
import MessageSlice from "./MessageSlice";
import CounterSlice from "./CounterSlice"
const store = configureStore({
    reducer:{
        DataMessage: MessageSlice,
        CounterData: CounterSlice
    }
});
/*
  DataMessage : {m1:"",m2:""}
  CounterData ;{counter: , evenCounter}
*/
export default store;