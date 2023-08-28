import { createReducer } from '@reduxjs/toolkit';
import {
  getProfile, getSingleUser, listRequest, registerRequest,
} from '../actions/users';

const initialState = {
  user: {},
  singleUser: {},
  profile: {},
  usersData: {},
  registerRequestStatus: '',
};

export default createReducer(initialState, (builder) => {
  builder
    .addCase(registerRequest.pending, (state) => ({ ...state, registerRequestStatus: 'pending' }))
    .addCase(registerRequest.fulfilled, (state, action) => {
      const { user } = action.payload;
      return { ...state, user, registerRequestStatus: 'fulfilled' };
    })
    .addCase(listRequest.fulfilled, (state, action) => {
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
