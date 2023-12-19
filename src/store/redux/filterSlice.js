import { createSlice } from "@reduxjs/toolkit";
import { filterInitialState } from './filterInitialState'


const filterSlice = createSlice({
  name: "filter",
  initialState: filterInitialState,
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});

console.log(filterInitialState);

export const { setStatusFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
