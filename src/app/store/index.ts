import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import cookieConsentReducer from "@/entities/cookieConsent/model/cookieConsentSlice";
import ageGateReducer from "@/entities/ageGate/model/ageGateSlice";
import contactReducer from "@/entities/contact/model/contactSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      cookieConsent: cookieConsentReducer,
      ageGate: ageGateReducer,
      contactus: contactReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<ReturnType<typeof makeStore>["getState"]>;
export type AppDispatch = ReturnType<typeof makeStore>["dispatch"];

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
