const localStoragekey = "dataBase";

export const saveDataBaseInLocalStorage = (dataBase) =>
  localStorage.setItem(localStoragekey, JSON.stringify(dataBase));

export const getDataBaseFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(localStoragekey)) || [];

// localStorage.clear();
