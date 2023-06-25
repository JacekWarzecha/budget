import { configureStore } from "@reduxjs/toolkit";
import incomesReducer from "./features/budget/incomesSlice";
import costsReducer from "./features/budget/costsSlice";
import resultReducer from "./features/budget/resultSlice";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    incomes: incomesReducer,
    incomesSum: incomesReducer,
    costs: costsReducer,
    costsSum: costsReducer,
    result: resultReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
