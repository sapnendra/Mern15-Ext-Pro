import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "../features/playerSlice";

export default configureStore({
  reducer: {
    player: playerReducer,
  },
});
