import React, { useCallback, useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Link } from 'react-router-dom';
import PasswordIcon from '../assets/images/singup_password.svg';
import GoogleIcon from '../assets/images/Signup_google_icon.svg';
import FacebookIcon from '../assets/images/Signup_facebook_icon.svg';
import Button from '../components/Button';
import Header from '../layouts/Header';

function SignUp() {
  const [activeButton, setActiveButton] = useState(false);
  const [passwordFlag, setPasswordFlag] = useState(false);
  const [confirmFlag, setConfirmFlag] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [formData, setFormData] = useState({
    userName: '',
    userSurname: '',
    email: '',
    password: '',
    confirmPassword: '',
    location: '',
    phoneNumber,
  });
  console.log(formData);

  const handleChange = useCallback((key) => (ev) => {
    setFormData({
      ...formData,
      [key]: ev.target.value,
    });
  }, [formData]);

  const showPassword = useCallback(() => {
    setPasswordFlag(!passwordFlag);
  }, [passwordFlag]);

  const showConfirmPassword = useCallback(() => {
    setConfirmFlag(!confirmFlag);
  }, [confirmFlag]);

  return (
    <>
      <Header />
      <section className="signup__start">
        <h3 className="signup__start__title">Sign Up</h3>
        {/* <div className="signup__start__rol"> */}
        {/*   <button type="button" className="signup__start__rol__btn">a</button> */}
        {/*   <button type="button" className="signup__start__rol__btn">a</button> */}
        {/* </div> */}
        <div className="signup__start__top__block">

          <button
            onClick={() => setActiveButton(false)}
            className={activeButton ? 'signup__start__top__block__map'
              : 'signup__start__top__block__map rol__active__btn'}
            type="button"
          >
            Employer
          </button>
          <button
            onClick={() => setActiveButton(true)}
            className={activeButton ? 'signup__start__top__block__list rol__active__btn'
              : 'signup__start__top__block__list'}
            type="button"
          >
            Employee
          </button>
        </div>
        <form className="signup__start__form">
          <input
            onChange={handleChange('email')}
            type="email"
            className="signup__start__form__input"
            placeholder="Email"
          />

          <input
            onChange={handleChange('userName')}
            type="text"
            className="signup__start__form__input"
            placeholder="Name"
          />

          <input
            onChange={handleChange('userSurname')}
            type="text"
            className="signup__start__form__input"
            placeholder="Surname"
          />

          <div className="signup__start__form__box">
            <input
              onChange={handleChange('password')}
              type={passwordFlag ? 'text' : 'password'}
              className="signup__start__form__password"
              placeholder="Password"
            />
            <button
              className="signup__start__form__box__button"
              type="button"
              onClick={() => showPassword()}
            >
              <img src={PasswordIcon} alt="img" />
            </button>
          </div>

          <div className="signup__start__form__box">
            <input
              onChange={handleChange('confirmPassword')}
              type={confirmFlag ? 'text' : 'password'}
              className="signup__start__form__password"
              placeholder="Confirm Password"
            />
            <button
              className="signup__start__form__box__button"
              type="button"
              onClick={() => showConfirmPassword()}
            >
              <img src={PasswordIcon} alt="img" />
            </button>

          </div>

          <input
            onChange={handleChange('location')}
            type="text"
            className="signup__start__form__input"
            placeholder="Location"
          />

          <PhoneInput
            onChange={(value) => {
              setPhoneNumber(value);
              console.log(phoneNumber);
              setFormData({
                ...formData,
                phoneNumber: `+${value}`,
              });
            }}
            country="am"
            value={phoneNumber}
            placeholder="+(374)-00-00-00"
            dropdownClass="custom-phone-dropdown"
            inputProps={{
              className: 'signup__start__form__select__phone',
            }}
          />

        </form>
        <div className="signup__start__signup__with">
          <span className="signup__start__signup__with__left" />
          <h3 className="signup__start__signup__with__info">Or Sign up With</h3>
          <span className="signup__start__signup__with__right" />
        </div>
        <div className="signup__start__icon">
          <div className="signup__start__icon__boxes">
            <img src={GoogleIcon} alt="IMG" />
          </div>
          <div className="signup__start__icon__boxes">
            <img src={FacebookIcon} alt="IMG" />
          </div>
        </div>
        <Button className="btn color-blue" title="Create my Account" />
        <Link className="signup__start__link__login" to="/">Already hae an Account? Log in</Link>
      </section>
    </>

  );
}

export default SignUp;
