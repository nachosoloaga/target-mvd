import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import userService from 'services/userService';
import parseError from 'utils/parseError';

export const login = createAsyncThunk('session/login', async user => {
  try {
    const {
      data: { data }
    } = await userService.login({ user });
    return data;
  } catch ({ response: { data } }) {
    throw parseError(data);
  }
});

export const logout = createAsyncThunk('session/logout', async () => {
  try {
    await userService.logout();
  } catch ({ response: { data } }) {
    throw parseError(data);
  }
});

export const signUp = createAsyncThunk('session/signup', async user => {
  try {
    const { data } = await userService.signUp({ user });
    return data;
  } catch ({ response: { data } }) {
    throw parseError(data);
  }
});

export const editProfile = createAsyncThunk(
  'session/editProfile',
  async (payload, { getState }) => {
    const store = getState();
    const userId = store.session.user.id;
    try {
      if (payload.email && payload.currentPassword) {
        const data = Promise.all([
          userService.editProfile(payload, userId),
          userService.changePassword(payload)
        ]);
        return data;
      }
      if (payload.email) {
        const { data } = await userService.editProfile(payload, userId);
        return data.user;
      }
      if (payload.currentPassword) {
        const { data } = await userService.changePassword(payload);
        return data.data;
      }
    } catch ({ response: { data } }) {
      throw parseError(data);
    }
  }
);

export const updateSession = createAction('session/update');

export const { fulfilled: loginFulfilled, rejected: loginRejected } = login;
export const { fulfilled: signUpFulfilled } = signUp;
export const { fulfilled: logoutFulfilled, rejected: logoutRejected } = logout;
export const { fulfilled: editProfileFulfilled, rejected: editProfileRejected } = editProfile;
