import { createReducer } from '@reduxjs/toolkit';
import {
  activateJobAdmin,
  createJobRequestFromPending, deleteJobAdmin, jobListFromUsersFilter, jobListFromUsersMap,
  jobListRequestFromAdmin,
} from '../actions/jobsRequest';

const initialState = {
  createdJob: {},
  status: '',
  jobListAdmin: [],
  currentPageAdmin: 0,
  totalPagesAdmin: 0,
  jobListFromUsers: [],
  jobsFromUsersFilter: [],
  currentPageUsers: 0,
  totalPagesUsers: 0,
  jobsListStatus: '',
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
    })
    .addCase(activateJobAdmin.fulfilled, (state, action) => {
      const { job: id } = action.payload;
      state.jobListAdmin = state.jobListAdmin.filter((job) => job.id !== id.id);
    })
    .addCase(deleteJobAdmin.fulfilled, (state, action) => {
      const { job: id } = action.payload;
      state.jobListAdmin = state.jobListAdmin.filter((job) => job.id !== id.id);
    })
    .addCase(jobListFromUsersMap.fulfilled, (state, action) => {
      const { jobs } = action.payload;
      state.jobListFromUsers = jobs;
    })
    .addCase(jobListFromUsersFilter.fulfilled, (state, action) => {
      const { jobs, currentPage, totalPages } = action.payload;
      state.jobsFromUsersFilter = jobs;
      state.currentPageUsers = currentPage;
      state.totalPagesUsers = totalPages;
      state.jobsListStatus = 'ok';
    })
    .addCase(jobListFromUsersFilter.pending, (state) => {
      state.jobsListStatus = 'pending';
    });
});
