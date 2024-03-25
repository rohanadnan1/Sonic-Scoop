import { createSlice } from "@reduxjs/toolkit";

const bannerSlice = createSlice({
    name: "banner",
    initialState: {
        showBanner: true
    },
    reducers: {
        toggleBanner: (state) => {
            state.showBanner = !state.showBanner;
        }
    }
})

export const { toggleBanner } = bannerSlice.actions;
export default bannerSlice.reducer;