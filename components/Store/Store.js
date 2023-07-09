import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import counterReducer from './counter'
import authReducer from './AuthR'


const store = configureStore({
    // reducer:{counter:counterSlice.reducer }
    reducer:{counter:counterReducer,auth:authReducer}    
});



export default store;
