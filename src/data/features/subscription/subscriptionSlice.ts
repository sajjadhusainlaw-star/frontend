import { createSlice } from "@reduxjs/toolkit";
// import { createSubscription} from "./subscriptionThunks";
import { SubscriptionState } from "./subscription.types";
import { MESSAGES } from "@/lib/constants/messageConstants";

const initialState: SubscriptionState = {
  loading: false,
  error: null,
  message: null,
 
};

const SubscriptionSlice = createSlice({
  name: "subscription",
  initialState,
  reducers: {
    resetSubscriptionState: (state) => {
      state.error = null;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      
  },
});

export const { resetSubscriptionState } = SubscriptionSlice.actions;
export default SubscriptionSlice.reducer;