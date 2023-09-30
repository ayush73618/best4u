import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedUser: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : {},
  isLoggedIn: localStorage.getItem("isActive") ? true : false,
  showLoginModal: false,
  showSignUpModal: false,
};

const loginSlice = createSlice({
  name: "loginandSignUp",
  initialState: initialState,
  reducers: {
    showLogin(state) {
      state.showSignUpModal = false;
      state.showLoginModal = true;
    },

    removeLoginModal(state) {
      state.showLoginModal = false;
    },

    showSignUp(state) {
      state.showLoginModal = false;
      state.showSignUpModal = true;
    },
    removeSignUp(state) {
      state.showSignUpModal = false;
    },

    login(state) {
      state.isLoggedIn = true;
      state.showLoginModal = false;
      state.showSignUpModal = false;
    },
    logout(state) {
      state.isLoggedIn = false;
      localStorage.removeItem("isActive");
      localStorage.removeItem("user");
    },
    loggedUser(state, action) {
      const user = action.payload;
      state.loggedUser = user;
    },
  },
});

export const loginSliceReducer = loginSlice.reducer;
export const loginActions = loginSlice.actions;
