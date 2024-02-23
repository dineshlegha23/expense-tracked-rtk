import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allTransaction: [],
};

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      state.allTransaction.push({
        ...action.payload,
        time: Date().toLocaleString(),
      });
    },
  },
});

export const { addTransaction } = transactionSlice.actions;

export default transactionSlice.reducer;
