import React from 'react';
import Wrapper from '../layouts/Wrapper';
import ConfirmReviewCard from './ConfirmReviewCard';

function ConfirmReview() {
  return (
    <Wrapper>
      <div className="container">
        <h2 className="confirm-review-title">Completed works</h2>
        <div className="confirm-review-row">
          <ConfirmReviewCard name="Poxos" lastName="pedros" jobTitle="drive" image="url" />
        </div>
      </div>
    </Wrapper>
  );
}

export default ConfirmReview;
