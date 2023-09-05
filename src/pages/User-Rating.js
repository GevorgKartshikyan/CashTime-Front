import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Wrapper from '../layouts/Wrapper';
import ratingStars from '../assets/images/stars4-5.svg';
import ratingsData from '../data/reviews';

function UserRating() {
  const token = useSelector((state) => state.users.token);
  if (!token) {
    window.location.href = '/login';
    return null;
  }
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
            </div>
            <div className="all__reviews">
              {ratingsData.map((rating) => (
                <div className="user__review" key={rating.reviewId}>
                  <div className="user__review_info">
                    <div className="user__review__info__left">
                      <img className="user__logo__review" src={rating.userLogo} alt="user_logo" />
                      <div className="review__info__left">
                        <h3 className="user__review__name">{rating.name}</h3>
                        <div className="stars__review__left">
                          <img className="stars__review__img" src={rating.starsSrc} alt="stars" />
                          <p className="count__review__num">4</p>
                        </div>
                      </div>
                    </div>
                    <div className="user__review_info__right">
                      <h3 className="user__review_info__right__text">{rating.dateAgo}</h3>
                    </div>
                  </div>
                  <p className="text__user__review">
                    {rating.reviewText}
                  </p>
                </div>
              ))}
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
    </Wrapper>
  );
}

export default UserRating;
