import { configureStore } from "@reduxjs/toolkit";
import song_reducer from "./song_slice";
import banner_reducer from "./banner_slice";

const store = configureStore({
    reducer: {
        song: song_reducer,
        banner: banner_reducer
    }
    });

export default store;
