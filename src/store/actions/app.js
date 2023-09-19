import { createAsyncThunk } from '@reduxjs/toolkit';
import Api from '../../Api';

export const getSkills = createAsyncThunk('app/getSkills', async (payload, thunkAPI) => {
  try {
    const { data } = await Api.getSkills(payload);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});
export const getSkillsForAdmin = createAsyncThunk('app/getSkillsForAdmin', async (payload, thunkAPI) => {
  try {
    const { data } = await Api.getSkillsForAdmin(payload);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});
export const addSkillForAdmin = createAsyncThunk('app/addSkillForAdmin', async (payload, thunkAPI) => {
  try {
    const { addSkillValue } = payload;
    const { data } = await Api.addSkillForAdmin(addSkillValue);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});
export const deleteSkillForAdmin = createAsyncThunk('app/deleteSkillForAdmin', async (payload, thunkAPI) => {
  try {
    const { skillId } = payload;
    const { data } = await Api.deleteSkillForAdmin(skillId);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});
export const allCountsForAdmin = createAsyncThunk('app/allCountsForAdmin', async (payload, thunkAPI) => {
  try {
    const { data } = await Api.allCountsForAdmin();
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});
