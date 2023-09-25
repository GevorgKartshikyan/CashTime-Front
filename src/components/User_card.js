import React from 'react';
import PropTypes from 'prop-types';

function UserCard(props) {
  const { image, title, text } = props;
  return (
    <div className="user-card">
      <div className="user-card__circle">
        <img src={image} alt="" className="user-card__img" />
      </div>
      <h5 className="user-card__title">{title}</h5>
      <p className="user-card__text">{text}</p>
      <div className="user-card__input-block">
        <button className="user-card__input-block__button" type="button">
          Apply
        </button>
      </div>
    </div>
  );
}

UserCard.propTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default UserCard;
