import { createSlice } from "@reduxjs/toolkit";

const incomesSumSlice = createSlice({
  name: "incomesSum",
  initialState: {
    incomesSum: +0,
  },
  reducers: {
    calculateIncomesSum: ({ incomesSum }, { payload: incomes }) =>
      (incomesSum = incomes.reduce((a, b) => (a = a + b.amount), 0)),
  },
});

export const { calculateIncomesSum } = incomesSumSlice.actions;

export default incomesSumSlice.reducer;

export const selectIncomesSum = (state) => state.incomesSum;

// const selectIncomesSumState = (state) => state.incomes;

// export const selectIncomesSum = (state) => selectIncomesSumState(state).incomes;
