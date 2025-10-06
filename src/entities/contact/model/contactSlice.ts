import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ContactForm = {
  email: string;
  message: string;
};

type ContactState = {
  lastSubmitted?: ContactForm;
  isSubmitting: boolean;
};

const initialState: ContactState = {
  isSubmitting: false,
};

const contactSlice = createSlice({
  name: "Countact Us",
  initialState,
  reducers: {
    submitStart(state) {
      state.isSubmitting = true;
    },
    submitSuccess(state, action: PayloadAction<ContactForm>) {
      state.isSubmitting = false;
      state.lastSubmitted = action.payload;
    },
    submitFailure(state) {
      state.isSubmitting = false;
    },
  },
});

export const { submitStart, submitSuccess, submitFailure } =
  contactSlice.actions;
export default contactSlice.reducer;
