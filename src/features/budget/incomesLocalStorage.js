const localStoragekey = "incomes";

export const saveIncomesInLocalStorage = (incomes) =>
  localStorage.setItem(localStoragekey, JSON.stringify(incomes));

export const getIncomesFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(localStoragekey)) || [];
