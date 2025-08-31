import stateSlice from './slices/stateSlice';
import { configureStore } from "@reduxjs/toolkit";



const store = configureStore({
    reducer: {
        states: stateSlice
    }
})

export default store;