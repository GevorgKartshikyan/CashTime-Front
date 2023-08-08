import React from 'react';
import * as propTypes from 'prop-types';
import idea from '../assets/images/Idea.svg';

function Announcement(props) {
  const {
    title,
    text,
    userImage,
    name,
    lastname,
  } = props;
  return (
    <div className="announcement">
      <div className="announcement__logo">
        <img src={idea} alt="" />
      </div>
      <div className="announcement__info">
        <div className="announcement__info__title">
          <p>{title}</p>
        </div>
        <div className="announcement__info__text">
          <p>{text}</p>
          <button className="announcement_accept" type="submit">Accept</button>
          <button className="announcement_delete" type="submit">Delete</button>
        </div>
      </div>
      <div className="announcement__user">
        <div className="announcement__user__img">
          <img src={userImage} alt="" />
        </div>
        <div className="announcement__user__name">
          <p>
            {`${name} ${lastname}`}
          </p>
        </div>
      </div>
    </div>
  );
}

Announcement.propTypes = {
  text: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  lastname: propTypes.string.isRequired,
  userImage: propTypes.string.isRequired,
};

export default Announcement;
