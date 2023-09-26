import React from 'react';

function OfferCvsList(props) {
  const { data } = props;
  console.log(data);
  return (
    <div className="offer__container__right">
      <div className="offer__container__right__toggle">
        <div className="offer__container__right__toggle__buttons">
          <span type="button" className="offer__container__right__toggle__buttons__search active">Searched</span>
        </div>
      </div>
    </div>

  );
}

export default OfferCvsList;
