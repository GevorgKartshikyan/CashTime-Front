import { createReducer } from '@reduxjs/toolkit';
import {
  confirmReview, deleteReview, getProgressReviews, reviewList, sendReview,
} from '../actions/reviews';

const initialState = {
  reviewsInProgress: [],
  reviewsList: [],
  currentPage: 1,
  totalPages: 1,
};

export default createReducer(initialState, (builder) => {
  builder.addCase(sendReview.fulfilled, (state, action) => {
    console.log(action.payload);
  }).addCase(getProgressReviews.fulfilled, (state, action) => {
    const { reviews } = action.payload;
    state.reviewsInProgress = reviews;
  }).addCase(confirmReview.fulfilled, (state, action) => {
    const { review } = action.payload;
    state.reviewsInProgress = state.reviewsInProgress.filter((e) => e.id !== review.id);
  }).addCase(deleteReview.fulfilled, (state, action) => {
    const { deletedReview } = action.payload;
    state.reviewsInProgress = state.reviewsInProgress.filter((e) => e.id !== deletedReview.id);
  })
    .addCase(reviewList.fulfilled, (state, action) => {
      const { reviews, currentPage, totalPages } = action.payload;
      state.currentPage = currentPage;
      state.totalPages = totalPages;
      state.reviewsList = reviews;
    });
});
