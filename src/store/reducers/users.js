import { createReducer } from '@reduxjs/toolkit';
import registerRequest from '../actions/users';

const initialState = {
  user: {},
  registerRequestStatus: '',
};

export default createReducer(initialState, (builder) => {
  builder
    .addCase(registerRequest.pending, (state) => ({ ...state, registerRequestStatus: 'pending' }))
    .addCase(registerRequest.fulfilled, (state, action) => {
      const { user } = action.payload;
      return { ...state, user, registerRequestStatus: 'fulfilled' };
    });
});
