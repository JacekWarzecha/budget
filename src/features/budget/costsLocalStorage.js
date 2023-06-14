const localStoragekey = "costs";

export const saveCostsInLocalStorage = (costs) =>
  localStorage.setItem(localStoragekey, JSON.stringify(costs));

export const getCostsFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(localStoragekey)) || [];
