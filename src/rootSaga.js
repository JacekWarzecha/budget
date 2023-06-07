import { all } from "redux-saga/effects";
import { incomesSaga } from "./features/budget/budgetSaga";

export default function* rootSaga() {
  yield all([incomesSaga()]);
}
