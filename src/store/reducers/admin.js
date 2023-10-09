import { createReducer } from '@reduxjs/toolkit';
import {
  // eslint-disable-next-line import/named
  getChartForAdmin,
  loginRequestAdmin,
} from '../actions/admin';

const initialState = {
  admin: {},
  charDate: [],
  jobsCharCount: [],
  usersCharCount: [],
};

export default createReducer(initialState, (builder) => {
  builder
    .addCase(loginRequestAdmin.fulfilled, (state, action) => {
      const { token, admin } = action.payload;
      localStorage.setItem('adminToken', token);
      console.log(action.payload);
      state.adminToken = token;
      state.admin = admin;
    }).addCase(getChartForAdmin.fulfilled, (state, action) => {
      const { charDateArray, jobsCountArray, usersCountArray } = action.payload;
      state.charDate = charDateArray;
      state.jobsCharCount = jobsCountArray;
      state.usersCharCount = usersCountArray;
    });
});
