import { createSlice } from "@reduxjs/toolkit";
import { songs } from "../data/data.js";

const idx = Math.floor(Math.random() * songs.length);

const initialState = {
  isPlaying: false,
  currentSong: {
    id: songs[idx].id,
    title: songs[idx].title,
    artist: songs[idx].artist,
    img: songs[idx].img,
    songUrl: songs[idx].songUrl,
  },
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setCurrentSong: (state, action) => {
      state.currentSong = action.payload;
      state.isPlaying = true;
    },
    pause: (state) => {
      state.isPlaying = false;
    },
    play: (state) => {
      state.isPlaying = true;
    },
    next: (state, action) => {
      console.log(state, action.payload);
    },
    prev: (state, action) => {
      console.log(state, action.payload);
    },
  },
});

export const { play, pause, next, prev, setCurrentSong } = playerSlice.actions;
export default playerSlice.reducer;
