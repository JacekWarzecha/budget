import { all } from "redux-saga/effects";
import { incomesSaga } from "./features/budget/Logic/incomes/incomesSaga";
import { costsSaga } from "./features/budget/Logic/costs/costsSaga";
import { dataBaseSaga } from "./features/budget/Logic/dataBase/dataBaseSaga";

export default function* rootSaga() {
  yield all([incomesSaga(), costsSaga(), dataBaseSaga()]);
}
