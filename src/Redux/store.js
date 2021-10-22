import { configureStore } from "@reduxjs/toolkit";
import DefaultRedux from "./defaultRedux";

export const store = configureStore({
  reducer: {
    default: DefaultRedux,
  },
});
