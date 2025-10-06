import { createSlice } from "@reduxjs/toolkit";

export type AgeGateState = {
  accepted: boolean;
};

const initialState: AgeGateState = {
  accepted: false,
};

const ageGateSlice = createSlice({
  name: "ageGate",
  initialState,
  reducers: {
    acceptAge(state) {
      state.accepted = true;
    },
    resetAge(state) {
      state.accepted = false;
    },
  },
});

export const { acceptAge, resetAge } = ageGateSlice.actions;
export default ageGateSlice.reducer;
