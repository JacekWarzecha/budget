import { call, takeEvery, select } from "redux-saga/effects";
import { selectIncomes } from "./incomesSlice";
import { saveIncomesInLocalStorage } from "./incomesLocalStorage";

function* saveIncomesInLocalStorageHandler() {
  const { incomes } = yield select(selectIncomes);
  yield call(saveIncomesInLocalStorage, incomes);
}

export function* incomesSaga() {
  yield takeEvery("*", saveIncomesInLocalStorageHandler);
}
