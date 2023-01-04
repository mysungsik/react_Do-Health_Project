import { Dispatch } from "@reduxjs/toolkit";
import { calendarActions } from "./calendar-slice";
import { useDispatch } from "react-redux"; // useDispath 의 사전 생성
import type { AppDispatch } from "../store/index"; //  action 생성자용 Dispatch 타입

let eventGuid = 0;

export function createEventId() {
  return String(eventGuid++);
}

export const sendRequest = () => {
  return async (dispatch: Dispatch) => {
    // 타입은 Dispatch 이다.

    const fetchData = async () => {
      // 비동기 함수 만들어서
      const response = await fetch(
        "https://do-health-project-default-rtdb.firebaseio.com/user/calendar.json"
      );
      const responseData = await response.json();

      const refineData = []; // 파이어 베이스에서 데이터 것 refine

      for (const key in responseData) {
        refineData.push({
          firebaseid:key,
          id: createEventId(),
          title: responseData[key].title,
          start: responseData[key].start,
          email: responseData[key].email,
        });
      }

      return refineData;
    };

    const allCalendar = await fetchData();

    dispatch(calendarActions.updateAllcalendar(allCalendar)); // inputData를 집어넣는 action 을 한다.
  };
};

//  Thunk action 생성자를 만들때, 타입을 지정하기
//  https://redux.js.org/tutorials/typescript-quick-start#define-typed-hooks

export const useAppDispatch: () => AppDispatch = useDispatch;
