import { createReducer } from '@reduxjs/toolkit';
import {
  listRequest,
  registerRequest,
  loginRequest,
  getProfile,
  getSingleUser,
  activate,
  status,
  singleUserFromAdmin, blockedUsers, editProfile, editUserAbout,
} from '../actions/users';
import { socketOffline, socketOnline } from '../actions/socket';

const initialState = {
  user: {},
  users: [],
  usersForMessages: [],
  singleUser: {},
  profile: {},
  usersData: {},
  registerRequestStatus: '',
  currentPage: 0,
  totalPages: 0,
  token: window.localStorage.getItem('token') ?? '',
  singleFromAdmin: {},
  blocked: [],
};

export default createReducer(initialState, (builder) => {
  builder
    .addCase(editProfile.fulfilled, (state, action) => {
      const {
        user,
        cv,
      } = action.payload;
      // state.profile = user;
      state.profile = { ...user, createdCvs: cv };
    })
    .addCase(editUserAbout.fulfilled, (state, action) => {
      const {
        updatedCv,
      } = action.payload;
      state.profile = {
        ...state.profile,
        createdCvs: { ...state.profile.createdCvs, bio: updatedCv.bio },
      };
      // state.profile = {...state.profile, createdCvs.bio:updatedCv.bio}
      // state.profile.bio = updatedCv.bio;
      console.log(updatedCv);
    })
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
        users, currentPage, totalPages, search, usersForMessages,
      } = action.payload;
      state.users = users;
      state.usersForMessages = usersForMessages;
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
    })
    .addCase(singleUserFromAdmin.fulfilled, (state, action) => {
      const { singleFromAdmin } = action.payload;
      state.singleUserFromAdmin = singleFromAdmin;
    })
    .addCase(blockedUsers.fulfilled, (state, action) => {
      const { blocked } = action.payload;
      state.blocked = blocked;
    })
    .addCase(socketOnline, (state, action) => {
      const { userId } = action.payload;
      state.usersForMessages = state.usersForMessages.map((u) => {
        if (+u.id === +userId) {
          u.isOnline = true;
        }
        return u;
      });
    })
    .addCase(socketOffline, (state, action) => {
      const { userId } = action.payload;
      state.usersForMessages = state.usersForMessages.map((u) => {
        if (+u.id === +userId) {
          u.isOnline = false;
          u.lastVisit = new Date();
        }
        return u;
      });
    });
});
