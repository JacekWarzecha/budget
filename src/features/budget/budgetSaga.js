import {
  call,
  takeEvery,
  select,
  takeLatest,
  delay,
  put,
} from "redux-saga/effects";
import { selectIncomes } from "./budgetSlice";
import { saveIncomesInLocalStorage } from "./incomesLocalStorage";
import { getExampleIncomes } from "./UserData/getExampleIncomes";
import {
  fetchExampleIncomes,
  fetchExampleIncomesSuccess,
  fetchExampleIncomesError,
} from "./budgetSlice";

function* fetchExampleIncomesHandler() {
  try {
    yield delay(1000);
    const exampleIncomes = yield call(getExampleIncomes);
    yield put(fetchExampleIncomesSuccess(exampleIncomes));
  } catch (error) {
    yield put(fetchExampleIncomesError());
    yield call(alert, "coś poszło nie tak");
  }
}

function* saveIncomesInLocalStorageHandler() {
  const incomes = yield select(selectIncomes);
  yield call(saveIncomesInLocalStorage, incomes);
}

export function* incomesSaga() {
  yield takeLatest(fetchExampleIncomes.type, fetchExampleIncomesHandler);
  yield takeEvery("*", saveIncomesInLocalStorageHandler);
}
