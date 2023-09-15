import { createReducer } from '@reduxjs/toolkit';
import { getCountries } from '../actions/utils';

const initialState = {
  countries: '',
};

export default createReducer(initialState, (builder) => {
  builder
    .addCase(getCountries.fulfilled, (state, action) => {
      state.countries = action.payload;
    });
});
