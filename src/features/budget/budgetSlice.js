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
} = incomesSlice.actions;

export default incomesSlice.reducer;

const selectIncomesState = (state) => state.incomes;

export const selectIncomes = (state) => selectIncomesState(state).incomes;
