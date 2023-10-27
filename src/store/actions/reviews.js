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
export const getProgressReviews = createAsyncThunk('reviews/getProgressReviews', async (payload, thunkAPI) => {
  try {
    const { data } = await Api.getProgressReviewsList();
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});

export const confirmReview = createAsyncThunk('reviews/confirmReview', async (payload, thunkAPI) => {
  try {
    const { data } = await Api.confirmReview(payload);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});
export const deleteReview = createAsyncThunk('reviews/deleteReview', async (payload, thunkAPI) => {
  try {
    const { data } = await Api.deleteReview(payload);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});

export const reviewList = createAsyncThunk('reviews/reviewList', async (payload, thunkAPI) => {
  try {
    const { data } = await Api.reviewsList(payload);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});
