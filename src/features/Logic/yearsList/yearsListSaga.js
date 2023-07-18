import { call, takeEvery, select } from "redux-saga/effects";
import { selectYearsListState } from "./yearsListSlice";
import { saveYearsListInLocalStorage } from "./yearsListLocalStorage";

function* saveYearsListInLocalStorageHandler() {
  const { yearsList } = yield select(selectYearsListState);
  yield call(saveYearsListInLocalStorage, yearsList);
}

export function* yearsListSaga() {
  yield takeEvery("*", saveYearsListInLocalStorageHandler);
}
