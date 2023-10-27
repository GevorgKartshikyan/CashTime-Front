import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Wrapper from '../layouts/Wrapper';
import ConfirmReviewCard from './ConfirmReviewCard';
import { getProgressReviews } from '../store/actions/reviews';

function ConfirmReview() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProgressReviews());
  }, []);
  const reviews = useSelector((state) => state.review.reviewsInProgress);
  return (
    <Wrapper>
      <div className="container">
        <h2 className="confirm-review-title">Completed works</h2>
        <div className="confirm-review-row">
          {reviews.map((e) => (
            <ConfirmReviewCard
              key={e.id}
              id={e.id}
              name={e.reviewFrom?.firstName}
              lastName={e.reviewFrom?.lastName}
              jobTitle={e.jobReviews?.title}
              image={e.reviewFrom?.avatar}
            />
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

export default ConfirmReview;
