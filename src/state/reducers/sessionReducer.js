import { createSlice } from '@reduxjs/toolkit';
import {
  getMatchesFulfilled,
  loginFulfilled,
  logoutFulfilled,
  signUpFulfilled,
  updateSession
} from 'state/actions/userActions';

const initialState = {
  authenticated: false,
  user: null,
  info: {},
  matches: []
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
    [getMatchesFulfilled]: (state, { payload }) => {
      state.matches = payload.matches;
    },
    [updateSession]: (state, { payload }) => {
      state.info = payload;
      state.authenticated = true;
    }
  }
});

export default sessionSlice.reducer;
