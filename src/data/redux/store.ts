import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import articleReducer from "../features/article/articleSlice";
import subscriptionReducer from "../features/subscription/subscriptionSlice"
export const store = configureStore({
  reducer: {
    auth: authReducer,
    article:articleReducer,
    subscription:subscriptionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
