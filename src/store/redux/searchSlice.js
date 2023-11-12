import { createSlice } from "@reduxjs/toolkit";
import { searchInitialState } from './searchInitialState'


const searchSlice = createSlice({
  name: "search",
  searchInitialState,
  reducers: {
    setStatusSearch(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setStatusSearch } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
