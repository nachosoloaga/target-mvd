import { createSlice } from '@reduxjs/toolkit';
import {
  loginFulfilled,
  logoutFulfilled,
  signUpFulfilled,
  logoutRejected,
  updateSession
} from 'state/actions/userActions';

const initialState = {
  authenticated: false,
  user: null,
  info: {}
};

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  extraReducers: {
    [loginFulfilled]: (state, { payload }) => {
      state.user = payload;
    },
    [signUpFulfilled]: (state, { payload }) => {
      state.user = payload;
    },
    [logoutFulfilled]: () => initialState,
    [logoutRejected]: () => initialState,
    [updateSession]: (state, { payload }) => {
      state.info = payload;
      state.authenticated = true;
    }
  }
});

export default sessionSlice.reducer;
