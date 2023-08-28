import { createReducer } from '@reduxjs/toolkit';
import { createJobRequestFromPending, jobListRequestFromAdmin } from '../actions/jobsRequest';

const initialState = {
  createdJob: {},
  status: '',
  jobListAdmin: [],
  currentPageAdmin: 0,
  totalPagesAdmin: 0,
};

export default createReducer(initialState, (builder) => {
  builder
    .addCase(createJobRequestFromPending.fulfilled, (state, action) => {
      const { job, status } = action.payload;
      state.createdJob = job;
      state.status = status;
    })
    .addCase(createJobRequestFromPending.pending, (state) => {
      state.status = 'pending';
    })
    .addCase(jobListRequestFromAdmin.fulfilled, (state, action) => {
      const { jobs, currentPage, totalPages } = action.payload;
      state.jobListAdmin = jobs;
      state.currentPageAdmin = currentPage;
      state.totalPagesAdmin = totalPages;
    });
});
