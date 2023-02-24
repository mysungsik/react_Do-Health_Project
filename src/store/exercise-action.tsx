import { Dispatch } from "@reduxjs/toolkit";
import { exerciseActions } from "./exercise-slice";
import { useDispatch } from "react-redux"; // useDispath 의 사전 생성
import type { AppDispatch } from "../store/index"; //  action 생성자용 Dispatch 타입

// Thunk 생성
export const sendRequest = () => {
  return async (dispatch: Dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://do-health-project-default-rtdb.firebaseio.com/exercise.json"
      );
      const responseData = await response.json();

      const refineData = []; // 파이어 베이스에서 데이터 것 refine

      for (const key in responseData) {
        refineData.push({
          id: responseData[key].id,
          img: responseData[key].img,
          name: responseData[key].name,
          part: responseData[key].part,
          des: responseData[key].des,
          warn: responseData[key].warn,
        });
      }

      return refineData;
    };

    const allExercise = await fetchData();

    dispatch(exerciseActions.updateAllExercise(allExercise)); // inputData를 집어넣는 action 을 한다.
  };
};

//  Thunk action 생성자를 만들때, 타입을 지정하기
//  https://redux.js.org/tutorials/typescript-quick-start#define-typed-hooks

export const useAppDispatch: () => AppDispatch = useDispatch;
