import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addToWishlist: (state, action) => {
        state.quantity += 1;
        state.products.push(action.payload);
        state.total += action.payload.price * action.payload.quantity;
      },
      removeFromWishlist: (state, action) => {
        state.quantity -= 1;
        state.total -= action.payload.y * action.payload.z;
        const productId = state.products.findIndex(product => {
          return product._id === action.payload.x;
        })
        state.products.splice(productId, 1);
      },
      clearWishlist: (state) => {
        state.products = [];
        state.quantity = 0;
        state.total = 0;
      }
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
