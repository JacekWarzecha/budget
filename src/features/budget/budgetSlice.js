import { createSlice } from "@reduxjs/toolkit";

const budgetSlice = createSlice({
  name: "budget",
  initialState: {
    incomes: [],
    costs: [],
  },
  reducers: {
    addIncome: ({ incomes }, { payload }) => {
      incomes.push(payload);
    },
    deleteIncome: ({ incomes }, { payload }) => {
      const index = incomes.findIndex(({ id }) => id === payload);
      incomes.splice(index);
    },
    addCost: ({ costs }, { payload }) => {
      costs.push(payload);
    },
    deleteCost: ({ costs }, { payload }) => {
      const index = costs.findIndex(({ id }) => id === payload);
      costs.splice(index);
    },
  },
});

export const { addIncome, deleteIncome, addCost, deleteCost } =
  budgetSlice.actions;

export default budgetSlice.reducer;

export const selectIncomes = (state) => state.incomes;

export const selectCost = (state) => state.costs;
