import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isWhiteTheme: false,
  },
  reducers: {
    switchTheme: (state) => {
      state.isWhiteTheme = !state.isWhiteTheme;
    },
  },
});

export const { switchTheme } = themeSlice.actions;

export default themeSlice.reducer;

const selectThemeState = (state) => state.theme;

export const selectIsWhiteTheme = (state) =>
  selectThemeState(state).isWhiteTheme;
