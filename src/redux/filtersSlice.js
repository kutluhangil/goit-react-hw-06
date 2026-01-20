import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

/* 🔹 ACTION */
export const { changeFilter } = filtersSlice.actions;

/* 🔹 SELECTOR */
export const selectNameFilter = (state) => state.filters.name;

/* 🔹 REDUCER */
export default filtersSlice.reducer;
