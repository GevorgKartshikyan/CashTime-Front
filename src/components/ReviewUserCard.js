import React from 'react';
import PropTypes from 'prop-types';
import ReviewStars from './ReviewStars';


function ReviewUserCard(props) {
  const {
    imgSrc, userName, ratingSum, timeText, aboutUser,
  } = props;
  return (
    <div className="review-info__user">
      <div className="review-info__user__info">
        <div className="review-info__user__info__box">
          <div className="review-info__user__info__box__imgDiv">
            <img src={imgSrc} alt="img" className="review-info__user__info__box__imgDiv__img" />
          </div>
          <div className="review-info__user__info__box__rating">
            <span className="review-info__user__info__box__rating__userName">{userName}</span>
            <div className="review-info__user__info__box__rating__stars">
              <ReviewStars fill="#E17A01" />
              <ReviewStars fill="#E17A01" />
              <ReviewStars fill="#E17A01" />
              <ReviewStars fill="#E17A01" />
              <ReviewStars fill="#E17A01" />
              <div className="review-info__user__info__box__rating__stars__box">
                <span className="review-info__user__info__box__rating__stars__box__sum">{ratingSum}</span>
              </div>
            </div>
          </div>
          <h3 className="review-info__user__info__box__timeText">{timeText}</h3>
        </div>
      </div>
      <p className="review-info__user__about">
        {aboutUser}
      </p>
    </div>
  );
}
ReviewUserCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  ratingSum: PropTypes.string.isRequired,
  timeText: PropTypes.string.isRequired,
  aboutUser: PropTypes.string.isRequired,
};
export default ReviewUserCard;
