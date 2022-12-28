import { configureStore } from "@reduxjs/toolkit";
import choosePartSlice from "./choose-part-slice";

export const store = configureStore({
  reducer: { choosePart: choosePartSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
