import { createAsyncThunk } from '@reduxjs/toolkit';
import Api from '../../Api';

export const loginRequestAdmin = createAsyncThunk('admin/loginRequestAdmin', async (payload, thunkAPI) => {
  try {
    const { data } = await Api.AdminLogin(payload);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});

export const getChartForAdmin = createAsyncThunk('admin/getChartForAdmin', async (payload, thunkAPI) => {
  try {
    const { data } = await Api.getChartForAdmin();
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});
