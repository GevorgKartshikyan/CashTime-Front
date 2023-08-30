import { createReducer } from '@reduxjs/toolkit';
import {
  listRequest, registerRequest, loginRequest, getProfile, getSingleUser, activate,
} from '../actions/users';

const initialState = {
  user: {},
  singleUser: {},
  profile: {},
  usersData: {},
  registerRequestStatus: '',
  token: window.localStorage.getItem('token') ?? '',
};

export default createReducer(initialState, (builder) => {
  builder
    .addCase(registerRequest.pending, (state) => ({ ...state, registerRequestStatus: 'pending' }))
    .addCase(registerRequest.fulfilled, (state, action) => {
      const { user } = action.payload;
      return { ...state, user, registerRequestStatus: 'fulfilled' };
    })
    .addCase(registerRequest.rejected, (state) => ({ ...state, registerRequestStatus: 'error' }))
    .addCase(loginRequest.fulfilled, (state, action) => {
      const { token, users } = action.payload;
      localStorage.setItem('token', token);
      console.log(action.payload);
      return {
        ...state,
        token,
        profile: users,
      };
    })
    .addCase(listRequest.fulfilled, (state, action) => {
      const { users } = action.payload;
      state.users = users;
      const { usersData } = action.payload;
      return { ...state, usersData };
    })
    .addCase(activate.fulfilled, (state, action) => {
      const { token } = action.payload;
      localStorage.setItem('token', token);
      return { ...state, token };
    })
    .addCase(getSingleUser.fulfilled, (state, action) => {
      const { user } = action.payload;
      return { ...state, singleUser: user };
    })
    .addCase(getProfile.fulfilled, (state, action) => {
      const { user } = action.payload;
      return { ...state, profile: user };
    });
  // .addCase(loginRequest.rejected, (state, action) => (state));
});
