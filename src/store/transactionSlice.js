import { createSlice } from "@reduxjs/toolkit";

const localData = JSON.parse(localStorage.getItem("transaction"));

const initialState = {
  allTransaction: localData || [],
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
      localStorage.setItem("transaction", JSON.stringify(state.allTransaction));
    },
  },
});

export const { addTransaction } = transactionSlice.actions;

export default transactionSlice.reducer;
