import { createReducer } from '@reduxjs/toolkit';
import {
  listRequest, registerRequest, loginRequest, getProfile, getSingleUser,
} from '../actions/users';

const initialState = {
  user: {},
  users: [],

  singleUser: {},
  profile: {},
  usersData: {},
  registerRequestStatus: '',
  token: '',
};

export default createReducer(initialState, (builder) => {
  builder
    .addCase(registerRequest.pending, (state) => ({ ...state, registerRequestStatus: 'pending' }))
    .addCase(registerRequest.fulfilled, (state, action) => {
      const { user } = action.payload;
      return { ...state, user, registerRequestStatus: 'fulfilled' };
    })
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
    .addCase(getSingleUser.fulfilled, (state, action) => {
      const { user } = action.payload;
      return { ...state, singleUser: user };
    })
    .addCase(getProfile.fulfilled, (state, action) => {
      const { user } = action.payload;
      return { ...state, profile: user };
    });
});
