import React from 'react';

const { REACT_APP_API_URL } = process.env;
function ConfirmReviewCard({
  name, lastName, jobTitle, image, id,
}) {
  console.log(id);
  return (
    <div className="confirm-review">
      <div className="confirm-review__img">
        <img src={REACT_APP_API_URL + image} alt="" />
      </div>
      <div className="confirm-review__info">
        <div className="confirm-review__info__name">
          <p>
            {name}
            {' '}
            {lastName}
          </p>
        </div>
        <div className="confirm-review__info__text">
          <p>
            do you agree that you have completed this work? :
            {jobTitle}
          </p>
        </div>
        <div className="confirm-review__info__buttons">
          <button className="confirm-review__info__buttons-confirm" type="button">Confirm</button>
          <button className="confirm-review__info__buttons-close" type="button">Close</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmReviewCard;
