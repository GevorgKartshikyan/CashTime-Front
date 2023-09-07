import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import PhoneInput from 'react-phone-input-2';
import Autocomplete from 'react-google-autocomplete';
import Carousel from 'nuka-carousel';
import _ from 'lodash';
import { useSelector } from 'react-redux';
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
import Review from './Review';
import imageAssets from '../components/assetList';

const mapKey = process.env.REACT_APP_MAP_SECRET;
function Profile() {
  const token = useSelector((state) => state.users.token);
  const [showModal, setShowModal] = useState(false);
  const [addSkill, setAddSkill] = useState('');
  const [showImgModal, setShowImgModal] = useState(false);
  const modalBg = useRef();
  const arrows = {
    left: '<',
    right: '>',
  };
  const [skills, setSkills] = useState([{ id: 'a', skill: 'xodovik' }, { id: 'b', skill: 'povr' }, { id: 'c', skill: 'killer' }]);
  const [userInfo, setUserInfo] = useState({
    firstName: 'Amanelia',
    lastName: 'Bakunc',
    phoneNumber: '',
    skills,
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
    setUserInfo({
      ...userInfo,
      skills: [...userInfo.skills, addSkill],
    });
  }, [showModal, userInfo.userName, addSkill]);
  const handleEditInfo = useCallback((key) => (e) => {
    console.log(key);

    if (key === 'phoneNumber') {
      setUserInfo({
        ...userInfo,
        [key]: e,
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
  const handleAddSkill = useCallback((inputSkill) => {
    const lowerSkillArr = skills.map((s) => s.skill.toLowerCase());
    const lowerInputSkill = inputSkill.toLowerCase();
    if (lowerInputSkill.split(' ').join('').length) {
      if (!lowerSkillArr.includes(lowerInputSkill)) {
        setSkills([...skills, {
          skill: inputSkill,
          id: _.uniqueId(),
        }]);
        setAddSkill('');
      }
    }
  }, [skills, setSkills, addSkill]);
  useEffect(() => {
    setUserInfo({
      ...userInfo,
      skills,
    });
  }, [skills]);
  const handleDeleteSkill = useCallback((e) => {
    setSkills(skills.filter((item) => item.id !== e));
  }, [skills]);

  if (!token) {
    window.location.href = '/login';
    return null;
  }

  return (
    <div>
      <Header />
      <div className="profile-review-box">
        <div className="profile">
          <div className="profile__row">
            <img src={selectedPhoto.fileSrc ? selectedPhoto.fileSrc : UserImage} alt="" className="profile__row__img" />
            <div className="profile__row__info">
              <h2 className="profile__row__info__name">
                {`${userInfo.firstName}`}
              </h2>
              <h2 className="profile__row__info__name">
                {`${userInfo.lastName}
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
            {skills[0] ? (
              <div className="profile-text-box">
                <span className="profile__list__text">Skills  - </span>
                {' '}
                {
                  skills.map((e) => (
                    <div className="profile__list__text__btnBox" key={e.id}>
                      <span className="profile__list__text__skills">
                        {e.skill}
                        <button type="button" className="profile__list__btn" onClick={() => handleDeleteSkill(e.id)}>X</button>
                      </span>

                      {/* {index === skills.length - 1 */}
                      {/*   ? <span className="profile__list__text__skills">.</span> */}
                      {/*   : <span className="profile__list__text__skills">,</span>} */}

                    </div>
                  ))
}
                {' '}

              </div>
            ) : <span className="profile__list__text">Skills</span>}
            {/* <span className="profile__list__text">
              {userInfo.skills ? userInfo.skills
               : 'Skills'}</span> */}

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
            <div className="profile__list__global">
              <button
                onClick={() => setShowModal(true)}
                type="button"
                className="profile__row__editBtn"
              >
                Edit Profile
              </button>
            </div>
          </div>
          {showModal ? (
            <div className="profile__modal" role="presentation" ref={modalBg} onClick={(ev) => handleModal(ev)}>
              <button onClick={() => setShowModal(false)} type="button" className="profile__modal__close">X</button>
              <form onSubmit={handleSave} className="profile__modal__edit">
                <div className="profile__modal__edit__box">
                  <div className="profile__modal__edit__box__container">
                    <h2 className="profile__modal__edit__box__container__text">Name</h2>
                    <input maxLength={15} onChange={handleEditInfo('firstName')} value={userInfo.firstName} className="profile__modal__edit__box__container__input" type="text" />
                  </div>
                  <div className="profile__modal__edit__box__container">
                    <h2 className="profile__modal__edit__box__container__text">Surname</h2>
                    <input maxLength={25} onChange={handleEditInfo('lastName')} value={userInfo.lastName} className="profile__modal__edit__box__container__input" type="text" />
                  </div>
                </div>
                <div className="profile__modal__edit__box">
                  <div className="profile__modal__edit__box__container">
                    <h2 className="profile__modal__edit__box__container__text">Skills</h2>
                    <input
                      type="text"
                      value={addSkill}
                      className="profile__modal__edit__box__container__input"
                      placeholder="Skill"
                      onChange={(e) => setAddSkill(e.target.value)}
                      // data-index={0}
                    />
                    <button onClick={() => handleAddSkill(addSkill)} className="profile__modal__edit__box__container__skillBtn" type="button">+</button>
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
        <Review setShowImg={() => setShowImgModal(true)} />
        {showImgModal ? (
          <div className="profile-review-box__modal">
            <div
              className="review-info__modal"
              role="presentation"
              onClick={() => setShowImgModal(false)}
            />
            <div className="review-info__carouselBox">
              <Carousel
                renderCenterLeftControls={({ previousSlide }) => (
                  <button className="carousel-btn" type="button" onClick={previousSlide}>
                    {arrows.left}
                  </button>
                )}
                renderCenterRightControls={({ nextSlide }) => (
                  <button className="carousel-btn" type="button" onClick={nextSlide}>
                    {arrows.right}
                  </button>
                )}
              >
                {imageAssets.map((image) => (
                  <img className="carousel-img" src={image} alt="IMG" />
                ))}

              </Carousel>
            </div>
          </div>
        ) : null}

      </div>
      <Footer />
    </div>
  );
}

export default Profile;
