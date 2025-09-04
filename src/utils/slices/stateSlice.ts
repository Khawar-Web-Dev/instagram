import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter:0,
    isNavbarMinimized: false,
}

const stateSlice = createSlice({
    name: 'states',
    initialState,
    reducers: {
        incrementCounter: (state) => {
            state.counter++;
        },
        setIsNavbarMinimized: (state, action) => {
            state.isNavbarMinimized = action.payload;
        }
    }
})

export const {incrementCounter,setIsNavbarMinimized} = stateSlice.actions;
export default stateSlice.reducer;