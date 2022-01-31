import { createSlice } from "@reduxjs/toolkit";

const IventorySlice = createSlice({
  name: "Iventory",
  initialState: [],
  reducers: {
    addInventory: (state, action) => {
      state.push({ ...action.payload });
    },
    removeInventory: (state, action) => {
      console.log(action.payload);
      const index = state.findIndex((item) => item.name === action.payload.label);
      state.splice(index, 1);
    },
  },
});

export const IventoryReducer = IventorySlice.reducer;

export const { addInventory, removeInventory } = IventorySlice.actions;
