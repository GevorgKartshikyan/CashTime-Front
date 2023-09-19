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
      id,
    } = payload;
    console.log(payload);
    // console.log(id);
    const { data } = await Api.list(page, limit, role, search, id);
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
export const status = createAsyncThunk('/users/status', async (payload, thunkAPI) => {
  try {
    const { data } = await Api.status(payload);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});
export const singleUserFromAdmin = createAsyncThunk('users/singleUserFromAdmin', async (payload) => {
  const { data } = await Api.singleUserFromAdmin(payload);
  return data;
});
export const blockedUsers = createAsyncThunk('users/blockedUsers', async (thunkAPI) => {
  try {
    const { data } = await Api.blockedUsers();
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});
