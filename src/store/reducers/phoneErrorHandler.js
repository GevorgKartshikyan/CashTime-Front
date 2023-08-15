import { createReducer } from '@reduxjs/toolkit';
import phoneErrorHandler from '../actions/phoneErrorHandler';

const initialState = '';
export default createReducer(initialState, (builder) => {
  builder.addCase(phoneErrorHandler, (state, action) => action.payload);
});
