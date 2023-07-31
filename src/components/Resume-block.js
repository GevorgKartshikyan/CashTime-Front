import React from 'react';
import PropTypes from 'prop-types';
import Upload from '../assets/images/upload.svg';
import Manually from '../assets/images/manually.svg';

function ResumeBlock(props) {
  const { setFlag } = props;
  return (
    <div className="sign-up-steps-first__block__label-block">
      <button onClick={() => setFlag(true)} type="button" className="user-card__input-block__label new-label" htmlFor="upload">
        <div className="sign-up-steps-first__svg-block">
          <img className="user-card__input-block__label__image" src={Upload} alt="" />
        </div>
        <span className="user-card__input-block__label__text new-text">Upload Your Resume</span>
        <input className="user-card__input-block__input" type="file" id="upload" />
      </button>
      <button type="button" className="user-card__input-block__label new-label">
        <div className="sign-up-steps-first__svg-block">
          <img className="user-card__input-block__label__image" src={Manually} alt="" />
        </div>
        <span className="user-card__input-block__label__text new-text">Fill out Manually</span>
        <span className="sign-up-steps-first__button-text">(Takes 5 Minutes)</span>
      </button>
    </div>
  );
}

ResumeBlock.propTypes = {
  setFlag: PropTypes.func.isRequired,
};

export default ResumeBlock;
