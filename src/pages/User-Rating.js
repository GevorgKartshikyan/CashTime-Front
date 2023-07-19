import React from 'react';
import { useNavigate } from 'react-router-dom';
import Wrapper from '../layouts/Wrapper';
import ratingStars from '../assets/images/stars4-5.svg';

function UserRating() {
  const navigate = useNavigate();

  const handleWriteReview = () => {
    navigate('/writereview');
  };

  return (
    <Wrapper>
      <div className="user__rating">
        <div className="container">
          <div className="user__rating__row">
            <h2 className="rating__num">
              4.0
            </h2>
            <img className="rating__stars" src={ratingStars} alt="rating" />
            <p className="based__on">
              Based on 30 Reviews
            </p>
            <div className="rating__line">
              <p className="raring__line__text">
                Bellow Average
              </p>
              <div className="rating__width">
                <div className="bellow__average" />
              </div>
              <button
                type="button"
                onClick={handleWriteReview}
                className="btn write__review__btn__nav"
              >
                Write Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default UserRating;
