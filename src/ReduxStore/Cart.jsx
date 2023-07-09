import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { show: false, qty: 0, amount: 6 },
  reducers: {
    show(state) {
      state.show = !state.show;
    },
    qty(state, action) {
      state.qty = state.qty + action.payload;
    },
    amount(state, action) {
      state.amount = action.payload  * state.qty;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
