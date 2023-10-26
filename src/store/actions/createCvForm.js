import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import Api from '../../Api';

export const setCvFormData = createAction('createCvForm/SET_DATA');

export const addCvLink = createAsyncThunk('/cvs/addCvLink', async (payload, thunkAPI) => {
  try {
    const { data } = await Api.addCvLink(payload.cvLink);
    console.log(data);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});
export const createCvRequest = createAsyncThunk('/users/registerRequest', async (payload, thunkAPI) => {
  try {
    console.log(payload.data, 8888);
    const { data } = await Api.createCv(payload.data);
    console.log(data, 333123);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});
