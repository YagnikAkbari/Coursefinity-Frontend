import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  role: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.role = action.payload.role;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.role = undefined;
    },
    checkAuth(state, action) {
      state.isCheckAuth = action?.payload?.isCheckAuth ?? false;
    },
  },
});

export const { login, logout, checkAuth } = authSlice.actions;

export const getIsAuthenticated = (state) => state.auth.isAuthenticated;

export default authSlice;
