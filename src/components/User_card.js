import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import MessageSvg from '../assets/images/message.svg';
import Phone from '../assets/images/phone.svg';
import Upload from '../assets/images/upload.svg';

function UserCard(props) {
  const { image, title, text } = props;
  const { t } = useTranslation();
  return (
    <div className="user-card">
      <div className="user-card__circle">
        <img src={image} alt="" className="user-card__img" />
      </div>
      <h5 className="user-card__title">{title}</h5>
      <p className="user-card__text">{text}</p>
      <div className="user-card__svgs-block">
        <Link to="/">
          <img className="user-card__svgs-block__svgs" src={MessageSvg} alt="" />
        </Link>
        <Link to="/">
          <img className="user-card__svgs-block__svgs" src={Phone} alt="" />
        </Link>
      </div>
      <div className="user-card__input-block">
        <label className="user-card__input-block__label" htmlFor="upload">
          <img className="user-card__input-block__label__image" src={Upload} alt="" />
          <span className="user-card__input-block__label__text">{`${t('upload_pdf_text')}linkedin PDF`}</span>
          <input className="user-card__input-block__input" type="file" id="upload" />
        </label>
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
