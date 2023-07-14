import React, { useState } from 'react';
import jobDefaultImg from '../assets/images/job-image-default.svg';

function CreateJobSixth() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setSelectedPhoto(e.target.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  console.log(selectedPhoto);
  return (
    <div className="job__form__container">
      <div className="image-container">
        <h4 className="create__job__title">Describe Your Job</h4>
        {selectedPhoto ? <img src={selectedPhoto} alt="job desc" className="job-image" /> : (
          <div className="selected-image">
            <img src={jobDefaultImg} alt="Selected" />
          </div>
        )}
        <label htmlFor="job-id-input" className="job-image-label">
          <div className="label-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M15 9.75H9.75V15H8.25V9.75H3V8.25H8.25V3H9.75V8.25H15V9.75Z" fill="white" />
            </svg>
            <span className="label-desc">Upload a Picture</span>
          </div>
          <input type="file" id="job-id-input" onChange={handlePhotoChange} className="job-image-input" />
        </label>
      </div>
    </div>
  );
}

export default CreateJobSixth;
