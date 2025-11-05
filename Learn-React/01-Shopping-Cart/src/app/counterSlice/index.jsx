import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increaseby1: (state) => state + 1,
    increaseby10: (state) => state + 10,
    decreaseby1: (state) => state - 1,
    decreaseby10: (state) => state - 10,
    increasebyValue: (state, action) => (state += action.payload),
  },
});

export const { increaseby1, increaseby10, decreaseby1, decreaseby10, increasebyValue } =
  counterSlice.actions;

export default counterSlice.reducer;
