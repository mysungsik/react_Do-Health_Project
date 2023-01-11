import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserType {
  userEmail: string;
}

const initialState: { user: UserType } = {
  user: {
    userEmail: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginedUser(state, action: PayloadAction<UserType>) {
      state.user.userEmail = action.payload.userEmail;
    },
  },
});

export const userAction = userSlice.actions;

export default userSlice.reducer;
