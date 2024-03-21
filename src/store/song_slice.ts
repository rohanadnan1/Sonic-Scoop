import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  masterSong: {},
  isPlaying: false,
};

const songSlice = createSlice({
  name: "song",
  initialState,
  reducers: {
    play_song: (state, action) => {
      state.masterSong = action.payload;
      state.isPlaying = true;
    },
    pause_song: (state) => {
      state.isPlaying = false;
    },
  },
});

export const { play_song, pause_song } = songSlice.actions;
export default songSlice.reducer;
