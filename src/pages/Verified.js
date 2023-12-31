import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Wrapper from '../layouts/Wrapper';
import VerifiedImg from '../assets/images/verified.svg';

function Verified() {
  const token = useSelector((state) => state.users.token);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 1500);
  }, []);
  if (token) {
    window.location.href = '/';
    return null;
  }
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
