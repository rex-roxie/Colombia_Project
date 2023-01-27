import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: 0,
};

export const sliderSlice = createSlice({
    name: 'slider',
    initialState,
    reducers: {
        increment: (state) => {
            state.id += 1;
        },
        decrement: (state) => {
            if (state.id > -1) {
                state.id -= 1;
            }
            
            console.log("At beginning of slideshow")
            
        },
    }
});

export const { increment, decrement } = sliderSlice.actions;

export const getId = (state) => state.slider.id;

export default sliderSlice.reducer;