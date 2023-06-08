import { createSlice } from "@reduxjs/toolkit";

const costsSlice = createSlice({
  name: "costs",
  initialState: {
    costs: [],
  },
  reducers: {
    addCost: ({ costs }, { payload }) => {
      costs.push(payload);
    },
    deleteCost: ({ costs }, { payload }) => {
      const index = costs.findIndex(({ id }) => id === payload);
      costs.splice(index);
    },
  },
});

export const { addCost, deleteCost } = costsSlice.actions;

export default costsSlice.reducer;

const selectCostsState = (state) => state.costs;

export const selectCost = (state) => selectCostsState(state).costs;
