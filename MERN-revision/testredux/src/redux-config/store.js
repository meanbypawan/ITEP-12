import { configureStore } from "@reduxjs/toolkit";
import MessageSlice from "./MessageSlice";
const store = configureStore({
    reducer:{
        Messages: MessageSlice
    }
});
// Messages : {m1: "GM",m2:"GN"}
export default store;