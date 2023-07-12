import React from 'react';
import PropTypes from 'prop-types';
import EditSvg from '../assets/images/edit.svg';

function ProfileAddRow(props) {
  const { title } = props;
  return (
    <div className="profile__row">
      <h3 className="profile__row__info__title">{title}</h3>
      <img src={EditSvg} alt="" className="profile__row__svg" />
    </div>
  );
}

ProfileAddRow.propTypes = {
  title: PropTypes.string.isRequired,
};
export default ProfileAddRow;
