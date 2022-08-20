import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "",
  message: [],
};

export const filterSlice = createSlice({
  name: "stor",
  initialState,
  reducers: {
    filterContacts(state, action) {
      state.filter = action.payload;
    },
    addMessage(state, action) {
      state.message = [...state.message, action.payload];
      console.log(action.payload);
    },
  },
});

export const { filterContacts, addMessage } = filterSlice.actions;
