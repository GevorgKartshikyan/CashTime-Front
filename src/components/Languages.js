import React, { useState } from 'react';

function Languages() {
  const [actieLanguage, setActiveLanguage] = useState('en');

  return (
    <div className="languages">
      <div className="languages__row">
        <div className="languages__row__item" role="presentation" onClick={() => setActiveLanguage('en')}>
          <button type="button">English</button>
          <span className={actieLanguage === 'en' ? 'languages__row__item__active' : null} />
        </div>
        <div className="languages__row__item" role="presentation" onClick={() => setActiveLanguage('am')}>
          <button type="button">Armenian</button>
          <span className={actieLanguage === 'am' ? 'languages__row__item__active' : null} />
        </div>
        <div className="languages__row__item" role="presentation" onClick={() => setActiveLanguage('ru')}>
          <button type="button">Russian</button>
          <span className={actieLanguage === 'ru' ? 'languages__row__item__active' : null} />
        </div>
      </div>
    </div>
  );
}

export default Languages;
