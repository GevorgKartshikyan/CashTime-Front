import React, { useState } from 'react';
import Wrapper from '../layouts/Wrapper';

function WriteReview() {
  const [selectedStars, setSelectedStars] = useState(0);
  const [reviewFixed, setReviewFixed] = useState(false);

  const handleStarClick = (starsCount) => {
    if (!reviewFixed) {
      setSelectedStars(starsCount);
    }
  };

  const handleReviewStars = () => {
    setReviewFixed(true);
  };

  const handleStarKeyDown = (event, starsCount) => {
    if (!reviewFixed && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      setSelectedStars(starsCount);
    }
  };

  return (
    <Wrapper>
      <div className="write__review">
        <div className="container">
          <div className="write__review__row">
            <div className="review__stars">
              {/* Generate five stars */}
              {[1, 2, 3, 4, 5].map((index) => (
                <span
                  key={index}
                  className={`star ${index <= selectedStars ? 'yellow' : ''}`}
                  onMouseEnter={() => handleStarClick(index)}
                  onMouseLeave={() => handleStarClick(selectedStars)}
                  onClick={() => handleReviewStars(index)}
                  onKeyDown={(event) => handleStarKeyDown(event, index)}
                  role="button"
                  tabIndex={0} // This makes the span focusable
                >
                  &#9733;
                </span>
              ))}
            </div>
            <form action="#" className="write__review__form">
              <p className="write__review__text__one">Write A review here</p>
              <textarea className="write__review__text__area" name="text__area__review" rows="4" cols="50" placeholder="Write You Review Here" />
              <button type="submit" className="btn write__review__button">Confirm</button>
              <button type="submit" className="write__review__button__skip">Skip</button>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default WriteReview;
