import React, { useCallback, useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import CvIcon from '../assets/images/CV-Link.svg';
import ProfileIcon from '../assets/images/Profile-pic-profile.svg';

function ProfileEditModal() {
  const [selectedPhoto, setSelectedPhoto] = useState({
    fileSrc: '',
    file: null,
  });
  // const inputRef = useRef(null);

  const handleFileSelect = useCallback((ev) => {
    if (!ev.target.files[0]) {
      return;
    }
    const fileSrc = URL.createObjectURL(ev.target.files[0]);
    setSelectedPhoto({ fileSrc, file: ev.target.files[0] });
  }, [selectedPhoto]);

  const handleDeleteAvatar = useCallback(() => {
    // inputRef.current.value = '';
    URL.revokeObjectURL(selectedPhoto.fileSrc);
    setSelectedPhoto({ fileSrc: '', file: null });
  }, [selectedPhoto]);
  return (
    <form className="modal-editInfo">
      <div className="modal-editInfo__global">
        <div className="modal-editInfo__global__info">
          <span className="modal-editInfo__global__info__title">Name*</span>
          <input placeholder="Name" className="modal-editInfo__global__info__input" type="text" />
        </div>
        <div className="modal-editInfo__global__info">
          <span className="modal-editInfo__global__info__title">Surname*</span>
          <input placeholder="Surname" className="modal-editInfo__global__info__input" type="text" />
        </div>
      </div>
      <div className="modal-editInfo__global">
        <div className="modal-editInfo__global__info">
          <span className="modal-editInfo__global__info__title">Add Skills*</span>
          <input placeholder="Skills" className="modal-editInfo__global__info__input" type="text" />
        </div>
        <div className="modal-editInfo__global__info">
          <span className="modal-editInfo__global__info__title">Location*</span>
          <input placeholder="Location" className="modal-editInfo__global__info__input" type="text" />
        </div>
      </div>
      <div className="modal-editInfo__global">
        <div className="modal-editInfo__global__info">
          <span className="modal-editInfo__global__info__title">Add Education*</span>
          <input placeholder="Education" className="modal-editInfo__global__info__input" type="text" />
        </div>
        <div className="modal-editInfo__global__info">
          <span className="modal-editInfo__global__info__title">Subject*</span>
          <input placeholder="Subject" className="modal-editInfo__global__info__input" type="text" />
        </div>
      </div>
      <div className="modal-editInfo__global">
        <div className="modal-editInfo__global__info">
          <span className="modal-editInfo__global__info__title">Profession*</span>
          <input placeholder="Profession*" className="modal-editInfo__global__info__input" type="text" />
        </div>
        <div className="modal-editInfo__global__info">
          <span className="modal-editInfo__global__info__title">Languages*</span>
          <input placeholder="Languages" className="modal-editInfo__global__info__input" type="text" />
        </div>
      </div>
      <div className="modal-editInfo__global">
        <div className="modal-editInfo__global__info for-phone">
          <span className="modal-editInfo__global__info__title title-for-phone">Phone Number*</span>
          <PhoneInput
              // onChange={(value) => {
              //   setPhoneNumber(value);
              //   setFormData({
              //     ...formData,
              //     phone: `+${value}`,
              //   });
              // }}
            country="am"
              // value={phone}
            placeholder="+(374)-00-00-00"
            dropdownClass="custom-phone-dropdown-profile"
            inputProps={{
              className: 'signup__start__form__select__phone phone-color',
            }}
          />
        </div>
      </div>
      <div className="modal-editInfo__global modal-editInfo-for-links">
        <div className="modal-editInfo__global__info">
          <span className="modal-editInfo__global__info__title">CV Link*</span>
          <label htmlFor="cv-link-profile" className="modal-editInfo__global__info__label">
            <img src={CvIcon} alt="IMG" className="modal-editInfo__global__info__label__img" />
            <input
              id="cv-link-profile"
              style={{ display: 'none' }}
              type="file"
            />
          </label>
        </div>
        <div className="modal-editInfo__global__info">
          <span className="modal-editInfo__global__info__title">Profile Pic*</span>
          {selectedPhoto.file
            ? (
              <div className="modal-editInfo__global__info__imgBox">
                <div className="signup__start__form__img__box__imgBox__btn " onClick={handleDeleteAvatar} role="presentation" />
                <img src={selectedPhoto.fileSrc} alt="IMG" className="modal-editInfo__global__info__imgBox__img" />
              </div>
            )

            : (
              <label htmlFor="profile-pic" className="modal-editInfo__global__info__label">
                <img src={ProfileIcon} alt="IMG" className="modal-editInfo__global__info__label__img" />
                <input
                  onChange={handleFileSelect}
                  id="profile-pic"
                  style={{ display: 'none' }}
                  type="file"
                />
              </label>
            )}
        </div>
      </div>
      <button type="submit" className="modal-editInfo__btn">Save</button>
    </form>
  );
}

export default ProfileEditModal;
