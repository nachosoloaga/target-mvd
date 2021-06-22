import { createSlice } from '@reduxjs/toolkit';
import {
  editProfileFulfilled,
  loginFulfilled,
  logoutFulfilled,
  logoutRejected,
  signUpFulfilled,
  updateSession
} from 'state/actions/userActions';

const initialState = {
  authenticated: false,
  user: {},
  info: {},
  error: {}
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
    [logoutRejected]: () => initialState,
    [logoutFulfilled]: () => initialState,
    [updateSession]: (state, { payload }) => {
      state.info = payload;
      state.authenticated = true;
    },
    [editProfileFulfilled]: (state, { payload }) => {
      // This condition checks for the different structures in which data can be
      // returned by editProfile action.
      if (Array.isArray(payload)) {
        state.user = payload[0].data.user;
      } else {
        state.user = payload;
      }
    }
  }
});

export default sessionSlice.reducer;
