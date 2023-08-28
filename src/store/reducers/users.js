import { createReducer } from '@reduxjs/toolkit';
import { listRequest, registerRequest, loginRequest } from '../actions/users';

const initialState = {
  user: {},
  users: [],
  registerRequestStatus: '',
  token: '',
  profile: {},
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
    });
  // .addCase(loginRequest.rejected, (state, action) => (state));
});
