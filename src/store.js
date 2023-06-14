import { configureStore } from "@reduxjs/toolkit";
import incomesReducer from "./features/budget/incomesSlice";
import costsReducer from "./features/budget/costsSlice";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    incomes: incomesReducer,
    costs: costsReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
