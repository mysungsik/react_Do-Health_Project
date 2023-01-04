import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PostCalendarType {
  firebaseid:string;
  id:string;
  title: string;
  start: string;
  email: string;
}

const initialState: { calendarData: PostCalendarType[] } = {
  calendarData: [],
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    updateAllcalendar(state, action: PayloadAction<PostCalendarType[]>) {
      state.calendarData = action.payload; // payload 에서 오는 값을, calendarData 로 교체할 것이다.
    },
  },
});

export const calendarActions = calendarSlice.actions;

export default calendarSlice.reducer;
