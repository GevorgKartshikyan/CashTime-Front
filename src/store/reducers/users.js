import { createReducer } from '@reduxjs/toolkit';
import {
  listRequest, registerRequest, loginRequest, getProfile, getSingleUser, activate, status,
} from '../actions/users';

const initialState = {
  user: {},
  users: [],
  singleUser: {},
  profile: {},
  usersData: {},
  registerRequestStatus: '',
  currentPage: 0,
  totalPages: 0,
  token: window.localStorage.getItem('token') ?? '',
};

export default createReducer(initialState, (builder) => {
  builder
    .addCase(registerRequest.pending, (state) => ({ ...state, registerRequestStatus: 'pending' }))
    .addCase(registerRequest.fulfilled, (state, action) => {
      const { user, token } = action.payload;
      if (token) {
        localStorage.setItem('token', token);
      }
      return {
        ...state, user, token, registerRequestStatus: 'fulfilled',
      };
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
      const {
        users, currentPage, totalPages, search,
      } = action.payload;
      state.users = users;
      state.currentPage = currentPage;
      state.totalPages = totalPages;
      state.search = search;
    })
    .addCase(status.fulfilled, (state, action) => {
      const {
        id,
      } = action.payload;
      state.ud = id;
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
});
