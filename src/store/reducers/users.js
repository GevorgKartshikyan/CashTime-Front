import { createReducer } from '@reduxjs/toolkit';
import { listRequest, registerRequest } from '../actions/users';

const initialState = {
  // test
  // qwdqwd
  user: {},
  users: [],

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
      const { users } = action.payload;
      state.users = users;
    });
});
