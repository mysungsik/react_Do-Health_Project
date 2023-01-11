import { configureStore } from "@reduxjs/toolkit";
import choosePartSlice from "./choose-part-slice";
import calculationSlice from "./calculation";
import exerciseSlice from "./exercise-slice";
import foodsSlice from "./foods-slice";
import calendarSlice from "./calendar-slice";
import userDataSlice from "./userData-slice";

export const store = configureStore({
  reducer: {
    choosePart: choosePartSlice,
    calulate: calculationSlice,
    exercise: exerciseSlice,
    foods: foodsSlice,
    calendar: calendarSlice,
    user: userDataSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
