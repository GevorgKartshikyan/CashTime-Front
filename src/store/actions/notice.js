import { createAsyncThunk } from '@reduxjs/toolkit';
import Api from '../../Api';

export const sendNotice = createAsyncThunk('notice/sendNotice', async (payload, thunkAPI) => {
  try {
    const { data } = await Api.sendNotice(payload);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});
export const deleteNotice = createAsyncThunk('notice/deleteNotice', async (payload, thunkAPI) => {
  try {
    const { data } = await Api.deleteNotice(payload);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});
export const confirmNotice = createAsyncThunk('notice/confirmNotice', async (payload, thunkAPI) => {
  try {
    const { data } = await Api.confirmNotice(payload);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});
export const noticeList = createAsyncThunk('notice/noticeList', async (payload, thunkAPI) => {
  try {
    const { page, limit } = payload;
    const { data } = await Api.noticeList(page, limit);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});

export const noticeListSingleJobs = createAsyncThunk('notice/noticeListSingleJobs', async (payload, thunkAPI) => {
  try {
    const { page, limit, jobId } = payload;
    const { data } = await Api.noticeListSingleJob(page, limit, jobId);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});
