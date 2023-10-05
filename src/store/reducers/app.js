import { createReducer } from '@reduxjs/toolkit';
import {
  addSkillForAdmin, allCountsForAdmin, getSkills, getSkillsForAdmin, homePageCoordinates,
} from '../actions/app';

const initialState = {
  status: '',
  skills: [],
  skillsForAdmin: [],
  totalPagesSkills: 0,
  currentPageSkills: 0,
  addedSkill: '',
  allEmployers: 0,
  allEmployees: 0,
  allJobs: 0,
  redirectCoordinates: {},
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
    }).addCase(allCountsForAdmin.fulfilled, (state, action) => {
      const { allEmployers, allEmployees, allJobs } = action.payload;
      state.allEmployers = allEmployers;
      state.allEmployees = allEmployees;
      state.allJobs = allJobs;
    })
    .addCase(homePageCoordinates, (state, action) => {
      state.redirectCoordinates = action.payload;
    });
});
