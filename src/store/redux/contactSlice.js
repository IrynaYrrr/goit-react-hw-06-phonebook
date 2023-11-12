import { createSlice } from "@reduxjs/toolkit";
import { contactInitialState } from './contactInitialState';
import { createObjectContact } from './helpers';

const contactSlice = createSlice({
  name: "contacts",
  contactInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare: createObjectContact,
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    }
  },
});

export const contactReducer = contactSlice.reducer;
export const { addContact, deleteContact } = contactSlice.actions;
