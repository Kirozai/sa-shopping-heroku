import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
    error2: false,
    confirmedPassword: null,
    orders: [],
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    registerStart: (state) => {
      state.isFetching = true;
    },
    registerSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    registerFailure: (state) => {
      state.isFetching = false;
      state.error2 = true;
    },
    newsletterregisterStart: (state) => {
      state.isFetching = true;
    },
    newsletterregisterSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    newsletterregisterFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    checkCurrentPasswordStart: (state) => {
      state.isFetching = true;
    },
    checkCurrentPasswordSuccess: (state, action) => {
      state.isFetching = false;
      state.confirmedPassword = action.payload;
    },
    checkCurrentPasswordFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    updateCredentialsStart: (state) => {
      state.isFetching = true;
    },
    updateCredentialsSuccess: (state, action) => {
      state.isFetching = false;
      state.confirmedPassword = null;
      state.currentUser.username = action.payload;
    },
    updateCredentialsSuccess2: (state, action) => {
      state.isFetching = false;
      state.confirmedPassword = null;
      state.currentUser.email = action.payload;
    },
    updateCredentialsSuccess3: (state, action) => {
      state.isFetching = false;
      state.confirmedPassword = null;
      state.currentUser.password = action.payload;
    },
    updateCredentialsFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    getUserOrdersStart: (state) => {
      state.isFetching = true;
    },
    getUserOrdersSuccess: (state, action) => {
      state.isFetching = false;
      state.orders = action.payload;
    },
    getUserOrdersFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { getUserOrdersStart, getUserOrdersSuccess, getUserOrdersFailure, updateCredentialsStart, updateCredentialsSuccess, updateCredentialsSuccess2, updateCredentialsSuccess3, updateCredentialsFailure, checkCurrentPasswordStart, checkCurrentPasswordSuccess, checkCurrentPasswordFailure, loginStart, loginSuccess, loginFailure, registerStart, registerSuccess, registerFailure, newsletterregisterStart,  newsletterregisterSuccess, newsletterregisterFailure } = userSlice.actions;

export default userSlice.reducer;
