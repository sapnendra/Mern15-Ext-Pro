import { createSlice } from "@reduxjs/toolkit";

// Local assets (imported so Vite can resolve their URLs)
import admirin from "../../assets/music/Admirin' You (Official Video) Karan Aujla  Making Memories  Latest Punjabi Songs 2023.mp3";
import darkside from "../../assets/music/DarksideAMVAnime Mix.mp3";
import heymama from "../../assets/music/David Guetta - Hey Mama (ERS REMIX) Bass Boosted  Rolls Royce [4k].mp3";
import shubh from "../../assets/music/Shubh - Cheques (Official Music Video).mp3";
import tujhbin from "../../assets/music/Tujh Bin - Bharatt-Saurabh  New Hindi Love Song.mp3";

const initialState = {
  songs: [
    {
      id: 1,
      title: "Admirin You",
      artist: "Karan Aujla",
      url: admirin,
    },
    {
      id: 2,
      title: "DarkSide - Badass",
      artist: "Badass",
      url: darkside,
    },
    {
      id: 3,
      title: "Heymama",
      artist: "David Guetta",
      url: heymama,
    },
    {
      id: 4,
      title: "Shubh - Cheques",
      artist: "Shubh",
      url: shubh,
      original: shubh,
    },
    {
      id: 5,
      title: "Tujh Bin",
      artist: "Bharatt-Saurabh",
      url: tujhbin,
    },
  ],
  currentSongId: 1,
  playing: false,
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    play(state) {
      state.playing = true;
    },
    pause(state) {
      state.playing = false;
    },
    setCurrent(state, action) {
      state.currentSongId = action.payload;
    },
    next(state) {
      const idx = state.songs.findIndex((s) => s.id === state.currentSongId);
      state.currentSongId = state.songs[(idx + 1) % state.songs.length].id;
    },
    prev(state) {
      const idx = state.songs.findIndex((s) => s.id === state.currentSongId);
      state.currentSongId =
        state.songs[(idx - 1 + state.songs.length) % state.songs.length].id;
    },
  },
});

export const { play, pause, setCurrent, next, prev } = playerSlice.actions;

export default playerSlice.reducer;

export const selectSongs = (state) => state.player.songs;
export const selectCurrentSong = (state) =>
  state.player.songs.find((s) => s.id === state.player.currentSongId);
export const selectPlaying = (state) => state.player.playing;
