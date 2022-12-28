import { createSlice } from "@reduxjs/toolkit";

export type PartState = {
  descriptionState: {
    onDefaultPart: boolean;
    onChestPart: boolean;
    onBackPart: boolean;
    onShoulderPart: boolean;
    onBicepsPart: boolean;
    onTricepsPart: boolean;
    onAbsPart: boolean;
    onLegsPart: boolean;
    onGlutesPart: boolean;
  };
};

// Partial 를 통해, 혹시 모를 추가적인 State 에 대해, 유동적으로 적용되게 만든다.
const initialState: PartState = {
  descriptionState: {
    onDefaultPart: true,
    onChestPart: false,
    onBackPart: false,
    onShoulderPart: false,
    onBicepsPart: false,
    onTricepsPart: false,
    onAbsPart: false,
    onLegsPart: false,
    onGlutesPart: false,
  },
};

const ChoosPartsSlice = createSlice({
  name: "choose-part",
  initialState,
  reducers: {
    ChestDescription(state) {
      state.descriptionState = { ...initialState.descriptionState };
      state.descriptionState.onDefaultPart = false;
      state.descriptionState.onChestPart = true;
    },
    BackDescription(state) {
      state.descriptionState = { ...initialState.descriptionState };
      state.descriptionState.onDefaultPart = false;
      state.descriptionState.onBackPart = true;
    },
    ShoulderDescription(state) {
      state.descriptionState = { ...initialState.descriptionState };
      state.descriptionState.onDefaultPart = false;
      state.descriptionState.onShoulderPart = true;
    },
    BicepsDescription(state) {
      state.descriptionState = { ...initialState.descriptionState };
      state.descriptionState.onDefaultPart = false;
      state.descriptionState.onBicepsPart = true;
    },
    TricepsDescription(state) {
      state.descriptionState = { ...initialState.descriptionState };
      state.descriptionState.onDefaultPart = false;
      state.descriptionState.onTricepsPart = true;
    },
    AbsDescription(state) {
      state.descriptionState = { ...initialState.descriptionState };
      state.descriptionState.onDefaultPart = false;
      state.descriptionState.onAbsPart = true;
    },
    LegsDescription(state) {
      state.descriptionState = { ...initialState.descriptionState };
      state.descriptionState.onDefaultPart = false;
      state.descriptionState.onLegsPart = true;
    },
    GlutesDescription(state) {
      state.descriptionState = { ...initialState.descriptionState };
      state.descriptionState.onDefaultPart = false;
      state.descriptionState.onGlutesPart = true;
    },
  },
});

export const ChooseActions = ChoosPartsSlice.actions;

export default ChoosPartsSlice.reducer;
