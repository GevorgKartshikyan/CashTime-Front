import React from 'react';
import Wrapper from '../layouts/Wrapper';
import VerifiedImg from '../assets/images/verified.svg';

function Verified() {
  return (
    <Wrapper>
      <div className="verified">
        <div className="container">
          <div className="verified__row">
            <div className="verified__box">
              <img src={VerifiedImg} alt="verified" />
              <h2 className="verified__text">
                Verified!
              </h2>
            </div>
            <button type="button" className="verified__button">Continue</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Verified;
