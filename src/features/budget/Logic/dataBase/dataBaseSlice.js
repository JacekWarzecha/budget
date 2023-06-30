import { createSlice } from "@reduxjs/toolkit";
import { getDataBaseFromLocalStorage } from "./dataBaseLocalStorage";

const dataBaseSlice = createSlice({
  name: "dataBase",
  initialState: {
    dataBase: getDataBaseFromLocalStorage(),
  },
  reducers: {
    addDataBase: ({ dataBase }, { payload: data }) => {
      dataBase.push(data);
    },
  },
});

// addIncome: ({ incomes }, { payload: income }) => {
//       incomes.push(income);
//     },
// arr.reduce((acc, curr) => acc + curr, 0);
// calculateIncomesSum: (state, { payload: incomes }) => {
//   state.incomesSum = incomes.reduce((a, b) => (a = a + b.amount), 0);

// calculateResult: (state, { payload: incomesSum, costsSum }) => {
//   state.result = state.result.reduce(
//     (incomesSum, costsSum) => incomesSum - costsSum
//   );
// },

export const { addDataBase } = dataBaseSlice.actions;

export default dataBaseSlice.reducer;

export const selectDataBaseState = (state) => state.dataBase;

export const selectDataBase = (state) => selectDataBaseState(state).dataBase;
