// id : f1, f2 ...
// name : xxxxxx, 닭가슴살
// category : 다이어트, 벌크업, 린매스업
// majorNutri : 단백질, 지방, 탄수화물
// nutri : 지방 15g ...
// price : 1000 ...

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FoodsType {
  id: string;
  img:string;
  name: string;
  category: string;
  majorNutri: string;
  nutri: string;
  price: number;
}

const initialState: { foodsData: FoodsType[] } = {
  foodsData: [],
};

const foodsSlice = createSlice({
  name: "foods",
  initialState,
  reducers: {
    updateAllExercise(state, action: PayloadAction<FoodsType[]>) {
      state.foodsData = action.payload; // payload 에서 오는 값을, exerciseData 로 교체할 것이다.
    },
  },
});

export const foodsActions = foodsSlice.actions;

export default foodsSlice.reducer;
