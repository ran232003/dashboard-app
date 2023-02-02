import { configureStore } from "@reduxjs/toolkit";
import ThemeSlice from "./themeSlice";

const store = configureStore({
  reducer: { theme: ThemeSlice.reducer },
});
export default store;
