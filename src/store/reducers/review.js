import { createReducer } from '@reduxjs/toolkit';
import { sendReview } from '../actions/reviews';

const initialState = {

};

export default createReducer(initialState, (builder) => {
  builder.addCase(sendReview.fulfilled, (state, action) => {
    console.log(action.payload);
  });
});
