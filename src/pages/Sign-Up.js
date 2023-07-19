import React, { useCallback, useState } from 'react';
import Select from 'react-select';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Link } from 'react-router-dom';
import PasswordIcon from '../assets/images/singup_password.svg';
import CloseIcon from '../assets/images/signup_text_close.svg';
import GoogleIcon from '../assets/images/Signup_google_icon.svg';
import FacebookIcon from '../assets/images/Signup_facebook_icon.svg';
import Button from '../components/Button';
import IndicatorsArrows from '../components/IndicatorsArrows';

function SignUp() {
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      fontFamily: 'Lato,sans-serif',
      paddingLeft: 5,
      paddingRight: 15,
      color: 'rgba(3, 16, 84, 0.50)',
      width: 415,
      height: 37,
      border: state.isFocused ? 0 : 0,
      borderRadius: 8,
      background: '#FFF',
      outline: 'none',
      marginBottom: 15,
      boxShadow: 'none',
      '&:hover': {
        borderColor: 'rgba(3, 16, 84, 0.70)',
      },
      '&:focus': {
        borderColor: 'rgba(3, 16, 84, 0.90)',
        boxShadow: 'none',
      },
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? '#FFF' : '#333',
      background: state.isSelected ? 'rgba(3, 16, 84, 0.50)' : null,
      cursor: 'pointer',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'rgba(3, 16, 84, 0.70)',
    }),
    placeholder: (defaultStyles) => ({
      ...defaultStyles,
      color: 'rgba(3, 16, 84, 0.50)',
      fontSize: 14,
    }),
  };

  const [passwordFlag, setPasswordFlag] = useState(false);
  const [confirmFlag, setConfirmFlag] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    service: '',
    password: '',
    confirmPassword: '',
    city: '',
    phoneNumber,
    bio: '',
  });

  const handleChange = useCallback((key) => (ev) => {
    setFormData({
      ...formData,
      [key]: ev.target.value,
    });
  }, [formData]);
  const handeChangeSelects = (key) => (e) => {
    setFormData({
      ...formData,
      [key]: e.value,
    });
  };

  const showPassword = useCallback(() => {
    setPasswordFlag(!passwordFlag);
  }, [passwordFlag]);

  const showConfirmPassword = useCallback(() => {
    setConfirmFlag(!confirmFlag);
  }, [confirmFlag]);

  console.log(formData);
  const options = [
    {
      value: 'test1',
      label: 'Test1',
    },
    {
      value: 'test2',
      label: 'Test2',
    },
    {
      value: 'test3',
      label: 'Test3',
    },
    {
      value: 'test4',
      label: 'Test4',
    },
    {
      value: 'test5',
      label: 'Test5',
    },
    {
      value: 'test6',
      label: 'Test6',
    },
    {
      value: 'test7',
      label: 'Test7',
    },
    {
      value: 'test8',
      label: 'Test8',
    },
    {
      value: 'test9',
      label: 'Test9',
    },
    {
      value: 'test10',
      label: 'Test10',
    },
  ];

  console.log(formData);
  return (
    <section className="signup__start">
      <h3 className="signup__start__title">Sign Up</h3>
      <form className="signup__start__form">
        <input
          onChange={handleChange('userName')}
          type="text"
          className="signup__start__form__input"
          placeholder="Username"
        />
        <input
          onChange={handleChange('email')}
          type="email"
          className="signup__start__form__input"
          placeholder="Email"
        />
        <Select
          placeholder="Search of Service"
          options={options}
          styles={customStyles}
          onChange={handeChangeSelects('service')}
          className="signup__start__form__select"
          classNamePrefix="signup__start__form__select"
          components={{
            IndicatorsContainer: IndicatorsArrows,
          }}

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

        <Select
          placeholder="City"
          options={options}
          styles={customStyles}
          // defaultValue={selectedOption}
          onChange={handeChangeSelects('city')}
          className="signup__start__form__select"
          classNamePrefix="signup__start__form__select"
          components={{
            IndicatorsContainer: IndicatorsArrows,
          }}

        />
        <PhoneInput
          onChange={(value) => {
            setPhoneNumber(value);
            setFormData({
              ...formData,
              phoneNumber: `+${value}`,
            });
          }}
          country="am"
          value={phoneNumber}
          placeholder="+(374)-00-00-00"
          inputProps={{
            // dropdownClass: 'custom-phone-dropdown',
            className: 'signup__start__form__select__phone', // Применение пользовательского CSS-класса
          }}
        />
        <textarea
          onChange={handleChange('bio')}
          name=""
          placeholder="Already Have a Bio? Pass It Here"
          className="signup__start__form__textarea"
        />
        <div className="signup__start__form__textBox">
          <img src={CloseIcon} className="signup__start__form__textBox__img" alt="img" />
          <p className="signup__start__form__textBox__info">
            Sign up for the latest CashApp For
            a Better experience, special offers,
            and more. Unsubscribe at any time.
          </p>
        </div>
        <button type="submit" className="btn">Register</button>
        <p className="signup__start__form__info">
          By clicking &quot;Register&quot;, I agree to CashApps
          Terms and Service and acknowledge
          that I have read its Privacy policy
        </p>
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

  );
}

export default SignUp;
