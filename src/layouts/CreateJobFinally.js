import React from 'react';
import PropTypes from 'prop-types';
import EditSvg from '../assets/images/edit.svg';
import jobDefaultImg from '../assets/images/job-image-default.svg';
import Button from '../components/Button';

function CreateJobFinally(props) {
  const { data } = props;
  // data destructuring
  const { fileSrc = '' } = data.dataFromChild6.selectedPhoto;
  const { dataFromChild1 = '' } = data;
  const {
    selectedMethod, maxPrice = '', priceFrom = '', priceTo = '',
  } = data.dataFromChild4;

  const { dataFromChild2 = [] } = data;
  const { dataFromChild3 = '' } = data;
  const { dataFromChild5 = '' } = data;
  const { fullAddress = '', city = '', country = '' } = data.dataFromChild6.address;
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
    <div className="job-finally-all-box">
      <div className="job__display__row big__row">
        {fileSrc ? <img src={fileSrc} alt="job desc" className="job-image" /> : (
          <div className="selected-image finally-small">
            <img src={jobDefaultImg} alt="Selected" />
          </div>
        )}
        <img src={EditSvg} alt="edit-icon" className="profile__row__svg" />
      </div>
      {dataFromChild1 ? <p className="job__finally__title">{dataFromChild1}</p> : null}
      <div className="job__display__row">
        <p className="job__finally-price">
          {selectedMethod}
          <span className="job__finally-price prices">
            {maxPrice ? `${maxPrice}$` : getPriceRange()}
          </span>
        </p>
        <img src={EditSvg} alt="edit-icon" className="profile__row__svg" />
      </div>
      <div className="job__display__row">
        <div className="job-finally-skills">
          <p className="job-finally-skill-title">SKILLS</p>
          {
            dataFromChild2.map((skill, index) => (
              <span
                key={`${`${skill}-${index}`}`}
                className={`job-finally-skill-desc${dataFromChild2.length > 1 && index === dataFromChild2.length - 1 ? '' : ' not-last'}`}
              >
                {skill}
              </span>
            ))
          }

        </div>
        <img src={EditSvg} alt="edit-icon" className="profile__row__svg" />
      </div>
      <div className="job__display__row">
        <div>
          <span className="job-finally-skill-title">Scope</span>
          <span className="job-finally-skill-level">{dataFromChild3}</span>
        </div>
        <img src={EditSvg} alt="edit-icon" className="profile__row__svg" />
      </div>
      <div className="job__display__row">
        <div>
          <span className="job-finally-skill-title">Location</span>
          <span className="job-finally-skill-level">{`${country} ${city}`}</span>
        </div>
        <img src={EditSvg} alt="edit-icon" className="profile__row__svg" />
      </div>
      <div className="job__display__row">
        <div>
          <span className="job-finally-skill-title">Address</span>
          <span className="job-finally-skill-level">{fullAddress}</span>
        </div>
        <img src={EditSvg} alt="edit-icon" className="profile__row__svg" />
      </div>
      <div className="job__display__row">
        <div>
          <span className="job-finally-skill-title">Bio</span>
          <p className="job-finally-skill-level">{dataFromChild5}</p>
        </div>
        <img src={EditSvg} alt="edit-icon" className="profile__row__svg" />
      </div>
      <div className="job-finally-buttons-box">
        <div>
          <Button className="btn color-blue" title="Save as a Draft" />
        </div>
        <div>
          <Button className="btn color-blue" title="Post This Job" />
        </div>
      </div>
    </div>
  );
}
CreateJobFinally.propTypes = {
  data: PropTypes.shape({
    dataFromChild6: PropTypes.shape({
      selectedPhoto: PropTypes.shape({
        fileSrc: PropTypes.string,
      }).isRequired,
      address: PropTypes.shape({
        fullAddress: PropTypes.string,
        city: PropTypes.string,
        country: PropTypes.string,
      }).isRequired,
    }).isRequired,
    dataFromChild1: PropTypes.string,
    dataFromChild4: PropTypes.shape({
      selectedMethod: PropTypes.string,
      maxPrice: PropTypes.string,
      priceFrom: PropTypes.string,
      priceTo: PropTypes.string,
    }),
    dataFromChild2: PropTypes.arrayOf(PropTypes.string),
    dataFromChild3: PropTypes.string,
    dataFromChild5: PropTypes.string,
  }).isRequired,
};

export default CreateJobFinally;
