const localStoragekey = "yearsList";

export const saveYearsListInLocalStorage = (yearsList) =>
  localStorage.setItem(localStoragekey, JSON.stringify(yearsList));

export const getYearsListFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(localStoragekey)) || [];

// localStorage.clear();
