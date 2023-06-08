import { configureStore } from "@reduxjs/toolkit";
import budgetReducer from "./features/budget/budgetSlice";
import costsReducer from "./features/budget/costsSlice";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    incomes: budgetReducer,
    costs: costsReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
