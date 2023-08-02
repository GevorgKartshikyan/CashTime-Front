import React from 'react';
import Upload from '../assets/images/upload.svg';

function PdfUpload() {
  return (
    <div>
      <div className="sign-up-steps-first__block__div">
        <div className="sign-up-steps-first__block__upload">
          <div className="sign-up-steps-first__block__upload__div">
            <label className="user-card__input-block__label new-upload" htmlFor="upload">
              <img className="user-card__input-block__label__image" src={Upload} alt="" />
              <span className="user-card__input-block__label__text" style={{ marginLeft: 46 }}>Upload Your Saved linkedin PDF</span>
              <input className="user-card__input-block__input" type="file" id="upload" />
            </label>
          </div>
        </div>
        <button type="button" className="sign-up-steps-first__block__div__button">Continue</button>
      </div>
    </div>
  );
}

export default PdfUpload;
