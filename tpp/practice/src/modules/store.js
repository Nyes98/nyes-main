import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./list";
export const store = configureStore({
  reducer: { list: reducer },
});
