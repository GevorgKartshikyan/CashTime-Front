import { createReducer } from '@reduxjs/toolkit';
import {
  activateJobAdmin,
  createJobRequestFromPending, deleteJobAdmin, jobListFromUsersFilter, jobListFromUsersMap,
  jobListRequestFromAdmin, jobsTitles, singleJobInfo,
} from '../actions/jobsRequest';
import { sendNotice } from '../actions/notice';

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
  jobsListStatus: 'pending',
  singleJob: {},
  jobsTitlesArray: [],
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
    }).addCase(createJobRequestFromPending.rejected, (state) => {
      state.status = 'rejected';
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
    })
    .addCase(jobListFromUsersFilter.rejected, (state) => {
      state.jobsListStatus = 'rejected';
    })
    .addCase(singleJobInfo.fulfilled, (state, action) => {
      state.singleJob = action.payload.singleJob;
    })
    .addCase(sendNotice.fulfilled, (state, action) => {
      const { notice } = action.payload;
      state.jobsFromUsersFilter = state.jobsFromUsersFilter
        .filter((e) => e.id !== notice.noticeJobTo);
      state.jobListFromUsers = state.jobListFromUsers
        .filter((e) => e.id !== notice.noticeJobTo);
      state.singleJob = {};
    })
    .addCase(jobsTitles.fulfilled, (state, action) => {
      const { jobsTitlesArray } = action.payload;
      state.jobsTitlesArray = jobsTitlesArray;
    });
});
