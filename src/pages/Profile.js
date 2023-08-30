import React, { useCallback, useRef, useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import Autocomplete from 'react-google-autocomplete';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import UserImage from '../assets/images/default-avatar-icon.jpg';
import markerSvg from '../assets/images/VectorMap.svg';
import priceSvg from '../assets/images/price_icon.svg';
import phoneSvg from '../assets/images/phone_profile_icon.svg';
import messageSvg from '../assets/images/messageTwo.svg';
import educationSvg from '../assets/images/education.svg';
import globeSvg from '../assets/images/globe.svg';
import upLoad from '../assets/images/upload.svg';
import imgUpload from '../assets/images/img_upload_svg.svg';

const mapKey = process.env.REACT_APP_MAP_SECRET;
function Profile() {
  const [showModal, setShowModal] = useState(false);
  const modalBg = useRef();

  const [userInfo, setUserInfo] = useState({
    firstName: 'Amanelia',
    lastName: 'Bakunc',
    phoneNumber: '',
    skills: '',
  });

  const [address, setAddress] = useState({
    latitude: '',
    longitude: '',
    fullAddress: '',
    location: '',
  });

  const [selectedPhoto, setSelectedPhoto] = useState({
    fileSrc: '',
    file: null,
  });

  const inputRef = useRef(null);

  const handleModal = useCallback((ev) => {
    if (ev.target === modalBg.current) {
      setShowModal(false);
    }
  }, [showModal]);

  const handleSave = useCallback((ev) => {
    ev.preventDefault();
    if (userInfo.firstName.trim().length !== 0 && userInfo.lastName.trim().length) {
      setShowModal(false);
    }
  }, [showModal, userInfo.userName]);
  const handleEditInfo = useCallback((key) => (e) => {
    if (key === 'phoneNumber') {
      setUserInfo({
        ...userInfo,
        [key]: e,
      });
    } else {
      setUserInfo({
        ...userInfo,
        [key]: e.target.value,
      });
    }
  }, [userInfo]);
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
      console.log(address);
      console.error(e);
    }
  };
  return (
    <>
      <Header />
      <div className="profile">
        <div className="profile__row">
          <img src={selectedPhoto.fileSrc ? selectedPhoto.fileSrc : UserImage} alt="" className="profile__row__img" />
          <div className="profile__row__info">
            <h2 className="profile__row__info__name">
              {`${userInfo.firstName}
            
              ${userInfo.lastName}
              `}
            </h2>
            <div className="profile__row__info__location">
              <img className="profile__row__info__location__svg" src={markerSvg} alt="img" />
              <p className="profile__row__info__location__name">Yerevan, Armenia</p>
            </div>
            <p className="profile__row__info__time">11:34am local time</p>
            <div className="profile__row__info__available">
              <button type="button" className="profile__row__info__available__btn">Available</button>
              <p className="profile__row__info__available__toggle">off</p>
            </div>
          </div>
          <button onClick={() => setShowModal(true)} type="button" className="profile__row__editBtn">Edit Profile</button>
        </div>
        <div className="profile__list">
          <p className="profile__list__text">
            Baby Sitter
            <br />
            <span className="profile__list__text text-small">
              Specialized In
            </span>
          </p>
          <div className="profile__list__global">
            <img className="profile__list__global__svg" src={priceSvg} alt="img" />
            <p className="profile__list__global__info">9000 AMD hr</p>
          </div>
          <p className="profile__list__text">Portfolio</p>
          <p className="profile__list__text">Expert</p>
          <p className="profile__list__text">{userInfo.skills ? userInfo.skills : 'Skills'}</p>
          <div className="profile__list__global">
            <img className="profile__list__global__svg" src={phoneSvg} alt="img" />
            <p className="profile__list__global__info">{userInfo.phoneNumber ? `+${userInfo.phoneNumber}` : 'Phone Number'}</p>
          </div>
          <div className="profile__list__global">
            <img className="profile__list__global__svg" src={messageSvg} alt="img" />
            <p className="profile__list__global__info">Message</p>
          </div>
          <div className="profile__list__global">
            <img className="profile__list__global__svg" src={educationSvg} alt="img" />
            <p className="profile__list__global__info">Education</p>
          </div>
          <div className="profile__list__global">
            <img className="profile__list__global__svg" src={globeSvg} alt="img" />
            <p className="profile__list__global__info">Languages</p>
          </div>
        </div>
        {showModal ? (
          <div className="profile__modal" role="presentation" ref={modalBg} onClick={(ev) => handleModal(ev)}>
            <button onClick={() => setShowModal(false)} type="button" className="profile__modal__close">X</button>
            <form onSubmit={handleSave} className="profile__modal__edit">
              <div className="profile__modal__edit__box">
                <div className="profile__modal__edit__box__container">
                  <h2 className="profile__modal__edit__box__container__text">Name</h2>
                  <input onChange={handleEditInfo('firstName')} value={userInfo.firstName} className="profile__modal__edit__box__container__input" type="text" />
                </div>
                <div className="profile__modal__edit__box__container">
                  <h2 className="profile__modal__edit__box__container__text">Surname</h2>
                  <input onChange={handleEditInfo('lastName')} value={userInfo.lastName} className="profile__modal__edit__box__container__input" type="text" />
                </div>
              </div>
              <div className="profile__modal__edit__box">
                <div className="profile__modal__edit__box__container">
                  <h2 className="profile__modal__edit__box__container__text">Skills</h2>
                  <input placeholder="Skills" onChange={handleEditInfo('skills')} value={userInfo.skills} className="profile__modal__edit__box__container__input" type="text" />
                </div>
                <div className="profile__modal__edit__box__container">
                  <h2 className="profile__modal__edit__box__container__text">Location</h2>
                  <Autocomplete
                    placeholder="Location"
                    className="profile__modal__edit__box__container__input"
                    apiKey={mapKey}
                    onPlaceSelected={handlePlaceSelect}
                    language="en"
                    options={{
                      componentRestrictions: { country: 'am' },
                      types: ['geocode', 'establishment'],
                    }}
                  />
                </div>
              </div>
              <h2 className="profile__modal__edit__box__container__text">Phone Number</h2>
              <div>
                <PhoneInput
                  // onlyCountries={onlyCountries}
                  onChange={handleEditInfo('phoneNumber')}
                  country="am"
                  value={userInfo.phoneNumber}
                  placeholder="+(374)-00-00-00"
                  dropdownClass="custom-phone-dropdown"
                  inputProps={{
                    className: 'signup__start__form__select__phone',
                  }}
                />
              </div>
              <h2 className="profile__modal__edit__box__container__text">Avatar</h2>
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
              <button type="submit" className="profile__modal__edit__btn">Save</button>

            </form>
          </div>
        ) : null}

      </div>
      <Footer />
    </>
  );
}

export default Profile;
