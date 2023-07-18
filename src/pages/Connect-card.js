import React from 'react';
import Header from '../layouts/Header';
import ConnectCardImg from '../assets/images/connect_card.svg';
import ConnectCardImgIcon from '../assets/images/connect_card_icon.svg';
import ConnectCardInfoIcon from '../assets/images/connect_card_info_icon.svg';

function ConnectCard() {
  return (
    <div className="connect-card">
      <Header />
      <div className="container">
        <div className="connect-card__row">
          <div className="connect-card__row__content">
            <img src={ConnectCardImg} alt="" className="connect-card__img" />
            <p className="connect-card__text__number1">
              Card Number
              <img src={ConnectCardInfoIcon} className="connect-card__info__icon" alt="" />
            </p>
            <form action="#" className="connect-card__form">
              <label htmlFor="connect-card__input1" className="connect-card__form__label1">
                <img src={ConnectCardImgIcon} alt="" className="connect-card__form__img" />
                <input type="number" id="connect-card__input1" placeholder="324 - 324 - 324 - 324" className="connect-card__form__input1" />
              </label>
              <div className="connect-card__block">
                <div className="connect-card__block__top">
                  <p className="connect-card__text__number2">
                    Expatriation Date
                    <img src={ConnectCardInfoIcon} className="connect-card__info__icon" alt="" />
                  </p>
                  <p className="connect-card__text__number3">
                    CCV
                    <img src={ConnectCardInfoIcon} className="connect-card__info__icon" alt="" />
                  </p>
                </div>
                <div className="connect-card__block__bottom">
                  <input type="text" id="connect-card__input2" maxLength="2" className="connect-card__form__input2" />
                  <input type="text" id="connect-card__input3" maxLength="4" className="connect-card__form__input3" />
                  <input type="text" id="connect-card__input4" maxLength="3" className="connect-card__form__input4" />
                </div>
              </div>
              <button className="connect-card__form__button" type="button">
                Submit Payment Method
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConnectCard;
