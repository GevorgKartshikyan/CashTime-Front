import { createReducer } from '@reduxjs/toolkit';
import { createJobRequest } from '../actions/createJobRequest';

const initialState = {
  jobs: [],
};

export default createReducer(initialState, (builder) => {
  builder
    .addCase(createJobRequest.fulfilled, (state, action) => {

    });
});
