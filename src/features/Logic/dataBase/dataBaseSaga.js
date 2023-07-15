import { call, takeEvery, select } from "redux-saga/effects";
import { selectDataBase } from "./dataBaseSlice";
import { saveDataBaseInLocalStorage } from "./dataBaseLocalStorage";

function* saveDataBaseInLocalStorageHandler() {
  const dataBase = yield select(selectDataBase);
  yield call(saveDataBaseInLocalStorage, dataBase);
}

export function* dataBaseSaga() {
  yield takeEvery("*", saveDataBaseInLocalStorageHandler);
}
