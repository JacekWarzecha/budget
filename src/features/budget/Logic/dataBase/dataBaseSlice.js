import { createSlice } from "@reduxjs/toolkit";
import { getDataBaseFromLocalStorage } from "./dataBaseLocalStorage";

const dataBaseSlice = createSlice({
  name: "dataBase",
  initialState: {
    dataBase: getDataBaseFromLocalStorage(),
    dataBaseIncomes: [],
    incomesYear: +0,
  },
  reducers: {
    addDataBase: ({ dataBase }, { payload: data }) => {
      dataBase.push(data);
    },
    deleteDataBase: ({ dataBase }, { payload: dataBaseId }) => {
      const index = dataBase.findIndex(({ id }) => id === dataBaseId);
      dataBase.splice(index, 1);
    },
    calculateIncomesYear: (state, { payload: dataBase }) => {
      state.incomesYear = dataBase.reduce((a, b) => (a = a + b.incomesSum), 0);
    },
    // addDataBaseIncomes: ({ dataBaseIncomes }, { payload: dataIncome }) => {
    //   dataBaseIncomes.push(dataIncome);
    // },
  },
});

export const {
  addDataBase,
  deleteDataBase,
  calculateIncomesYear,
  addDataBaseIncomes,
} = dataBaseSlice.actions;

export default dataBaseSlice.reducer;

export const selectDataBaseState = (state) => state.dataBase;
export const selectDataBase = (state) => selectDataBaseState(state).dataBase;

export const selectDataBaseIncomesState = (state) => state.dataBaseIncomes;
export const selectDataBaseIncomes = (state) =>
  selectDataBaseIncomesState(state).dataBaseIncomes;

export const selectIncomesYearState = (state) => state.incomesYear;
export const selectIncomesYear = (state) =>
  selectIncomesYearState(state).incomesYear;
