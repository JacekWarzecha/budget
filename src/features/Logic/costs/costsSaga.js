import { call, takeEvery, select } from "redux-saga/effects";
import { selectCosts } from "./costsSlice";
import { saveCostsInLocalStorage } from "./costsLocalStorage";

function* saveCostsInLocalStorageHandler() {
  const { costs } = yield select(selectCosts);
  yield call(saveCostsInLocalStorage, costs);
}

export function* costsSaga() {
  yield takeEvery("*", saveCostsInLocalStorageHandler);
}
