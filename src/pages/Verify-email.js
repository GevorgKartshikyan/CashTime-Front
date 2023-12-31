import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Wrapper from '../layouts/Wrapper';
import VerifyImg from '../assets/images/verify_img.png';
import InputVerify from '../components/InputVerify';
import { activate } from '../store/actions/users';

function VerifyEmail() {
  const token = useSelector((state) => state.users.token);
  const [code, setCode] = useState('');
  const [isCodeCorrect, setIsCodeCorrect] = useState(true);
  const validationCode = useSelector((state) => state.users.user.validationCode);
  const email = useSelector((state) => state.users.user.email);
  const dispatch = useDispatch();
  console.log(validationCode, email);
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (code === validationCode.toString()) {
      dispatch(activate({ validationCode, email }));
      setIsCodeCorrect(true);
      navigate('/verified');
    } else {
      setIsCodeCorrect(false);
    }
  };
  if (token) {
    window.location.href = '/';
    return null;
  }
  return (
    <Wrapper>
      <div className="verify__email">
        <div className="container">
          <div className="verify__email__row">
            <h2 className="verify__email__text">Verify Your Email</h2>
            <img src={VerifyImg} className="verify__email__img" alt="Verify__Img" />
            <p className="verify__email__text__two">
              Please enter the 4 digit Code Sent to Your Email
              <br />
              YourEmailExample.com
            </p>
            <form className="verify__email__form" onSubmit={handleSubmit}>
              <InputVerify onData={setCode} />
              {!isCodeCorrect
                && <p className="verify__email__error">Incorrect code. Please try again.</p>}
              <p className="verify__email__resend">Resend Code</p>
              <button type="submit" className="verify__email__submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default VerifyEmail;
