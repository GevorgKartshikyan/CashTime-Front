import { createAsyncThunk } from '@reduxjs/toolkit';
import Api from '../../Api';

export const sendReview = createAsyncThunk('reviews/sendReview', async (payload, thunkAPI) => {
  try {
    const { data } = await Api.sendReview(payload);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});
