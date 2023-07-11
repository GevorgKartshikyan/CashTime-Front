import React from 'react';
import * as propTypes from 'prop-types';

function HomeJob(props) {
  const {
    firstText, secondText, img, buttonTxt, rowReverse,
  } = props;
  return (
    <div className="container">
      <div className={`job__card ${rowReverse ? 'job__card__row' : ''}`}>
        <div className="job__card__img">
          <img src={img} alt="" />
        </div>
        <div className="job__card__text">
          <p className="job__card__text__first">{firstText}</p>
          <p className="job__card__text__second">{secondText}</p>
          <button className="btn job__card__btn" type="button">{buttonTxt}</button>
        </div>
      </div>
    </div>
  );
}

HomeJob.propTypes = {
  firstText: propTypes.string.isRequired,
  secondText: propTypes.string.isRequired,
  buttonTxt: propTypes.string.isRequired,
  rowReverse: propTypes.string.isRequired,
  img: propTypes.string.isRequired,
};

export default HomeJob;
