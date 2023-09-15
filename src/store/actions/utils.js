import { createAsyncThunk } from '@reduxjs/toolkit';
import Api from '../../Api';

export const getCountries = createAsyncThunk('utils/getCountries', async () => {
  const { data } = await Api.getCountries();
  return data;
});
