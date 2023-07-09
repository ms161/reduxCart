import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../ReduxStore/Cart'

const store=configureStore({
    reducer:{cart:cartReducer}
})
export default store 