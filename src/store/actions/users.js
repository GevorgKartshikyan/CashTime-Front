import { createAsyncThunk } from '@reduxjs/toolkit';
import Api from '../../Api';

export const registerRequest = createAsyncThunk('/users/registerRequest', async (payload, thunkAPI) => {
  try {
    console.log(payload);
    const { data } = await Api.register(payload);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});
export const listRequest = createAsyncThunk('/users/listRequest', async (payload, thunkAPI) => {
  try {
    console.log(payload);
    const {
      page,
      limit,
    } = payload;
    const { data } = await Api.list(page, limit);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});
export const getSingleUser = createAsyncThunk('users/getSingleUser', async (payload) => {
  const { data } = await Api.getUser(payload);
  return data;
});
export const getProfile = createAsyncThunk('users/getProfile', async (payload) => {
  const { data } = await Api.getProfile(payload);
  return data;
});