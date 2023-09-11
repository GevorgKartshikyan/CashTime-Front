import React, { useCallback, useRef, useState } from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import ProfileEditModal from '../components/ProfileEditModal';
import ProfileAboutEditModal from '../components/ProfileAboutEditModal';
import Avatar from '../assets/images/avatar.svg';
import Available from '../assets/images/available.svg';
import Star from '../assets/images/Star.svg';
import LocationSvg from '../assets/images/vectorMapBlue.svg';
import CVIcon from '../assets/images/scope_icon.svg';
import EditIcon from '../assets/images/pen_icon.svg';
import PhoneIcon from '../assets/images/phone_call_orange_icon.svg';
import MessageIcon from '../assets/images/message_orange_icon.svg';

function Profile() {
  const [active, setActive] = useState();
  const [smallModalActive, setSmallModalActive] = useState();
  const modalBg = useRef();
  const modalSmall = useRef();
  const handleOpenModal = useCallback(() => {
    setActive(true);
    document.body.style.overflowY = 'hidden';
  }, [active]);
  const handleCloseModal = useCallback((ev) => {
    if (ev.target === modalBg.current) {
      setActive(false);
      document.body.style.overflowY = 'auto';
    }
  });
  console.log(active);
  console.log(smallModalActive);
  const handleOpenSmallModal = useCallback(() => {
    setSmallModalActive(true);
    document.body.style.overflowY = 'hidden';
  }, [smallModalActive]);
  const handleCloseSmallModal = useCallback((ev) => {
    console.log(ev.target);
    console.log(modalSmall.current);
    if (ev.target === modalSmall.current) {
      setSmallModalActive(false);
      document.body.style.overflowY = 'auto';
    }
  }, [smallModalActive]);
  return (
    <div style={{ backgroundColor: 'white', position: 'relative' }}>
      <Header />
      <div className="container">
        <div className="profile">
          <div className="profile__edit">
            <button onClick={() => handleOpenSmallModal()} className="profile__edit__btn" type="button">
              <img className="profile__edit__btn__img" src={EditIcon} alt="IMG" />
            </button>
          </div>
          <div className="profile__user">
            <div className="profile__user__info">
              <div className="profile__user__info__img">
                <img className="profile__user__info__img__img" src={Avatar} alt="IMG" />
                <img className="profile__user__info__img__available" src={Available} alt="IMG" />
              </div>
              <div className="profile__user__info__global">
                <div className="profile__user__info__global__text">
                  <h3 className="profile__user__info__global__text__name">Amanelia M.</h3>
                  <span className="profile__user__info__global__text__reviewNumber">4</span>
                  <img className="profile__user__info__global__text__starSvg" src={Star} alt="IMG" />
                  <span className="profile__user__info__global__text__specialization">Expert</span>
                </div>
                <div className="profile__user__info__global__location">
                  <img className="profile__user__info__global__location__marker" src={LocationSvg} alt="IMG" />
                  <span className="profile__user__info__global__location__info">Yerevan, Armenia</span>
                </div>
                <div className="profile__user__info__global__jobs">
                  <div className="profile__user__info__global__jobs__count">
                    <span className="profile__user__info__global__jobs__count__number">104</span>
                    <span className="profile__user__info__global__jobs__count__text">Total Jobs</span>
                  </div>
                  <div className="profile__user__info__global__jobs__count">
                    <span className="profile__user__info__global__jobs__count__number">1</span>
                    <span className="profile__user__info__global__jobs__count__text">In Progress</span>
                  </div>
                </div>
                <div className="profile__user__info__global__cv">
                  <span className="profile__user__info__global__cv__text">CV Link:</span>
                  <button type="button" className="profile__user__info__global__cv__link">
                    <img className="profile__user__info__global__cv__link__img" src={CVIcon} alt="IMG" />
                  </button>
                </div>
              </div>
            </div>
            <span className="profile__user__jobPrice">
              9000 AMD/hr
            </span>
          </div>
          <div className="profile__info">
            <div className="profile__info__job">
              <div className="profile__edit">
                <button className="profile__edit__btn" onClick={() => handleOpenModal()} type="button">
                  <img className="profile__edit__btn__img" src={EditIcon} alt="IMG" />
                </button>
              </div>
              <div className="profile__info__job__box">
                <span className="profile__info__job__box__specialization">Specialized In:</span>
                <h2 className="profile__info__job__box__specializationName">House Cleaner </h2>
                <p className="profile__info__job__box__about">
                  Hey, I’m Monica, I’m a House Cleaner,
                  with a 10 plus years of experience,
                  looking for a full time job. I”m Very Responsible,
                  Respectful, and Clean, I have a very Flexible Schedule.
                </p>
                <span className="profile__info__job__box__education">Education</span>
                <span className="profile__info__job__box__educationName">ASPU</span>
                <div className="profile__info__job__box__educationInfo">
                  <span className="profile__info__job__box__educationInfo__span">
                    Bachelor’s Degree,
                  </span>
                  <span className="profile__info__job__box__educationInfo__span">
                    English
                  </span>
                  <span className="profile__info__job__box__educationInfo__span">
                    Language and Literature
                  </span>

                </div>
                <span className="profile__info__job__box__educationName">ASPU</span>
                <div className="profile__info__job__box__educationInfo">
                  <span className="profile__info__job__box__educationInfo__span">
                    Bachelor’s Degree,
                  </span>
                  <span className="profile__info__job__box__educationInfo__span">
                    English
                  </span>
                  <span className="profile__info__job__box__educationInfo__span">
                    Language and Literature
                  </span>

                </div>
                <span className="profile__info__job__box__skills">Skills</span>
                <ul>
                  <li className="profile__info__job__box__skill">Expert</li>
                  <li className="profile__info__job__box__skill">Responsible</li>
                  <li className="profile__info__job__box__skill">Open Minded</li>
                  <li className="profile__info__job__box__skill">Fast</li>
                  <li className="profile__info__job__box__skill">Respectful</li>
                  <li className="profile__info__job__box__skill">Kind</li>
                </ul>
                <span className="profile__info__job__box__languages">Languages</span>
                <ul>
                  <li className="profile__info__job__box__language">English</li>
                  <li className="profile__info__job__box__language">Armenian</li>
                  <li className="profile__info__job__box__language">Russian</li>
                </ul>
              </div>
            </div>
            <div className="profile__info__contacts">
              <h2 className="profile__info__contacts__location">Location:</h2>
              <span className="profile__info__contacts__locationName">2199/75</span>
              <div className="profile__info__contacts__phone">
                <h2 className="profile__info__contacts__phone__title">Phone Number:</h2>
                <img className="profile__info__contacts__phone__img" src={PhoneIcon} alt="IMG" />
              </div>
              <span className="profile__info__contacts__phone__number">(374)77777777</span>
              <div className="profile__info__contacts__message">
                <h2 className="profile__info__contacts__message__title">Message</h2>
                <img className="profile__info__contacts__message__img" src={MessageIcon} alt="IMG" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {active ? (
        <div className="profile-edit-modal" role="presentation" ref={modalBg} onClick={(ev) => handleCloseModal(ev)}>
          <ProfileEditModal />
        </div>
      ) : null }
      {smallModalActive ? (
        <div className="profile-edit-modal" role="presentation" ref={modalSmall} onClick={(ev) => handleCloseSmallModal(ev)}>
          <ProfileAboutEditModal />
        </div>
      ) : null }

      <Footer />
    </div>
  );
}

export default Profile;
