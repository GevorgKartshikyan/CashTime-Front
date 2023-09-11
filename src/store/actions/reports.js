import { createAsyncThunk } from '@reduxjs/toolkit';
import Api from '../../Api';

export const reportMessage = createAsyncThunk('users/reportMessage', async (payload) => {
  const { data } = await Api.report(payload);
  return data;
});
