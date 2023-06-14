import { all } from "redux-saga/effects";
import { incomesSaga } from "./features/budget/incomesSaga";

export default function* rootSaga() {
  yield all([incomesSaga()]);
}
