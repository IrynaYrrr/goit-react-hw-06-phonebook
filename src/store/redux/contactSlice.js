import { createSlice } from "@reduxjs/toolkit";
import { contactInitialState } from './contactInitialState';
import { createObjectContact } from './helpers';

const contactSlice = createSlice({
  name: "contacts",
  initialState: contactInitialState,
  reducers: {
    addContact: {
      reducer(state, {payload}) {
        state.contacts.push(payload);
      },
      prepare: createObjectContact,
    },
    deleteContact(state, {payload}) {
      const index = state.findIndex(contact => contact.id === payload);
      state.splice(index, 1);
    }
  },
});

export const contactReducer = contactSlice.reducer;
export const { addContact, deleteContact } = contactSlice.actions;
