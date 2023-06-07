import { configureStore } from "@reduxjs/toolkit";
import budgetReducer from "./features/budget/budgetSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    incomes: budgetReducer,
    costs: budgetReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
