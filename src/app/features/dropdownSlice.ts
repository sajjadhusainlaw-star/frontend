import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ScrollerState {
  selectedId: number | null;
}

const initialState: ScrollerState = {
  selectedId: 1,
};

const ScrollerSlice = createSlice({
  name: "dropdown",
  initialState,
  reducers: {
    selectItem: (state, action: PayloadAction<number>) => {
      state.selectedId = action.payload;
    },
  },
});

export const { selectItem } = ScrollerSlice.actions;
export default ScrollerSlice.reducer;
