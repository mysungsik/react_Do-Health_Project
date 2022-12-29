import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type AMRType = {
  AMR: number;
  EatingCaloiresForDay: number;
  MoreCaloires: number;
};

const initialState: AMRType = {
  AMR: 0,
  EatingCaloiresForDay: 0,
  MoreCaloires: 0,
};

const calculationSlice = createSlice({
  name: "calculate",
  initialState,
  reducers: {
    updateAMR(state, action: PayloadAction<{ updatingAMR: number }>) {
      state.AMR = action.payload.updatingAMR;
    },
    updateEatingCaloiresForDay(
      state,
      action: PayloadAction<{ updatingCalories: number }>
    ) {
      state.EatingCaloiresForDay = action.payload.updatingCalories;
    },
    updatingMoreCalores(
      state,
      action: PayloadAction<{ updatingMoreCaloires: number }>
    ) {
      state.MoreCaloires = action.payload.updatingMoreCaloires;
    },
  },
});

export const calculateActions = calculationSlice.actions;

export default calculationSlice.reducer;
