import { createReducer } from '@reduxjs/toolkit';
import {
  loginRequestAdmin,
} from '../actions/admin';

const initialState = {
  admin: {},
};

export default createReducer(initialState, (builder) => {
  builder
    .addCase(loginRequestAdmin.fulfilled, (state, action) => {
      const { token, admin } = action.payload;
      localStorage.setItem('adminToken', token);
      console.log(action.payload);
      state.adminToken = token;
      state.admin = admin;
    });
});
