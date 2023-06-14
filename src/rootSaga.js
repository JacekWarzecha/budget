import { all } from "redux-saga/effects";
import { incomesSaga } from "./features/budget/incomesSaga";
import { costsSaga } from "./features/budget/costsSaga";

export default function* rootSaga() {
  yield all([incomesSaga(), costsSaga()]);
}
