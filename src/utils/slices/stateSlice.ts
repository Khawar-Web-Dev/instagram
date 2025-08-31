import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter:0,
}

const stateSlice = createSlice({
    name: 'states',
    initialState,
    reducers: {
        incrementCounter: (state) => {
            state.counter++;
        }
    }
})

export const {incrementCounter} = stateSlice.actions;
export default stateSlice.reducer;