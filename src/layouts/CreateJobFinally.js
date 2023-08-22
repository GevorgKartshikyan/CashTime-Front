import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import EditSvg from '../assets/images/edit.svg';
import jobDefaultImg from '../assets/images/job-image-default.svg';
import Button from '../components/Button';
import Api from '../Api';

function CreateJobFinally(props) {
  const { file, editCount } = props;
  const [dataForRequest, setDataForRequest] = useState({});
  const dataForUpdate = useSelector((state) => state.createJobForm);
  useEffect(() => {
    setDataForRequest({ ...dataForUpdate, file });
  }, [dataForUpdate, file]);
  console.log(dataForRequest);
  const dataFromChild1 = useSelector((state) => state.createJobForm.dataFromChild1);
  const dataFromChild2 = useSelector((state) => state.createJobForm.dataFromChild2);
  const dataFromChild3 = useSelector((state) => state.createJobForm.dataFromChild3);
  const selectedMethod = useSelector((state) => state.createJobForm.dataFromChild4.method);
  const priceFrom = useSelector((state) => state.createJobForm.dataFromChild4.priceFrom);
  const priceTo = useSelector((state) => state.createJobForm.dataFromChild4.priceTo);
  const maxPrice = useSelector((state) => state.createJobForm.dataFromChild4.maxPrice);
  const dataFromChild5 = useSelector((state) => state.createJobForm.dataFromChild5);
  const fileSrc = useSelector((state) => state.createJobForm.dataFromChild6.selectedPhoto);
  const address = useSelector((state) => state.createJobForm.dataFromChild6.address);
  const phoneNumber = useSelector((state) => state.createJobForm.dataFromChild6.phoneNumber);

  const getPriceRange = () => {
    if (priceFrom && priceTo) {
      return `${priceFrom}$-${priceTo}$`;
    } if (priceFrom) {
      return `${priceFrom}$`;
    }
    return '';
  };

  const handlePostJob = useCallback(async () => {
    const { data } = await Api.createJob({
      data: JSON.stringify(dataForRequest),
      jobImage: file,
    });
    console.log(data);
  }, [dataForRequest, file]);

  return (
    <div className="job-finally-all-box">
      <div className="job__display__row big__row">
        {fileSrc ? <img src={fileSrc} alt="job desc" className="job-image" /> : (
          <div className="selected-image finally-small">
            <img src={jobDefaultImg} alt="Selected" />
          </div>
        )}
        <img
          role="presentation"
          src={EditSvg}
          alt="edit-icon"
          className="profile__row__svg"
          onClick={() => {
            editCount(null, 1);
          }}
        />
      </div>
      {dataFromChild1 ? <p className="job__finally__title">{dataFromChild1}</p> : null}
      <div className="job__display__row">
        <p className="job__finally-price">
          {selectedMethod}
          <span className="job__finally-price prices">
            {maxPrice ? `${maxPrice}$` : getPriceRange()}
          </span>
        </p>
      </div>
      <div className="job__display__row">
        <div className="job-finally-skills">
          <p className="job-finally-skill-title">SKILLS</p>
          {
            dataFromChild2?.map((e) => (
              <span
                key={e.id}
                className="job-finally-skill-desc"
              >
                {e.skill}
              </span>
            ))
          }

        </div>
      </div>
      <div className="job__display__row">
        <div>
          <span className="job-finally-skill-title">Scope</span>
          <span className="job-finally-skill-level">{dataFromChild3}</span>
        </div>
      </div>
      <div className="job__display__row">
        <div>
          <span className="job-finally-skill-title">Location</span>
          <span className="job-finally-skill-level">{`${address.country ?? ''} ${address.city ?? ''}`}</span>
        </div>
      </div>
      <div className="job__display__row">
        <div>
          <span className="job-finally-skill-title">Address</span>
          <span className="job-finally-skill-level">{address.fullAddress}</span>
        </div>
      </div>
      <div className="job__display__row">
        <div>
          <span className="job-finally-skill-title">Bio</span>
          <p className="job-finally-skill-level">{dataFromChild5}</p>
        </div>
      </div>
      <div className="job__display__row">
        <div>
          <span className="job-finally-skill-title">Phone Number</span>
          <span className="job-finally-skill-level">{phoneNumber}</span>
        </div>
      </div>
      <div className="job-finally-buttons-box">
        <div>
          <Button className="btn color-blue" title="Save as a Draft" />
        </div>
        <div role="presentation" onClick={handlePostJob}>
          <Button className="btn color-blue" title="Post This Job" />
        </div>
      </div>
    </div>
  );
}
CreateJobFinally.propTypes = {
  file: PropTypes.instanceOf(File),
  editCount: PropTypes.func.isRequired,
};

CreateJobFinally.defaultProps = {
  file: null,
};
export default CreateJobFinally;
