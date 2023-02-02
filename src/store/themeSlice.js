import { createSlice } from "@reduxjs/toolkit";
const ThemeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: "",
    mode: "dark",
  },
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload;
    },
    toggleColorMode(state) {
      let mode = state.mode === "dark" ? "light" : "dark";
      state.mode = mode;
    },
  },
});

export default ThemeSlice;

export const themeAction = ThemeSlice.actions;
