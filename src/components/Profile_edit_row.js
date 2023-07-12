import React from 'react';
import PropTypes from 'prop-types';
import EditSvg from '../assets/images/edit.svg';

function ProfileEditRow(props) {
  const { text, title, svg } = props;
  return (
    <div className="profile__row">
      <div className="profile__row__info">
        <h3 className="profile__row__info__title">{title}</h3>
        <img src={svg} alt="" />
        <span className="profile__row__info__text">{text}</span>
      </div>
      <img src={EditSvg} alt="" className="profile__row__svg" />
    </div>
  );
}

ProfileEditRow.propTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  svg: PropTypes.element.isRequired,
};
export default ProfileEditRow;
