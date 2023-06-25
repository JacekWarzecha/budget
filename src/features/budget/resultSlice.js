import { createSlice } from "@reduxjs/toolkit";

const resultSlice = createSlice({
  name: "result",
  initialState: {
    result: +0,
  },
  reducers: {
    calculateResult: (state, { payload: incomesSum, costsSum }) => {
      state.result = incomesSum - costsSum;
    },
  },
});
// arr.reduce((acc, curr) => acc + curr, 0);
// calculateIncomesSum: (state, { payload: incomes }) => {
//   state.incomesSum = incomes.reduce((a, b) => (a = a + b.amount), 0);

// calculateResult: (state, { payload: incomesSum, costsSum }) => {
//   state.result = state.result.reduce(
//     (incomesSum, costsSum) => incomesSum - costsSum
//   );
// },

export const { calculateResult } = resultSlice.actions;

export default resultSlice.reducer;

export const selectResult = (state) => state.result;
