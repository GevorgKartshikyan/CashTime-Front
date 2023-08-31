import { createReducer } from '@reduxjs/toolkit';
import {
  listRequest, registerRequest, loginRequest, getProfile, getSingleUser, activate,
} from '../actions/users';

const initialState = {
  user: {},
  users: [],
  singleUser: {},
  profile: {},
  usersData: {},
  registerRequestStatus: '',
<<<<<<< HEAD
  token: '',
  currentPage: 0,
  totalPages: 0,
=======
  token: window.localStorage.getItem('token') ?? '',
>>>>>>> 0af7806dd1e197ef133abdcb0d5e5af4bc2c6349
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
      const {
        users, currentPage, totalPages, search,
      } = action.payload;
      state.users = users;
      state.currentPage = currentPage;
      state.totalPages = totalPages;
      state.search = search;
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
