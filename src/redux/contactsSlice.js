import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload,
      );
    },
  },
});

/* 🔹 ACTIONS */
export const { addContact, deleteContact } = contactsSlice.actions;

/* 🔹 SELECTORS */
export const selectContacts = (state) => state.contacts.items;

/* 🔹 REDUCER */
export default contactsSlice.reducer;
