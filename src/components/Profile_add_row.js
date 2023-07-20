import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import EditSvg from '../assets/images/edit.svg';

function ProfileAddRow(props) {
  const { title } = props;
  return (
    <div className="profile__row">
      <h3 className="profile__row__info__title">{title}</h3>
      <Link to="/">
        <img src={EditSvg} alt="" className="profile__row__svg" />
      </Link>
    </div>
  );
}

ProfileAddRow.propTypes = {
  title: PropTypes.string.isRequired,
};
export default ProfileAddRow;
