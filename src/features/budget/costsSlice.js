import { createSlice } from "@reduxjs/toolkit";
import { getCostsFromLocalStorage } from "./costsLocalStorage";

const costsSlice = createSlice({
  name: "costs",
  initialState: {
    costs: getCostsFromLocalStorage(),
  },
  reducers: {
    addCost: ({ costs }, { payload }) => {
      costs.push(payload);
    },
    deleteCost: ({ costs }, { payload: costId }) => {
      const index = costs.findIndex(({ id }) => id === costId);
      costs.splice(index, 1);
    },
  },
});

export const { addCost, deleteCost } = costsSlice.actions;

export default costsSlice.reducer;

export const selectCosts = (state) => state.costs;

// const selectCostsState = (state) => state.costs;

// export const selectCost = (state) => selectCostsState(state).costs;
