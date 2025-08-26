import {configureStore} from "@reduxjs/toolkit";
import DataSlice from "./DataSlice"
const store = configureStore({
    reducer:{
      Data: DataSlice
    }
});
// Data : {counter: 100}
export default store;