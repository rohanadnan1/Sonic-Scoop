import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentTime: '0:00',
    duration: '0:00',
    progress: 0,
}

const durationBarSlice = createSlice({
    name: "durationBar",
    initialState,
    reducers: {
        setDuration: (state, action) => {
            state.duration = action.payload;
        },
        setCurrentTime: (state, action) => {
            state.currentTime = action.payload;
        },
        setProgress: (state, action) => {
            state.progress = action.payload;
        },
        reset: (state) =>{
            state.currentTime = '0:00';
            state.duration = '0:00';
            state.progress = 0;
        }
    }
})

export const { setDuration, setCurrentTime, setProgress, reset } = durationBarSlice.actions;
export default durationBarSlice.reducer;