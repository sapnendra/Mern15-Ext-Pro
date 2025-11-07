import { createSlice } from "@reduxjs/toolkit";
import { songs } from "../data/data.js";

const idx = Math.floor(Math.random() * songs.length);

const initialState = {
  isPlaying: false,
  songs: songs,
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
    next: (state) => {
      const idx = state.songs.findIndex((s) => s.id === state.currentSong.id);
      const nextSong = state.songs[(idx + 1) % state.songs.length];

      state.currentSong = {
        id: nextSong.id,
        title: nextSong.title,
        artist: nextSong.artist,
        img: nextSong.img,
        songUrl: nextSong.songUrl,
      };
    },
    prev: (state) => {
      const idx = state.songs.findIndex((s) => s.id === state.currentSong.id);
      const prevSong =
        state.songs[(idx - 1 + state.songs.length) % state.songs.length];
      state.currentSong = {
        id: prevSong.id,
        title: prevSong.title,
        artist: prevSong.artist,
        img: prevSong.img,
        songUrl: prevSong.songUrl,
      };
    },
  },
});

export const { play, pause, next, prev, setCurrentSong } = playerSlice.actions;
export default playerSlice.reducer;
