import { createAsyncThunk } from '@reduxjs/toolkit';
import parseError from 'utils/parseError';
import httpClient from 'httpClient';

export const createQuestion = createAsyncThunk('contact/createQuestion', async question => {
  try {
    const {
      data: { data }
    } = await httpClient.post('/questions', question);
    return data;
  } catch ({ response: { data } }) {
    throw parseError(data);
  }
});

export const {
  fulfilled: createQuestionFulfilled,
  rejected: createQuestionRejected
} = createQuestion;
