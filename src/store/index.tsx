import { configureStore } from "@reduxjs/toolkit";
import choosePartSlice from "./choose-part-slice";
import calculationSlice from "./calculation";

export const store = configureStore({
  reducer: { choosePart: choosePartSlice, calulate: calculationSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
