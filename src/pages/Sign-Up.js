import React, {
  useCallback, useRef, useState,
} from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Autocomplete from 'react-google-autocomplete';
import { toast, ToastContainer } from 'react-toastify';
import jwtDecode from 'jwt-decode';
import { GoogleLogin } from '@react-oauth/google';
import PasswordIcon from '../assets/images/singup_password.svg';
import Header from '../layouts/Header';
import imgUpload from '../assets/images/img_upload_svg.svg';
import upLoad from '../assets/images/upload.svg';
import { registerRequest } from '../store/actions/users';
import GoogleIcon from '../assets/images/Signup_google_icon.svg';

const mapKey = process.env.REACT_APP_MAP_SECRET;
function SignUp() {
  const token = useSelector((state) => state.users.token);

  const [passwordFlag, setPasswordFlag] = useState(false);
  const [confirmFlag, setConfirmFlag] = useState(false);
  const [address, setAddress] = useState({
    latitude: '',
    longitude: '',
    fullAddress: '',
    location: '',
  });
  const [phone, setPhoneNumber] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone,
    role: 'employer',
    type: '',
  });
  const [selectedPhoto, setSelectedPhoto] = useState({
    fileSrc: '',
    file: null,
  });

  const inputRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const statusRequest = useSelector((state) => state.users.registerRequestStatus);

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

  const handleFileSelect = useCallback((ev) => {
    if (!ev.target.files[0]) {
      return;
    }
    const fileSrc = URL.createObjectURL(ev.target.files[0]);
    setSelectedPhoto({ fileSrc, file: ev.target.files[0] });
  }, [selectedPhoto]);

  const handleDeleteAvatar = useCallback(() => {
    inputRef.current.value = '';
    URL.revokeObjectURL(selectedPhoto.fileSrc);
    setSelectedPhoto({ fileSrc: '', file: null });
  }, [selectedPhoto]);

  const handleRegister = useCallback(async (ev) => {
    ev.preventDefault();
    console.log(statusRequest);
    try {
      const { payload } = await dispatch(registerRequest({
        ...formData,
        address,
        avatar: selectedPhoto.file,
      }));
      if (payload.status === 'ok' || payload.status === 'fulfilled') {
        navigate('/verify');
      }
      if (payload.status === 'error') {
        toast.error(`${payload?.message}`);
        console.log(`${payload?.message}`);
      }
    } catch (error) {
      console.log(error);
    }
  }, [formData, selectedPhoto]);

  const handlePlaceSelect = (place) => {
    try {
      const { lat, lng } = place.geometry.location;
      const addressComponents = place.address_components;
      let country = '';
      let city = '';
      for (let i = 0; i < addressComponents.length; i += 1) {
        const component = addressComponents[i];
        const componentType = component.types[0];
        if (componentType === 'country') {
          country = component.long_name;
        } else if (componentType === 'locality') {
          city = component.long_name;
        }
      }
      setAddress({
        latitude: lat(),
        longitude: lng(),
        fullAddress: place.formatted_address,
        country,
        city,
      });
    } catch (e) {
      console.error(e);
    }
  };

  const responseGoogle = async (response) => {
    const user = jwtDecode(response.credential);
    console.log(user);
    try {
      const { payload } = await dispatch(registerRequest({
        email: user.email,
        lastName: user.family_name,
        firstName: user.given_name,
        type: 'google',
      }));

      console.log(payload);

      if (payload.status === 'ok' || payload.status === 'fulfilled') {
        navigate('/verified');
      }

      if (payload.status === 'error') {
        toast.error(`${payload?.message}`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  if (token) {
    window.location.href = '/';
    return null;
  }
  return (
    <>
      <Header />
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <section className="signup__start">
        <h3 className="signup__start__title">Sign Up</h3>
        <div className="signup__start__top__block">

          <button
            onClick={() => setFormData({ ...formData, role: 'employer' })}
            className={formData.role === 'employee' ? 'signup__start__top__block__map'
              : 'signup__start__top__block__map rol__active__btn'}
            type="button"
          >
            Employer
          </button>
          <button
            onClick={() => setFormData({ ...formData, role: 'employee' })}
            className={formData.role === 'employee' ? 'signup__start__top__block__list rol__active__btn'
              : 'signup__start__top__block__list'}
            type="button"
          >
            Employee
          </button>
        </div>
        <form className="signup__start__form" onSubmit={(ev) => handleRegister(ev)}>
          <input
            onChange={handleChange('email')}
            type="email"
            className="signup__start__form__input"
            placeholder="Email"
          />

          <input
            onChange={handleChange('firstName')}
            type="text"
            className="signup__start__form__input"
            placeholder="Name"
          />

          <input
            onChange={handleChange('lastName')}
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
          <Autocomplete
            placeholder="Location"
            className="signup__start__form__input"
            apiKey={mapKey}
            onPlaceSelected={handlePlaceSelect}
            language="en"
            options={{
              componentRestrictions: { country: 'am' },
              types: ['geocode', 'establishment'],
            }}
          />
          <div className="signup__start__form__img__box">
            <div className="signup__start__form__img__box__labelBox">
              <label htmlFor="hidden-file-input" className="signup__start__form__img__box__labelBox__label">
                <img
                  src={upLoad}
                  alt="upload-img"
                  className="signup__start__form__img__box__labelBox__label__img"
                />
                <h3 className="signup__start__form__img__box__labelBox__label__text">Upload an avatar</h3>
                <input id="hidden-file-input" ref={inputRef} onChange={handleFileSelect} style={{ display: 'none' }} type="file" />
              </label>
            </div>
            <div className="signup__start__form__img__box__imgBox">
              {selectedPhoto.file
                ? <div className="signup__start__form__img__box__imgBox__btn" onClick={handleDeleteAvatar} role="presentation" />
                : null}
              {
              selectedPhoto.file
                ? <img src={selectedPhoto.fileSrc} alt="img" className="signup__start__form__img__box__imgBox__img" />
                : <img src={imgUpload} alt="img" className="signup__start__form__img__box__imgBox__defaultImg" />
            }

            </div>
          </div>

          <PhoneInput
            onChange={(value) => {
              setPhoneNumber(value);
              setFormData({
                ...formData,
                phone: `+${value}`,
              });
            }}
            country="am"
            value={phone}
            placeholder="+(374)-00-00-00"
            dropdownClass="custom-phone-dropdown"
            inputProps={{
              className: 'signup__start__form__select__phone',
            }}
          />
          <div className="signup__start__signup__with">
            <span className="signup__start__signup__with__left" />
            <h3 className="signup__start__signup__with__info">Or Sign up With</h3>
            <span className="signup__start__signup__with__right" />
          </div>
          <div className="googleLogin">
            <GoogleLogin
              render={(renderProps) => (
                <button
                  type="button"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <div className="signup__start__icon">
                    <div className="signup__start__icon__boxes">
                      <img src={GoogleIcon} alt="IMG" />
                    </div>
                  </div>
                </button>
              )}
              buttonText="Login"
              onSuccess={responseGoogle}
              onError={responseGoogle}
              useOneTap
            />
          </div>
          <button type="submit" className="btn color-blue" disabled={statusRequest === 'pending'}>Create my Account</button>
          <Link className="signup__start__link__login" to="/">Already hae an Account? Log in</Link>
        </form>
      </section>
    </>

  );
}

export default SignUp;
