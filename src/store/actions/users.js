import { createAsyncThunk } from '@reduxjs/toolkit';
import Api from '../../Api';

export const registerRequest = createAsyncThunk('/users/registerRequest', async (payload, thunkAPI) => {
  try {
    const { data } = await Api.register(payload);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});
export const loginRequest = createAsyncThunk('users/loginRequest', async (payload, thunkAPI) => {
  try {
    const {
      email,
      password,
      type,
    } = payload;
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
      order,
    } = payload;
    const { data } = await Api.list(page, limit, role, search, id, order);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});
export const activate = createAsyncThunk('users/activate', async (payload, thunkAPI) => {
  try {
    const { data } = await Api.activate(payload);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});

export const resetPassword = createAsyncThunk('users/resetPassword', async (payload, thunkAPI) => {
  try {
    const { data } = await Api.resetPassword(payload);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});

export const getDeleteProfileGoogle = createAsyncThunk('users/getDeleteProfileGoogle', async (payload, thunkAPI) => {
  try {
    const { data } = await Api.getDeleteProfileGoogle(payload);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});

export const getDeleteProfileGoogleConfirm = createAsyncThunk('users/getDeleteProfileGoogleConfirm', async (payload, thunkAPI) => {
  try {
    const { data } = await Api.getDeleteProfileGoogleConfirm(payload);
    console.log(payload);
    console.log(data);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});

export const resetPasswordConfirm = createAsyncThunk('users/resetPasswordConfirm', async (payload, thunkAPI) => {
  try {
    const { data } = await Api.resetPasswordConfirm(payload);
    console.log(payload);
    console.log(data);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});

export const deleteProfile = createAsyncThunk('users/deleteProfile', async (payload, thunkAPI) => {
  try {
    const { data } = await Api.deleteProfile(payload);
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
export const changeRole = createAsyncThunk('users/changeRole', async (payload) => {
  const { data } = await Api.changeRole(payload);
  return data;
});
export const blockedUsers = createAsyncThunk('users/blockedUsers', async (payload, thunkAPI) => {
  try {
    const {
      page,
      limit,
    } = payload;
    const { data } = await Api.blockedUsers(page, limit);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});

export const editProfile = createAsyncThunk('users/editProfile', async (payload, thunkAPI) => {
  try {
    const { data } = await Api.editProfile(payload);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});

export const editUserAbout = createAsyncThunk('users/editUserAbout', async (payload, thunkAPI) => {
  try {
    const { data } = await Api.editUserAbout(payload);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});
export const getFilterUser = createAsyncThunk('users/changeRole', async (payload) => {
  console.log(payload, 9999999999);
  const { data } = await Api.getFilterUser(payload);
  console.log(data, 'ckul777');
  return data;
});
export const usersListForMap = createAsyncThunk('users/usersListForMap', async (payload) => {
  const { data } = await Api.getUsersListForMap(payload);
  return data;
});
export const getRandomJobs = createAsyncThunk('users/getRandomJobs', async (payload) => {
  const { data } = await Api.getRandomJobs(payload);
  return data;
});
export const getRandomUsers = createAsyncThunk('users/getRandomUsers', async (payload) => {
  const { data } = await Api.getRandomUsers(payload);
  return data;
});
