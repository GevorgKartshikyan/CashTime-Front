import React from 'react';
import PropTypes from 'prop-types';

function offerInfoCard(props) {
  const {
    title, detail, postTime, description,
  } = props;

  return (
    <div className="offer__container__right__job">
      <div className="offer__container__right__job__info">
        <div className="offer__container__right__job__info__right">
          <h2 className="offer__container__right__job__info__right__title">{title}</h2>
          <p className="offer__container__right__job__info__right__detail">{detail}</p>
        </div>
        <div className="offer__container__right__job__info__left">
          <div className="offer__container__right__job__info__left__opinions">
            <button type="button" className="offer__container__right__job__info__left__opinions__btn">Apply</button>
          </div>
          <p className="offer__container__right__job__info__left__post-time">{postTime}</p>
        </div>
      </div>
      <p className="offer__container__right__job__description">
        {description}
      </p>
    </div>
  );
}
offerInfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
  postTime: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,

};
export default offerInfoCard;
