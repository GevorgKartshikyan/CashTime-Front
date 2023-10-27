import React from 'react';
import ReviewRateStars from './ReviewRateStars';

const { REACT_APP_API_URL } = process.env;

function SingleReview({
  firstName, lastName, profileImg, rate, date, text, images = [], selectImage,
}) {
  return (
    <div className="review__box">
      <div>
        <img className="review-user-image" src={REACT_APP_API_URL + profileImg} alt="user" />
      </div>
      <div className="text-block">
        <p>
          {firstName}
          {' '}
          {lastName}
          .
        </p>
        <div className="rate-block">
          <ReviewRateStars rate={rate} />
          <p className="review-rate-count">{`${rate}.0`}</p>
          <p className="review-date">{date}</p>
        </div>
        <blockquote className="review-text">
          {text}
        </blockquote>
        <div className="review-image-block">
          {images.map((e) => (
            <img
              role="presentation"
              onClick={() => selectImage(e.name)}
              key={e.id}
              src={REACT_APP_API_URL + e.name}
              alt="review"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SingleReview;
