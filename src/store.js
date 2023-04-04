import { configureStore } from "@reduxjs/toolkit";
import budgetReducer from "./features/budget/budgetSlice";

export default configureStore({
  reducer: {
    incomes: budgetReducer,
    costs: budgetReducer,
  },
});
