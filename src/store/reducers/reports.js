import { createReducer } from '@reduxjs/toolkit';
import { reportMessage } from '../actions/reports';

const initialState = {
  status: '',
};

export default createReducer(initialState, (builder) => {
  builder
    .addCase(reportMessage.fulfilled, (state, action) => {
      const { status, message } = action.payload;
      state.status = status;
      console.log(message);
    });
});
