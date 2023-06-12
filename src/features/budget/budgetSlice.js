import { createSlice } from "@reduxjs/toolkit";
import { getIncomesFromLocalStorage } from "./incomesLocalStorage";

const incomesSlice = createSlice({
  name: "incomes",
  initialState: {
    incomes: getIncomesFromLocalStorage(),
  },
  reducers: {
    addIncome: ({ incomes }, { payload: income }) => {
      incomes.push(income);
    },

    deleteIncome: ({ incomes }, { payload: incomeId }) => {
      const index = incomes.findIndex(({ id }) => id === incomeId);
      incomes.splice(index, 1);
    },
    fetchExampleIncomes: (state) => {
      state.loading = true;
    },
    fetchExampleIncomesSuccess: (state, { payload: incomes }) => {
      state.tasks = incomes;
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
  fetchExampleIncomes,
  fetchExampleIncomesSuccess,
  fetchExampleIncomesError,
} = incomesSlice.actions;

export default incomesSlice.reducer;

export const selectIncomes = (state) => state.incomes;

// const selectIncomesState = (state) => state.incomes;

// export const selectIncomes = (state) => selectIncomesState(state).incomes;
