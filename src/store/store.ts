import { configureStore } from "@reduxjs/toolkit";
import song_reducer from "./song_slice";

const store = configureStore({
    reducer: {
        song: song_reducer,
    }
    });

export default store;
