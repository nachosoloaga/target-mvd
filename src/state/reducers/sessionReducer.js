import { createSlice } from '@reduxjs/toolkit';
import {
  editProfileFulfilled,
  loginFulfilled,
  logoutFulfilled,
  signUpFulfilled,
  updateSession
} from 'state/actions/userActions';

const initialState = {
  authenticated: false,
  user: null,
  info: {},
  matches: [],
  targets: [],
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
    [logoutFulfilled]: () => initialState,
    [updateSession]: (state, { payload }) => {
      state.info = payload;
      state.authenticated = true;
    },
    [editProfileFulfilled]: (state, { payload }) => {
      // This reducer takes care of both email change and password change cases.
      // That is why it expects the data in three different formats: array when both fields
      // were updated. payload.data when only password was changed, and payload.user when email was changed.
      if (Array.isArray(payload)) {
        state.user = payload[0].data.user;
      } else {
        state.user = payload?.data || payload?.user;
      }
    }
  }
});

export default sessionSlice.reducer;
