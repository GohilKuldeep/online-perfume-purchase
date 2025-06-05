import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  isLoggedIn: false,
};

const LoginReducer = createSlice({
  name: "Login",
  initialState,
  reducers: {
    setLoginStatus: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});
export const { setLoginStatus } = LoginReducer.actions;
export default LoginReducer.reducer;
