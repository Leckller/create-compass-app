import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ClickerState {
  clicks: number;
}

const initialState: ClickerState = {
  clicks: 0,
};

export const ClickerSlice = createSlice({
  name: "Errors",
  initialState,
  reducers: {
    incClick: (state) => {
      state.clicks++;
    },
    decClick: (state) => {
      state.clicks--;
    },
  },
});
export const { incClick, decClick } = ClickerSlice.actions;

export default ClickerSlice.reducer;
