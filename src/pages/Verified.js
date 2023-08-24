import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Wrapper from '../layouts/Wrapper';
import VerifiedImg from '../assets/images/verified.svg';

function Verified() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 2000);
  }, []);
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
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Verified;
