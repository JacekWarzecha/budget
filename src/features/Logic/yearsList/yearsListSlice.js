import { createSlice } from "@reduxjs/toolkit";
import { getYearsListFromLocalStorage } from "./yearsListLocalStorage";

const yearsListSlice = createSlice({
  name: "yearsList",
  initialState: {
    yearsList: getYearsListFromLocalStorage(),
  },
  reducers: {
    addYearsList: ({ yearsList }, { payload: year }) => {
      yearsList.push(year);
    },
    deleteYearsList: ({ yearsList }, { payload: yearsListId }) => {
      const index = yearsList.findIndex(({ id }) => id === yearsListId);
      yearsList.splice(index, 1);
    },
  },
});

export const { addYearsList, deleteYearsList } = yearsListSlice.actions;

export default yearsListSlice.reducer;

export const selectYearsListState = (state) => state.yearsList;
export const selectYearsList = (state) => selectYearsListState(state).yearsList;
