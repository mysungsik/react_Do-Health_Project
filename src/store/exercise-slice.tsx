// 가공 후데이터 형태
//      id: "e1"
//      img: "/2.parts/do-parts/chest/pexels-andrea-piacquadio-3837781.jpg"
//      name: "벤치 프레스"
//      part: "chest"
//      des : (5) [{…}, {…}, {…}, {…}, {…}]
//              0 : {text: ...}, 1: {text:...}
//      warn: (3) [{…}, {…}, {…}]
//              0 : {text: ...}, 1: {text:...}

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ExerciseType {
  id: string;
  img: string;
  name: string;
  part: string;
  des: { text: string }[];
  warn: { text: string }[];
}

const initialState: { exerciseData: ExerciseType[] } = {
  // exerciseData 안에, Data 들을 전부 넣을 것이다.
  exerciseData: [],
};

const exerciseSlice = createSlice({
  name: "exercise",
  initialState,
  reducers: {
    updateAllExercise(state, action: PayloadAction<ExerciseType[]>) {
      state.exerciseData = action.payload; // payload 에서 오는 값을, exerciseData 로 교체할 것이다.
    },
  },
});

export const exerciseActions = exerciseSlice.actions;

export default exerciseSlice.reducer;
