import React from 'react';
import PropTypes from 'prop-types';
import EditSvg from '../assets/images/edit.svg';
import jobDefaultImg from '../assets/images/job-image-default.svg';

function CreateJobFinally(props) {
  const { data } = props;
  // const handleChangePage = (newCount) => {
  //   edit(newCount);
  // };
  console.log(data);

  // data destructuring
  const { selectedPhoto } = data.dataFromChild6;
  const { dataFromChild1 } = data;
  const {
    selectedMethod, maxPrice, priceFrom, priceTo,
  } = data.dataFromChild4;
  //= ===============//
  const getPriceRange = () => {
    if (priceFrom && priceTo) {
      return `${priceFrom}$-${priceTo}$`;
    } if (priceFrom) {
      return `${priceFrom}$`;
    }
    return '';
  };

  console.log(data);

  return (
    <div>
      <div className="job__display__row big__row">
        {selectedPhoto ? <img src={selectedPhoto} alt="job desc" className="job-image" /> : (
          <div className="selected-image finally-small">
            <img src={jobDefaultImg} alt="Selected" />
          </div>
        )}
        <img src={EditSvg} alt="edit-icon" className="profile__row__svg" />
      </div>
      <p className="job__finally__title">{dataFromChild1}</p>
      <div className="job__display__row">
        <p className="job__finally-price">
          {selectedMethod}
          <span className="job__finally-price prices">
            {maxPrice ? `${maxPrice}$` : getPriceRange()}
          </span>
        </p>
        <img src={EditSvg} alt="edit-icon" className="profile__row__svg" />
      </div>
    </div>
  );
}
CreateJobFinally.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
};

export default CreateJobFinally;
