import { configureStore } from "@reduxjs/toolkit";

import modalReducer from "./modalSlice";
import todoReducer from "./todoSlice";
import themeReducer from "./themeSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    todo: todoReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
