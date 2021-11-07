import { configureStore } from "@reduxjs/toolkit";
import dishesReducer from "./dishes";

export const store = configureStore({
  reducer: {
    dishes: dishesReducer,
  },
});
