import React from 'react';
import Wrapper from '../layouts/Wrapper';
import starsImg from '../assets/images/starts.svg';

function WriteReview() {
  return (
    <Wrapper>
      <div className="write__review">
        <div className="container">
          <div className="write__review__row">
            <img className="review__stars" src={starsImg} alt="stars" />
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
