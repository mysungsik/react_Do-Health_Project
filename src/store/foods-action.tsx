import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { foodsActions } from "./foods-slice"; // useDispath 의 사전 생성
import type { AppDispatch } from "../store/index"; //  action 생성자용 Dispatch 타입

export const sendRequest = () => {
  return async (dispatch: Dispatch) => {
    // 비동기함수 생성

    const fetchData = async () => {
      const fetchFoods = await fetch(
        "https://do-health-project-default-rtdb.firebaseio.com/foods.json"
      );

      const fetchFoodsData = await fetchFoods.json();

      const refineData = []; // 파이어베이스 데이터 refine

      for (const key in fetchFoodsData) {
        refineData.push({
          id: fetchFoodsData[key].id,
          img: fetchFoodsData[key].img,
          name: fetchFoodsData[key].name,
          category: fetchFoodsData[key].category,
          majorNutri: fetchFoodsData[key].majorNutri,
          nutri: fetchFoodsData[key].nutri,
          price: Number(fetchFoodsData[key].price),
        });
      }
      return refineData;
    };

    const allFoods = await fetchData();

    dispatch(foodsActions.updateAllExercise(allFoods));
  };
};

//  Thunk action 생성자를 만들때, 타입을 지정하기
//  https://redux.js.org/tutorials/typescript-quick-start#define-typed-hooks

export const useAppDispatch: () => AppDispatch = useDispatch;
