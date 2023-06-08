import { createSlice } from "@reduxjs/toolkit";
import { getIncomesFromLocalStorage } from "./incomesLocalStorage";

const budgetSlice = createSlice({
  name: "budget",
  initialState: {
    incomes: getIncomesFromLocalStorage(),
  },
  reducers: {
    addIncome: ({ incomes }, { payload }) => {
      incomes.push(payload);
    },
    deleteIncome: ({ incomes }, { payload: incomesId }) => {
      const index = incomes.indexOf(({ id }) => id === incomesId);
      incomes.splice(index);
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
    // saveIncomesInLocalStorage: (_, { payload }) => {
    //   localStorage.setItem("incomes", JSON.stringify(payload));
    // },
  },
});

export const {
  addIncome,
  deleteIncome,
  fetchExampleIncomes,
  fetchExampleIncomesSuccess,
  fetchExampleIncomesError,
} = budgetSlice.actions;

export default budgetSlice.reducer;

const selectIncomesState = (state) => state.incomes;

export const selectIncomes = (state) => selectIncomesState(state).incomes;
