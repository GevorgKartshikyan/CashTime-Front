import { createAsyncThunk } from '@reduxjs/toolkit';
import Api from '../../Api';

export const getMessagesList = createAsyncThunk('messages/getMessagesList', async (payload, thunkAPI) => {
  try {
    const {
      friendId, limit, page, userId,
    } = payload;
    const { data } = await Api.getMessagesList({
      friendId, limit, page, userId,
    });
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});

export const sendMessages = createAsyncThunk('messages/sendMessages', async (payload, thunkAPI) => {
  try {
    const { data } = await Api.sendMessage(payload);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});
export const openMessage = createAsyncThunk('messages/openMessage', async (payload) => {
  const { data } = await Api.openMessage(payload);
  return data;
});

export const editMessage = createAsyncThunk('messages/editMessage', async (payload, thunkAPI) => {
  try {
    const { data } = await Api.editMessage(payload);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});
