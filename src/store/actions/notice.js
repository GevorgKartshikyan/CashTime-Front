import { createAsyncThunk } from '@reduxjs/toolkit';

export const sendNotice = createAsyncThunk('notice/sendNotice', async (payload, thunkAPI) => {
  try {

  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});
export const deleteNotice = createAsyncThunk('notice/deleteNotice', async (payload, thunkAPI) => {
  try {

  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});
export const confirmNotice = createAsyncThunk('notice/confirmNotice', async (payload, thunkAPI) => {
  try {

  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});
export const noticeList = createAsyncThunk('notice/noticeList', async (payload, thunkAPI) => {
  try {

  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});
