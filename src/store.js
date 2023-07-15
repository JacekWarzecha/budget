import { configureStore } from "@reduxjs/toolkit";
import incomesReducer from "./features/budget/Logic/incomes/incomesSlice";
import costsReducer from "./features/budget/Logic/costs/costsSlice";
import resultReducer from "./features/budget/Logic/resultSlice";
import dataBaseReducer from "./features/budget/Logic/dataBase/dataBaseSlice";
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
    incomesYear: dataBaseReducer,
    costsYear: dataBaseReducer,
    resultYear: dataBaseReducer,
    dataBaseIncomes: dataBaseReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
