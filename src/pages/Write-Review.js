import React, { useState } from 'react';
import Wrapper from '../layouts/Wrapper';

function WriteReview() {
  // State to keep track of the selected star count
  const [selectedStars, setSelectedStars] = useState(0);

  // Function to handle the change in star rating
  const handleStarChange = (event) => {
    setSelectedStars(parseInt(event.target.value, 10));
  };

  return (
    <Wrapper>
      <div className="write__review">
        <div className="container">
          <div className="write__review__row">
            <div className="rate">
              <input type="radio" id="star5" name="rate" value="5" checked={selectedStars === 5} onChange={handleStarChange} />
              <label htmlFor="star5" title="text">5 stars</label>
              <input type="radio" id="star4" name="rate" value="4" checked={selectedStars === 4} onChange={handleStarChange} />
              <label htmlFor="star4" title="text">4 stars</label>
              <input type="radio" id="star3" name="rate" value="3" checked={selectedStars === 3} onChange={handleStarChange} />
              <label htmlFor="star3" title="text">3 stars</label>
              <input type="radio" id="star2" name="rate" value="2" checked={selectedStars === 2} onChange={handleStarChange} />
              <label htmlFor="star2" title="text">2 stars</label>
              <input type="radio" id="star1" name="rate" value="1" checked={selectedStars === 1} onChange={handleStarChange} />
              <label htmlFor="star1" title="text">1 star</label>
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
