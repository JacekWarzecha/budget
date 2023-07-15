import { all } from "redux-saga/effects";
import { incomesSaga } from "./features/Logic/incomes/incomesSaga";
import { costsSaga } from "./features/Logic/costs/costsSaga";
import { dataBaseSaga } from "./features/Logic/dataBase/dataBaseSaga";

export default function* rootSaga() {
  yield all([incomesSaga(), costsSaga(), dataBaseSaga()]);
}
