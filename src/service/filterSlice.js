import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "",
};

export const filterSlice = createSlice({
  name: "stor",
  initialState,
  reducers: {
    filterContacts(state, action) {
      state.filter = action.payload;
    },
    // addMessage(state, action) {
    //   state.message = [...state.message, action.payload];
    //   console.log(action.payload);
    // },
  },
});

export const { filterContacts } = filterSlice.actions;
