import { configureStore } from "@reduxjs/toolkit";
import courtReducer from "../app/features/courtUpdates/courtSlice";
import authReducer from "../app/features/auth/authSlice";
import slidesSlice from "../app/features/slidesSlice";
import  dropdownSlice from "../app/features/dropdownSlice";
export const store = configureStore({
  reducer: {
    court: courtReducer,
    auth: authReducer,
    slides: slidesSlice,
    dropdown:  dropdownSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
