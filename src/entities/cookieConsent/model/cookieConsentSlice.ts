import { createSlice } from "@reduxjs/toolkit";

type CookieConsentState = {
  accepted: boolean;
  declined: boolean;
  dismissed: boolean;
};

const initialState: CookieConsentState = {
  accepted: false,
  declined: false,
  dismissed: false,
};

const cookieConsentSlice = createSlice({
  name: "cookieConsent",
  initialState,
  reducers: {
    accept(state) {
      state.accepted = true;
      state.declined = false;
      state.dismissed = true;
    },
    decline(state) {
      state.accepted = false;
      state.declined = true;
      state.dismissed = true;
    },
    dismiss(state) {
      state.dismissed = true;
    },
  },
});

export const { accept, decline, dismiss } = cookieConsentSlice.actions;
export default cookieConsentSlice.reducer;
