import { createAsyncThunk } from '@reduxjs/toolkit';
import Api from '../../Api';

const registerRequest = createAsyncThunk('/users/registerRequest', async (payload, thunkAPI) => {
  try {
    const { data } = await Api.register(payload);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});

export default registerRequest;
