import React from 'react';
import { useTranslation } from 'react-i18next';

function Languages() {
  if (!window.localStorage.getItem('language')) {
    window.localStorage.setItem('language', 'en');
  }
  const { i18n } = useTranslation();
  const changeLanguage = (event, language) => {
    event.stopPropagation();
    window.localStorage.setItem('language', language);
    i18n.changeLanguage(window.localStorage.getItem('language'));
  };
  return (
    <div className="languages">
      <div className="languages__row">
        <div className="languages__row__item" role="presentation" onClick={(event) => changeLanguage(event, 'en')}>
          <button type="button">English</button>
          <span className={window.localStorage.getItem('language') === 'en' ? 'languages__row__item__active' : null} />
        </div>
        <div className="languages__row__item" role="presentation" onClick={(event) => changeLanguage(event, 'am')}>
          <button type="button">Հայերեն</button>
          <span className={window.localStorage.getItem('language') === 'am' ? 'languages__row__item__active' : null} />
        </div>
        <div className="languages__row__item" role="presentation" onClick={(event) => changeLanguage(event, 'ru')}>
          <button type="button">Русский</button>
          <span className={window.localStorage.getItem('language') === 'ru' ? 'languages__row__item__active' : null} />
        </div>
      </div>
    </div>
  );
}
export default Languages;
