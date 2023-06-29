import { configureStore } from "@reduxjs/toolkit";
import incomesReducer from "./features/budget/incomesSlice";
import costsReducer from "./features/budget/costsSlice";
import resultReducer from "./features/budget/resultSlice";
import dataBaseReducer from "./features/budget/dataBaseSlice";
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
    dataBase: dataBaseReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
