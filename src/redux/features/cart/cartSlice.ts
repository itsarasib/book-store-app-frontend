import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Book } from "../../../types/Book";
import Swal from "sweetalert2";

export interface CounterState {
  cartItems: Book[];
}

const initialState: CounterState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Book>) => {
      const isItemExist = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (!isItemExist) {
        state.cartItems.push(action.payload);
        Swal.fire({
          icon: "success",
          title: "Book added to cart",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          icon: "warning",
          title: "This book is already in cart",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    },
    removeFromCart: (state, action: PayloadAction<Book>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
