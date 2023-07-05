import { createSlice } from "@reduxjs/toolkit";
import { getDataBaseFromLocalStorage } from "./dataBaseLocalStorage";

const dataBaseSlice = createSlice({
  name: "dataBase",
  initialState: {
    dataBase: getDataBaseFromLocalStorage(),
    dataBaseIncomes: [],
  },
  reducers: {
    addDataBase: ({ dataBase }, { payload: data }) => {
      dataBase.push(data);
    },
    deleteDataBase: ({ dataBase }, { payload: dataBaseId }) => {
      const index = dataBase.findIndex(({ id }) => id === dataBaseId);
      dataBase.splice(index, 1);
    },
    addDataBaseIncomes: ({ dataBaseIncomes }, { payload: dataIncome }) => {
      dataBaseIncomes.push(dataIncome);
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

export const { addDataBase, deleteDataBase, addDataBaseIncomes } =
  dataBaseSlice.actions;

export default dataBaseSlice.reducer;

export const selectDataBaseState = (state) => state.dataBase;
export const selectDataBase = (state) => selectDataBaseState(state).dataBase;

export const selectDataBaseIncomesState = (state) => state.dataBaseIncomes;
export const selectDataBaseIncomes = (state) =>
  selectDataBaseIncomesState(state).dataBaseIncomes;
