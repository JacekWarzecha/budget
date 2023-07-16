import { createSlice } from "@reduxjs/toolkit";

const yearsListSlice = createSlice({
  name: "yearsList",
  initialState: {
    yearsList: [],
  },
  reducers: {
    addYearsList: ({ yearsList }, { payload: year }) => {
      yearsList.push(year);
    },
    deleteDataBase: ({ dataBase }, { payload: dataBaseId }) => {
      const index = dataBase.findIndex(({ id }) => id === dataBaseId);
      dataBase.splice(index, 1);
    },
  },
});

export const { addYearsList } = yearsListSlice.actions;

export default yearsListSlice.reducer;

export const selectYearsListState = (state) => state.yearsList;
export const selectYearsList = (state) => selectYearsListState(state).yearsList;
