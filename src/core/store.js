import { configureStore } from "@reduxjs/toolkit";
import incomesReducer from "../features/Logic/incomes/incomesSlice";
import costsReducer from "../features/Logic/costs/costsSlice";
import resultReducer from "../features/Logic/resultSlice";
import dataBaseReducer from "../features/Logic/dataBase/dataBaseSlice";
import yearsListReducer from "../features/Logic/yearsList/yearsListSlice";
import themeReducer from "../common/ThemeSwitch/themeSlice";
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
    yearsList: yearsListReducer,
    theme: themeReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
