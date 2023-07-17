import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import WorkerProfileRow from '../components/worke_profile_row';
import UserImage from '../assets/images/face.png';
import EditSvg from '../assets/images/edit.svg';
import EditTwoSvg from '../assets/images/editTwo.svg';
import LocationSvg from '../assets/images/location.svg';
import TelephoneSvg from '../assets/images/telephone.svg';
import MessageSvg from '../assets/images/messageTwo.svg';
import Education from '../assets/images/education.svg';
import LanguageSvg from '../assets/images/globe.svg';

function WorkerProfile() {
  const [available, setAvailable] = useState(false);
  return (
    <div className="profile">
      <div className="profile__row">
        <div className="profile__row__user-block">
          <img src={UserImage} alt="" className="profile__row__img" />
          <div className="profile__row__name-block">
            <p className="profile__row__name-block__name">Amanelia M.</p>
            <img src={LocationSvg} alt="" />
            <span className="profile__row__name-block__text">Yerevan, Armenia</span>
            <p className="profile__row__name-block__text">11:34 am Local Time</p>
            <div className="profile__row__name-block__line">
              <button type="button" className="profile__row__name-block__line__button" onClick={() => setAvailable(!available)}>Available</button>
              <span className="profile__row__name-block__line__span">{available ? 'on' : 'off'}</span>
              <img src={EditSvg} alt="" className="profile__row__svg profile__small-edit-svg" />
            </div>
          </div>
        </div>
        <Link to="/">
          <img src={EditSvg} alt="" className="profile__row__svg" />
        </Link>
      </div>
      <div className="profile__row">
        <div className="profile__row__info">
          <h3 className="profile__row__info__title">Baby Sitter</h3>
          <sspan className="profile__row__info__text">Specialized In</sspan>
        </div>
        <Link to="/">
          <img src={EditSvg} alt="" className="profile__row__svg" />
        </Link>
      </div>
      <WorkerProfileRow title="9000 AMD hr" svg={EditTwoSvg} />
      <WorkerProfileRow title="Portfolio" svg="" />
      <WorkerProfileRow title="Expert" svg="" />
      <WorkerProfileRow title="Skills" svg="" />
      <WorkerProfileRow title="Phone Number" svg={TelephoneSvg} />
      <WorkerProfileRow title="Message" svg={MessageSvg} />
      <WorkerProfileRow title="Education" svg={Education} />
      <WorkerProfileRow title="Languages" svg={LanguageSvg} />

    </div>
  );
}

export default WorkerProfile;
