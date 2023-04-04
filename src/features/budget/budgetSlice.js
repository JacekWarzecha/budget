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
    addCost: ({ costs }, { payload }) => {
      costs.push(payload);
    },
  },
});

export const { addIncome, addCost } = budgetSlice.actions;

export default budgetSlice.reducer;

export const selectIncomes = (state) => state.incomes;

export const selectCost = (state) => state.costs;
