import { createSlice } from '@reduxjs/toolkit';
import {
  setNewTargetCoords,
  getTargetTopicsFulfilled,
  getTargetsFulfilled
} from 'state/actions/targetActions';

const initialState = {
  coords: [],
  topics: [],
  targets: []
};

const targetSlice = createSlice({
  name: 'target',
  initialState,
  extraReducers: {
    [setNewTargetCoords]: (state, { payload }) => {
      state.coords = payload;
    },
    [getTargetTopicsFulfilled]: (state, { payload }) => {
      state.topics = payload.topics.map(t => t.topic);
    },
    [getTargetsFulfilled]: (state, { payload }) => {
      state.targets = payload.targets.map(t => t.target);
    }
  }
});

export default targetSlice.reducer;
