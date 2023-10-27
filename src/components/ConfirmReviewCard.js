import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { confirmReview, deleteReview } from '../store/actions/reviews';

const { REACT_APP_API_URL } = process.env;
function ConfirmReviewCard({
  name, lastName, jobTitle, image, id,
}) {
  const dispatch = useDispatch();
  const handleConfirm = useCallback(() => {
    dispatch(confirmReview(id));
  }, [id]);
  const handleDelete = useCallback(() => {
    dispatch(deleteReview(id));
  }, [id]);

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
            <strong>{jobTitle}</strong>
          </p>
        </div>
        <div className="confirm-review__info__buttons">
          <button onClick={handleConfirm} className="confirm-review__info__buttons-confirm" type="button">Confirm</button>
          <button onClick={handleDelete} className="confirm-review__info__buttons-close" type="button">Close</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmReviewCard;
