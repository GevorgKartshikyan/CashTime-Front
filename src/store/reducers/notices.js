import { createReducer } from '@reduxjs/toolkit';
import {
  confirmNotice, deleteNotice, noticeList, noticeListSingleJobs, sendNotice,
} from '../actions/notice';
import { sockedNewNotice } from '../actions/socket';

const initialState = {
  notices: [],
  currentPage: 0,
  totalPages: 0,
  count: 0,
  noticesSingleJob: [],
  currentPageSingleJob: 0,
  totalPagesSingleJob: 0,
};

export default createReducer(initialState, (builder) => {
  builder.addCase(noticeList.fulfilled, (state, action) => {
    const {
      notices, currentPage, totalPages, count,
    } = action.payload;
    state.notices = notices;
    state.currentPage = currentPage;
    state.totalPages = totalPages;
    state.count = count;
  })
    .addCase(sockedNewNotice, (state, action) => {
      state.notices.unshift(action.payload);
      state.count += 1;
    }).addCase(sendNotice.fulfilled, (state, action) => {
      const { notice } = action.payload;
      state.notices = state.notices.filter((e) => e.id !== notice.noticeJobTo);
    }).addCase(confirmNotice.fulfilled, (state, action) => {
      const { notice } = action.payload;
      state.count -= 1;
      state.notices = state.notices.filter((e) => e.id !== notice.id);
      state.noticesSingleJob = state.noticesSingleJob.filter((e) => e.id !== notice.id);
    })
    .addCase(deleteNotice.fulfilled, (state, action) => {
      const { notice } = action.payload;
      state.count -= 1;
      state.notices = state.notices.filter((e) => e.id !== notice.id);
      state.noticesSingleJob = state.noticesSingleJob.filter((e) => e.id !== notice.id);
    })
    .addCase(noticeListSingleJobs.fulfilled, (state, action) => {
      const {
        notices, currentPage, totalPages,
      } = action.payload;
      state.noticesSingleJob = notices;
      state.currentPageSingleJob = currentPage;
      state.totalPagesSingleJob = totalPages;
    });
});
