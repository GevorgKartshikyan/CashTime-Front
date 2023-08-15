import React from 'react';
import Avatar from '../assets/images/avatar.svg';

function ReviewUserCard() {
  // const [selectedStars, setSelectedStars] = useState(0);

  return (
    <div className="review-info__user">
      <div className="review-info__user__info">
        <div className="review-info__user__info__box">
          <div className="review-info__user__info__box__imgDiv">
            <img src={Avatar} alt="img" className="review-info__user__info__box__imgDiv__img" />
          </div>
          <div className="review-info__user__info__box__rating">
            <span className="review-info__user__info__box__rating__userName">Lusine Marry</span>
            <div className="review-info__user__info__box__rating__stars">
              <div className="rate-orange ">
                <input type="radio" id="star-5" name="rate" value="5" />
                <label htmlFor="star-5" title="text">5 stars</label>
                <input type="radio" id="star-4" name="rate" value="4" />
                <label htmlFor="star-4" title="text">4 stars</label>
                <input type="radio" id="star-3" name="rate" value="3" />
                <label htmlFor="star-3" title="text">3 stars</label>
                <input type="radio" id="star-2" name="rate" value="2" />
                <label htmlFor="star-2" title="text">2 stars</label>
                <input type="radio" id="star-1" name="rate" value="1" />
                <label htmlFor="star-1" title="text">1 star</label>

              </div>
              <span className="review-info__user__info__box__rating__sum">5.0</span>
            </div>
          </div>
          <h3 className="review-info__user__info__box__timeText">1 day ago</h3>
        </div>
      </div>
    </div>
  );
}

export default ReviewUserCard;
