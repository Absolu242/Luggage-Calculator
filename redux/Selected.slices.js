import { createSlice } from "@reduxjs/toolkit";

const SelectedSlices = createSlice({
  name: "Selected",
  initialState: [],
  reducers: {
    addSelected: (state, action) => {
      state.push({ ...action.payload });
    },
    removeSelected: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const SelectedReducer = SelectedSlices.reducer;

export const { addSelected, removeSelected } = SelectedSlices.actions;
