import { createSlice } from '@reduxjs/toolkit';
import {
  setNewTargetCoords,
  getTargetTopicsFulfilled,
  getTargetsFulfilled,
  getMatchesFulfilled
} from 'state/actions/targetActions';

const initialState = {
  coords: [],
  topics: [],
  targets: [],
  matches: []
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
    },
    [getMatchesFulfilled]: (state, { payload }) => {
      state.matches = payload.matches;
    }
  }
});

export default targetSlice.reducer;
