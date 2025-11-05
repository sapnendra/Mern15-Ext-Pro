import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      name: "Laptop",
      price: 100,
      quantity: 2,
    },
    {
      id: 2,
      name: "Phone",
      price: 50,
      quantity: 1,
    },
    {
      id: 3,
      name: "Headphones",
      price: 30,
      quantity: 3,
    },
    {
      id: 4,
      name: "Monitor",
      price: 150,
      quantity: 1,
    },
    {
        id: 5,
        name: "SSD",
        price: 5010,
        quantity: 3,
    }
  ],
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;