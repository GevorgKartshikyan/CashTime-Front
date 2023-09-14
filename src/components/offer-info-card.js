import React from 'react';
import moment from 'moment';

function offerInfoCard(props) {
  const {
    title, description,
    priceMethod, priceMaxHourly, priceMinHourly,
    experience, createdAt, priceFixed, country, city, classMapSeen = '',
  } = props;
  return (
    <div className={classMapSeen ? 'offer__container__right__job on-map-seen on-map-seen' : 'offer__container__right__job'}>
      <div className="offer__container__right__job__info">
        <div className="offer__container__right__job__info__right" style={{ marginTop: 'auto' }}>
          <h2 className="offer__container__right__job__info__right__title">{title}</h2>
          <span className="offer__container__right__job__info__right__detail">{priceMethod}</span>
          {priceMethod === 'Project Budget'
            ? <span className="offer__container__right__job__info__right__detail">{`${priceFixed} USD,`}</span>
            : <span className="offer__container__right__job__info__right__detail">{`${priceMinHourly || ''} - ${priceMaxHourly || ''} USD,`}</span>}
          {country && city ? <span className="offer__container__right__job__info__right__detail">{`${country}/${city},`}</span> : null }
          {experience ? <span className="offer__container__right__job__info__right__detail">{experience}</span> : null}
        </div>
        <div className="offer__container__right__job__info__left">
          <div className="offer__container__right__job__info__left__opinions">
            <button type="button" className="offer__container__right__job__info__left__opinions__btn">Apply</button>
          </div>
          <p className="offer__container__right__job__info__left__post-time">{`Posed ${moment(createdAt).fromNow()}`}</p>
        </div>
      </div>
      <p className="offer__container__right__job__description">
        {description}
      </p>
    </div>
  );
}
export default offerInfoCard;
