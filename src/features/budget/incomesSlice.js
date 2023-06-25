import { createSlice } from "@reduxjs/toolkit";
import { getIncomesFromLocalStorage } from "./incomesLocalStorage";

const incomesSlice = createSlice({
  name: "incomes",
  initialState: {
    incomes: getIncomesFromLocalStorage(),
    incomesSum: +0,
  },
  reducers: {
    addIncome: ({ incomes }, { payload: income }) => {
      incomes.push(income);
    },

    deleteIncome: ({ incomes }, { payload: incomeId }) => {
      const index = incomes.findIndex(({ id }) => id === incomeId);
      incomes.splice(index, 1);
    },
    calculateIncomesSum: (state, { payload: incomes }) => {
      state.incomesSum = incomes.reduce((a, b) => (a = a + b.amount), 0);
    },
    fetchExampleIncomes: (state) => {
      state.loading = true;
    },
    fetchExampleIncomesSuccess: (state, { payload: incomes }) => {
      state.incomes = incomes;
      state.loading = false;
    },
    fetchExampleIncomesError: (state) => {
      state.loading = false;
    },
  },
});

export const {
  addIncome,
  deleteIncome,
  calculateIncomesSum,
  fetchExampleIncomes,
  fetchExampleIncomesSuccess,
  fetchExampleIncomesError,
} = incomesSlice.actions;

export default incomesSlice.reducer;

export const selectIncomes = (state) => state.incomes;

export const selectIncomesSum = (state) =>
  selectIncomesSumState(state).incomesSum;

export const selectIncomesSumState = (state) => state.incomesSum;

// const selectIncomesState = (state) => state.incomes;

// export const selectIncomes = (state) => selectIncomesState(state).incomes;
