import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import EditSvg from '../assets/images/edit.svg';
import jobDefaultImg from '../assets/images/job-image-default.svg';
import Button from '../components/Button';
import { createJobRequestFromPending } from '../store/actions/jobsRequest';
import LoadingFile from './LoadingFile';

function CreateJobFinally(props) {
  const { file, editCount } = props;
  const dispatch = useDispatch();
  const [dataForRequest, setDataForRequest] = useState({});
  const dataForUpdate = useSelector((state) => state.createJobForm);
  useEffect(() => {
    setDataForRequest({ ...dataForUpdate, file });
  }, [dataForUpdate, file]);
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
  const jobStatus = useSelector((state) => state.jobsRequest.status);
  const getPriceRange = () => {
    if (priceFrom && priceTo) {
      return `${priceFrom}$-${priceTo}$`;
    } if (priceFrom) {
      return `${priceFrom}$`;
    }
    return '';
  };
  // console.log(jobStatus);
  const navigate = useNavigate();
  const handlePostJob = useCallback(async () => {
    const { payload } = await dispatch(createJobRequestFromPending({
      data: JSON.stringify(dataForRequest),
      jobImage: file,
    }));
    console.log(payload);
    // validate
    if (payload?.status === 'ok') {
      navigate('/');
    }
  }, [dataForRequest, file]);
  if (jobStatus === 'pending') {
    return <LoadingFile />;
  }
  console.log(dataForRequest);
  return (
    <div>
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
          <div>
            <p className="job__finally-price">
              {selectedMethod}

            </p>
          </div>
          <div>
            <span className="job__finally-price prices">
              {maxPrice ? `${maxPrice}$` : getPriceRange()}
            </span>
          </div>
        </div>
        <div className="job__display__row">
          <p className="job-finally-skill-title">SKILLS</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
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
          </div>
          <div>
            <span className="job-finally-skill-level">{dataFromChild3}</span>
          </div>
        </div>
        <div className="job__display__row">
          <div>
            <span className="job-finally-skill-title">Location</span>
          </div>
          <div>
            <span className="job-finally-skill-level">{`${address.country ?? ''} ${address.city ?? ''}`}</span>
          </div>
        </div>
        <div className="job__display__row">
          <div>
            <span className="job-finally-skill-title">Address</span>
          </div>
          <div>
            <span className="job-finally-skill-level">{address.fullAddress}</span>
          </div>
        </div>
        <div style={{ flexDirection: 'column' }} className="job__display__row">
          <div>
            <span className="job-finally-skill-title">Bio</span>
          </div>
          <div style={{ position: 'relative', width: '100%' }}>
            <p className="job-finally-skill-level">{dataFromChild5}</p>
          </div>
        </div>
        <div className="job__display__row">
          <div>
            <span className="job-finally-skill-title">Phone Number</span>
          </div>
          <div>
            <span className="job-finally-skill-level">{phoneNumber}</span>
          </div>
        </div>
        <div className="job-finally-buttons-box">
          <div role="presentation" onClick={handlePostJob}>
            <Button className="btn color-blue" title="Post This Job" />
          </div>
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
