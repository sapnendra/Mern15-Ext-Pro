import { createSlice } from "@reduxjs/toolkit";
import { songs } from "../data/data.js";

const idx = Math.floor(Math.random() * songs.length);

console.log(songs);

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
  reducers: {},
});

export default playerSlice.reducer;
