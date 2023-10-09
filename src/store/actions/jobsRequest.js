import { createAsyncThunk } from '@reduxjs/toolkit';
import Api from '../../Api';

export const createJobRequestFromPending = createAsyncThunk('/jobsRequest/createJobRequestFromPending', async (payload, thunkAPI) => {
  try {
    const { data } = await Api.createJob(payload);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});

export const jobListRequestFromAdmin = createAsyncThunk('/jobsRequest/jobListRequestFromAdmin', async (payload, thunkAPI) => {
  try {
    const {
      page,
      limit,
    } = payload;
    const { data } = await Api.listFromAdmin(page, limit);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});
export const activateJobAdmin = createAsyncThunk('/jobsRequest/activateJobAdmin', async (payload, thunkAPI) => {
  try {
    const { data } = await Api.activateJob(payload);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});
export const deleteJobAdmin = createAsyncThunk('/jobsRequest/deleteJobAdmin', async (payload, thunkAPI) => {
  try {
    const { data } = await Api.deleteJob(payload);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});

export const jobListFromUsersMap = createAsyncThunk('/jobsRequest/jobListFromUsersMap', async (payload, thunkAPI) => {
  try {
    const { city } = payload;
    const { data } = await Api.jobListFromUsersMap(city);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});
export const jobListFromUsersFilter = createAsyncThunk('/jobsRequest/jobListFromUsersFilter', async (payload, thunkAPI) => {
  try {
    const { data } = await Api.jobListFromUsersFilter(payload);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});
export const singleJobInfo = createAsyncThunk('/jobsRequest/singleJobInfo', async (payload, thunkAPI) => {
  try {
    const { data } = await Api.singleJobInfo(payload);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});
export const jobsTitles = createAsyncThunk('/jobsRequest/jobsTitles', async (payload, thunkAPI) => {
  try {
    const { data } = await Api.getJobsTitles();
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});

export const userJobInfo = createAsyncThunk('/jobsRequest/userJobInfo', async (payload, thunkAPI) => {
  try {
    const { id } = payload;
    const { data } = await Api.userJobInfo(id);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});
