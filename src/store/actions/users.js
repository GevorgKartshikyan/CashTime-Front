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
export const loginRequest = createAsyncThunk('users/loginRequest', async (payload, thunkAPI) => {
  try {
    const { email, password, type } = payload;
    const { data } = await Api.login(email, password, type);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});
export const listRequest = createAsyncThunk('/users/listRequest', async (payload, thunkAPI) => {
  try {
    const {
      page,
      limit,
      role,
      search,
    } = payload;
    const { data } = await Api.list(page, limit, role, search);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});
export const activate = createAsyncThunk('users/activate', async (payload) => {
  const { data } = await Api.activate(payload);
  return data;
});
export const getSingleUser = createAsyncThunk('users/getSingleUser', async (payload) => {
  const { data } = await Api.getUser(payload);
  return data;
});
export const getProfile = createAsyncThunk('users/getProfile', async (payload) => {
  const { data } = await Api.getProfile(payload);
  return data;
});
