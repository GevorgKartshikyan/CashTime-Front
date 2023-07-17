import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import EditSvg from '../assets/images/edit.svg';

function WorkerProfileRow(props) {
  const { title, svg } = props;
  return (
    <div className="profile__row">
      <div className="profile__row__info">
        <img className={svg ? 'profile__row__info__svg' : null} src={svg} alt="" />
        <span className="profile__row__info__title">{title}</span>
      </div>
      <Link to="/">
        <img src={EditSvg} alt="" className="profile__row__svg" />
      </Link>
    </div>
  );
}

WorkerProfileRow.propTypes = {
  title: PropTypes.string.isRequired,
  svg: PropTypes.string.isRequired,
};
export default WorkerProfileRow;
