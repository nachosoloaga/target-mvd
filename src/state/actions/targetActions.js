import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import targetService from 'services/targetService';
import parseError from 'utils/parseError';

export const createTarget = createAsyncThunk('target/create', async target => {
  try {
    const {
      data: { data }
    } = await targetService.createTarget({ target });
    return data;
  } catch ({ response: { data } }) {
    throw parseError(data);
  }
});

export const getTargets = createAsyncThunk('target/list', async () => {
  try {
    const { data } = await targetService.getTargets();
    return data;
  } catch ({ response: { data } }) {
    throw parseError(data);
  }
});

export const getTargetTopics = createAsyncThunk('target/getTopics', async () => {
  try {
    const { data } = await targetService.getTargetTopics();
    return data;
  } catch ({ response: { data } }) {
    throw parseError(data);
  }
});

export const { fulfilled: createTargetFulfilled, rejected: createTargetRejected } = createTarget;
export const {
  fulfilled: getTargetTopicsFulfilled,
  rejected: getTargetTopicsRejected
} = getTargetTopics;
export const { fulfilled: getTargetsFulfilled, rejected: getTargetsRejected } = getTargets;
export const setNewTargetCoords = createAction('target/updateCoords');
