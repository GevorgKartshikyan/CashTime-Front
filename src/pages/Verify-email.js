import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Wrapper from '../layouts/Wrapper';
import Api from '../Api';
import VerifyImg from '../assets/images/verify_img.png';
import InputVerify from '../components/InputVerify';
import { getProfile, getSingleUser } from '../store/actions/users';

function VerifyEmail() {
  const [code, setCode] = useState('');
  const [isCodeCorrect, setIsCodeCorrect] = useState(true);
  const validationCode = useSelector((state) => state.users.user.validationCode);
  const email = useSelector((state) => state.users.user.email);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleUser);
    dispatch(getProfile);
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (code === validationCode.toString()) {
      const { data } = await Api.activate({ validationCode, email });
      console.log(data);
      setIsCodeCorrect(true);
      navigate('/verified');
    } else {
      setIsCodeCorrect(false);
    }
  };
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
