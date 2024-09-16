import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
  value: string;
}

const initialState: ThemeState = {
  value: localStorage.getItem("theme")
    ? JSON.parse(localStorage.getItem("theme") as string)
    : "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state) => {
      state.value = state.value === "dark" ? "light" : "dark";
      localStorage.setItem("theme", JSON.stringify(state.value));
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
