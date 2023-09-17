import { createReducer } from '@reduxjs/toolkit';
import { getSkills } from '../actions/app';

const initialState = {
  status: '',
  skills: [],
};

export default createReducer(initialState, (builder) => {
  builder
    .addCase(getSkills.fulfilled, (state, action) => {
      const { status, skills } = action.payload;
      state.status = status;
      state.skills = skills;
    });
});
