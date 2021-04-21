import { createSlice } from '@reduxjs/toolkit';
import { setNewTargetCoords } from 'state/actions/targetActions';

const initialState = {
  coords: []
};

const sessionSlice = createSlice({
  name: 'target',
  initialState,
  extraReducers: {
    [setNewTargetCoords]: (state, { payload }) => {
      state.coords = payload;
    }
  }
});

export default sessionSlice.reducer;
