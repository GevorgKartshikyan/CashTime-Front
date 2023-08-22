import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import jobDefaultImg from '../assets/images/job-image-default.svg';
import EditSvg from '../assets/images/edit.svg';

function CreateCvFinally(props) {
  const dataFromChild1 = useSelector((state) => state.createCvForm.dataFromChild1);
  const dataFromChild2 = useSelector((state) => state.createCvForm.dataFromChild2);
  const dataFromChild3 = useSelector((state) => state.createCvForm.dataFromChild3);
  const dataFromChild5 = useSelector((state) => state.createCvForm.dataFromChild5);
  const dataFromChild6 = useSelector((state) => state.createCvForm.dataFromChild6);
  const dataFromChild7 = useSelector((state) => state.createCvForm.dataFromChild7);
  console.log('data1', dataFromChild1, 'data2', dataFromChild2, 'data3', dataFromChild3, 'data5', dataFromChild5, 'data6', dataFromChild6, 'data7', dataFromChild7);
  const { file, editCount } = props;
  const [dataForRequest, setDataForRequest] = useState({});
  const dataForUpdate = useSelector((state) => state.createCvForm);
  useEffect(() => {
    setDataForRequest({ ...dataForUpdate, file });
  }, [dataForUpdate, file]);
  console.log(dataForRequest);
  const fileSrc = useSelector((state) => state.createCvForm.dataFromChild7.selectedPhoto);

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
      {dataFromChild1.professionValue ? <p className="job__finally__title">{dataFromChild1.professionValue}</p> : null}
      <div className="job__display__row">
        <p className="job__finally-price">
          <span className="job__finally-price prices">
            {dataFromChild6.sixthData.rateSum ? `${dataFromChild6.sixthData.rateSum}$/hr` : null}
          </span>
        </p>
      </div>
      <div className="job__display__row">
        <div>
          <span className="job-finally-skill-title">Category</span>
        </div>
        <div>
          <span className="job-finally-skill-level">{dataFromChild6.sixthData.category}</span>
        </div>
      </div>
      <div className="job__display__row">
        <div className="job-finally-skills">
          <p className="job-finally-skill-title">SKILLS</p>
          <div className="job-finally-skill-block">
            {
              dataFromChild3.map((e) => (
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
      </div>
      <div className="job__display__row">
        <div>
          <span className="job-finally-skill-title">Location</span>
        </div>
        <div>
          <p
            className="job-finally-skill-level"
          >
            {`${dataFromChild7.address.country ?? ''}
          ${dataFromChild7.address.city ?? ''}`}
          </p>
        </div>
      </div>
      <div className="job__display__row">
        <div>
          <span className="job-finally-skill-title">Education</span>
        </div>
        <div>
          <p className="job-finally-skill-level">
            {`${dataFromChild2.educationHistory.degree}`}
            {dataFromChild2.educationHistory.school ? `(${dataFromChild2.educationHistory.school})` : null }
          </p>
        </div>
      </div>
      <div className="job__display__row">
        <div>
          <span className="job-finally-skill-title">Languages</span>
        </div>
        <div>
          {dataFromChild1.languages.map((e) => (
            <p className="job-finally-skill-level">
              {`${e.language}`}
              { e.level ? `(${e.level})` : null }
            </p>
          ))}
        </div>
      </div>
      <div className="job__display__row">
        <div>
          <span className="job-finally-skill-title">Bio</span>
        </div>
        <div>
          <p className="job-finally-skill-level">{dataFromChild5.cvBio}</p>
        </div>
      </div>
      <div className="job__display__row">
        <div>
          <span className="job-finally-skill-title">Address</span>
        </div>
        <div>
          <p className="job-finally-skill-level">{dataFromChild7.address.fullAddress}</p>
        </div>
      </div>
      <div className="job__display__row">
        <div>
          <span className="job-finally-skill-title">Phone Number</span>
        </div>
        <div>
          <p className="job-finally-skill-level">{dataFromChild7.phoneNumber}</p>
        </div>
      </div>
      {/* <div className="job-finally-buttons-box"> */}
      {/*   <div> */}
      {/*     <Button className="btn color-blue" title="Save as a Draft" /> */}
      {/*   </div> */}
      {/*   <div> */}
      {/*     <Button className="btn color-blue" title="Post This Job" /> */}
      {/*   </div> */}
      {/* </div> */}
    </div>
  );
}

CreateCvFinally.propTypes = {
  file: PropTypes.instanceOf(File),
  editCount: PropTypes.func.isRequired,
};

CreateCvFinally.defaultProps = {
  file: null,
};

export default CreateCvFinally;
