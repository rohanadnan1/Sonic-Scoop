import { configureStore } from "@reduxjs/toolkit";
import song_reducer from "./song_slice";
import banner_reducer from "./banner_slice";
import duration_bar_reducer from "./duration_bar_slice";

const store = configureStore({
    reducer: {
        song: song_reducer,
        banner: banner_reducer,
        duration_bar: duration_bar_reducer
    }
    });

export default store;
