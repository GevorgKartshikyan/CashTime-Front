import React from 'react';
import PropTypes from 'prop-types';
import { t } from 'i18next';

function UserCard(props) {
  const { REACT_APP_API_URL } = process.env;
  const { image, title, text } = props;
  return (
    <div className="user-card">
      <div className="user-card__circle">
        <img src={REACT_APP_API_URL + image} alt="" className="user-card__img" />
      </div>
      <h5 className="user-card__title">{title}</h5>
      <p className="user-card__text">{text}</p>
      <div className="user-card__input-block">
        <button className="user-card__input-block__button" type="button">
          {t('header_user_card_button')}
        </button>
      </div>
    </div>
  );
}

UserCard.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
};
UserCard.defaultProps = {
  title: '',
  image: '',
  text: '',
};
export default UserCard;
