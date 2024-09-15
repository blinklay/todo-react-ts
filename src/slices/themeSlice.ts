import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
  value: string;
}

const initialState: ThemeState = {
  value: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state) => {
      state.value = state.value === "dark" ? "light" : "dark";
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
