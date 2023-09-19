import { createReducer } from '@reduxjs/toolkit';
import { addSkillForAdmin, getSkills, getSkillsForAdmin } from '../actions/app';

const initialState = {
  status: '',
  skills: [],
  skillsForAdmin: [],
  totalPagesSkills: 0,
  currentPageSkills: 0,
  addedSkill: '',
};

export default createReducer(initialState, (builder) => {
  builder
    .addCase(getSkills.fulfilled, (state, action) => {
      const { status, skills } = action.payload;
      state.status = status;
      state.skills = skills;
    }).addCase(getSkillsForAdmin.fulfilled, (state, action) => {
      const {
        status, skillsForAdmin, currentPage, totalPages,
      } = action.payload;
      state.status = status;
      state.skillsForAdmin = skillsForAdmin;
      state.totalPagesSkills = totalPages;
      state.currentPageSkills = currentPage;
    })
    .addCase(addSkillForAdmin.fulfilled, (state, action) => {
      const { addedSkill } = action.payload;
      state.addedSkill = addedSkill;
    });
});
