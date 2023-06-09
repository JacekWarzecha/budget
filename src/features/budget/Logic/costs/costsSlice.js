import { createSlice } from "@reduxjs/toolkit";
import { getCostsFromLocalStorage } from "./costsLocalStorage";

const costsSlice = createSlice({
  name: "costs",
  initialState: {
    costs: getCostsFromLocalStorage(),
    costsSum: +0,
  },
  reducers: {
    addCost: ({ costs }, { payload }) => {
      costs.push(payload);
    },
    deleteCost: ({ costs }, { payload: costId }) => {
      const index = costs.findIndex(({ id }) => id === costId);
      costs.splice(index, 1);
    },
    deleteCostsAll: ({ costs }) => {
      costs.splice(0);
    },
    calculateCostsSum: (state, { payload: costs }) => {
      state.costsSum = costs.reduce((a, b) => (a = a + b.amount), 0);
    },
  },
});

export const { addCost, deleteCost, calculateCostsSum, deleteCostsAll } =
  costsSlice.actions;

export default costsSlice.reducer;

export const selectCosts = (state) => state.costs;

export const selectCostsSum = (state) => selectCostsSumState(state).costsSum;

export const selectCostsSumState = (state) => state.costsSum;

// const selectCostsState = (state) => state.costs;

// export const selectCost = (state) => selectCostsState(state).costs;
