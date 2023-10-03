import React, { useCallback, useState } from 'react';
import Autocomplete from 'react-google-autocomplete';
import PhoneInput from 'react-phone-input-2';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { editProfile } from '../store/actions/users';
import CvIcon from '../assets/images/CV-Link.svg';
import ProfileIcon from '../assets/images/Profile-pic-profile.svg';
import ProfileSelectVector from './ProfileSelectVector';

const mapKey = process.env.REACT_APP_MAP_SECRET;

function ProfileEditModal({
  skills: profileSkills, language: profilelanguage, profile, profileCV, modalFlag,
}) {
  const [selectedPhoto, setSelectedPhoto] = useState({
    fileSrc: '',
    file: null,
  });
  const [userName, setUserName] = useState('' || profile.firstName);
  const [surname, setSurname] = useState('' || profile.lastName);
  const [skills, setSkills] = useState('');
  const [addSkill, setAddSkill] = useState(profileSkills || []);
  const [education, setEducation] = useState('' || profileCV.school);
  const [subject, setSubject] = useState('' || profileCV.degree);
  const [address, setAddress] = useState({
    latitude: '',
    longitude: '',
    fullAddress: '',
    location: '',
  });
  const [languages, setLanguages] = useState('');
  const [addLanguages, setAddLanguages] = useState(profilelanguage ? [...profilelanguage] : []);
  const [phoneNumber, setPhoneNumber] = useState('' || profile.phone || profileCV.phoneNumber);
  const options = [
    { value: 'beginner', label: 'Beginner(Level A1)' },
    { value: 'intermediate', label: 'Intermediate(Level B1)' },
    { value: 'upper-intermediate', label: 'Upper-Intermediate(Level B2)' },
    { value: 'advanced', label: 'Advanced(Level C1)' },
    { value: 'mastery', label: 'Mastery(Level C2)' },
  ];
  const optionsProfession = [
    {
      value: 'House Cleaner',
      label: 'House Cleaner',
    },
    {
      value: 'Driver',
      label: 'Driver',
    },
    {
      value: 'Software Engineer',
      label: 'Software Engineer',
    },
    {
      value: 'Web Developer',
      label: 'Web Developer',
    },
    {
      value: 'UI UX designer',
      label: 'UI UX designer',
    },
  ];
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [selectedOptionProfession, setSelectedOptionProfession] = useState(
    optionsProfession.filter((e) => e.value === profileCV.experience)[0],
  );
  const dispatch = useDispatch();
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

  const handleAddSkill = useCallback(() => {
    if (skills.split(' ').join('')?.length !== 0) {
      setAddSkill([...addSkill, { skill: skills, id: uuidv4() }]);
    }
    setSkills('');
  }, [addSkill, skills]);
  const handleAddLanguage = useCallback(() => {
    if (languages.split(' ').join('')?.length !== 0) {
      setAddLanguages([...addLanguages,
        { id: uuidv4(), level: selectedOption, language: languages }]);
    }
    setLanguages('');
  }, [selectedOption, languages, addLanguages]);
  const handlePlaceSelect = (place) => {
    try {
      const { lat, lng } = place.geometry.location;
      const addressComponents = place.address_components;
      let country = '';
      let city = '';
      for (let i = 0; i < addressComponents?.length; i += 1) {
        const component = addressComponents[i];
        const componentType = component.types[0];
        if (componentType === 'country') {
          country = component.long_name;
        } else if (componentType === 'locality') {
          city = component.long_name;
        }
      }
      setAddress({
        latitude: lat(),
        longitude: lng(),
        fullAddress: place.formatted_address,
        country,
        city,
      });
    } catch (e) {
      console.error(e);
    }
  };

  const handleSendNewInfo = useCallback((ev) => {
    ev.preventDefault();
    dispatch(editProfile({
      userName,
      surname,
      addSkill,
      education,
      subject,
      address,
      addLanguages,
      phoneNumber,
      profession: selectedOptionProfession || { label: '' },
      avatar: selectedPhoto.file,
    }));
    modalFlag(false);
    document.body.style.overflowY = 'auto';
  }, [
    userName,
    surname,
    addSkill,
    education,
    subject,
    address,
    addLanguages,
    phoneNumber,
    selectedOptionProfession,
    selectedPhoto.file,
  ]);

  const handleChange = (selected) => {
    setSelectedOption(selected.value);
  };

  const handleChangeProfession = (selected) => {
    setSelectedOptionProfession(selected);
  };

  const customStylesProfession = {
    control: (provided, state) => ({
      ...provided,
      fontFamily: 'Lato,sans-serif',
      // padding: 0 25,
      // paddingLeft: 10,
      paddingRight: 5,
      color: '#031054',
      // width: 100%,
      height: -100000,
      marginTop: 5,
      marginBottom: 15,
      border: state.isFocused ? 0 : 0,
      borderRadius: 6,
      background: '#D9D9D9',
      outline: 'none',
      boxShadow: 'none',
      '&:hover': {
        color: 'rgba(3, 16, 84, 0.90)',
        borderColor: '#D9D9D9',
      },
      '&:focus': {
        color: 'rgba(3, 16, 84, 0.90)',
        borderColor: 'rgba(3, 16, 84, 0.90)',
        boxShadow: 'none',
      },
    }),
    option: (provided, state) => ({
      ...provided,
      color: '#031054',
      background: state.isSelected ? '#D9D9D9' : null,
      cursor: 'pointer',
    }),
    placeholder: (defaultStyles) => ({
      ...defaultStyles,
      color: '#031054',
      fontSize: 14,
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'rgba(3, 16, 84, 0.90', // Specify the color for the selected value
    }),

  };
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      fontFamily: 'Lato,sans-serif',
      // padding: 0 25,
      // paddingLeft: 10,
      paddingRight: 5,
      color: '#031054',
      width: 205,
      height: -100000,
      marginTop: 5,
      marginBottom: 15,
      border: state.isFocused ? 0 : 0,
      borderRadius: 6,
      background: '#D9D9D9',
      outline: 'none',
      boxShadow: 'none',
      '&:hover': {
        color: 'rgba(3, 16, 84, 0.90)',
        borderColor: '#D9D9D9',
      },
      '&:focus': {
        color: 'rgba(3, 16, 84, 0.90)',
        borderColor: 'rgba(3, 16, 84, 0.90)',
        boxShadow: 'none',
      },
    }),
    option: (provided, state) => ({
      ...provided,
      color: '#031054',
      background: state.isSelected ? '#D9D9D9' : null,
      cursor: 'pointer',
    }),
    placeholder: (defaultStyles) => ({
      ...defaultStyles,
      color: '#031054',
      fontSize: 14,
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'rgba(3, 16, 84, 0.90', // Specify the color for the selected value
    }),

  };
  return (
    <form className="modal-editInfo" onSubmit={handleSendNewInfo}>
      <div className="modal-editInfo__global">
        <div className="modal-editInfo__global__info">
          <span className="modal-editInfo__global__info__title">Name*</span>
          <input onChange={(e) => setUserName(e.target.value)} value={userName} placeholder="Name" className="modal-editInfo__global__info__input" type="text" />
        </div>
        <div className="modal-editInfo__global__info">
          <span className="modal-editInfo__global__info__title">Surname*</span>
          <input onChange={(e) => setSurname(e.target.value)} value={surname} placeholder="Surname" className="modal-editInfo__global__info__input" type="text" />
        </div>
      </div>
      <div className="modal-editInfo__global">
        <div className="modal-editInfo__global__info for-position-edit">
          <span className="modal-editInfo__global__info__title">Add Skills*</span>
          <input
            onChange={(e) => setSkills(e.target.value)}
            value={skills}
            placeholder="Skills"
            className="modal-editInfo__global__info__input"
            type="text"
          />
          <button onClick={handleAddSkill} className="for-position-edit__btn" type="button">+</button>
        </div>
        <div className="modal-editInfo__global__info">
          <span className="modal-editInfo__global__info__title">Location*</span>
          <Autocomplete
            placeholder="Location"
            className="modal-editInfo__global__info__input"
            apiKey={mapKey}
            onPlaceSelected={handlePlaceSelect}
            language="en"
            options={{
              componentRestrictions: { country: 'am' },
              types: ['geocode', 'establishment'],
            }}
          />
        </div>
      </div>
      <div className="modal-editInfo__global">
        <div className="modal-editInfo__global__info">
          <span className="modal-editInfo__global__info__title">Add Education*</span>
          <input onChange={(e) => setEducation(e.target.value)} value={education} placeholder="Education" className="modal-editInfo__global__info__input" type="text" />
        </div>
        <div className="modal-editInfo__global__info">
          <span className="modal-editInfo__global__info__title">Subject*</span>
          <input onChange={(e) => setSubject(e.target.value)} value={subject} placeholder="Subject" className="modal-editInfo__global__info__input" type="text" />
        </div>
      </div>
      <div className="modal-editInfo__global">
        <div className="modal-editInfo__global__info">
          <span className="modal-editInfo__global__info__title">Language Level*</span>
          <Select
            placeholder="language level"
            className="profile-edit-select"
            options={options}
            value={options.find((e) => e.value === selectedOption)}
            defaultValue={options[0]}
            onChange={handleChange}
            styles={customStyles}
            isSearchable={false}
            components={{
              IndicatorsContainer: ProfileSelectVector,
            }}
          />
        </div>
        <div className="modal-editInfo__global__info for-position-edit">
          <span className="modal-editInfo__global__info__title">Languages*</span>
          <input onChange={(e) => setLanguages(e.target.value)} value={languages} placeholder="Languages" className="modal-editInfo__global__info__input" type="text" />
          <button onClick={handleAddLanguage} className="for-position-edit__btn" type="button">+</button>
        </div>
      </div>
      <div className="modal-editInfo__global">
        <div className="modal-editInfo__global__info  profile-edit-select-profession">
          <span className="modal-editInfo__global__info__title">Profession*</span>
          <Select
            placeholder="Profession"
            className="profile-edit-select"
            options={optionsProfession}
            value={selectedOptionProfession}
            onChange={handleChangeProfession}
            styles={customStylesProfession}
            isSearchable={false}
            components={{
              IndicatorsContainer: ProfileSelectVector,
            }}
          />
        </div>
      </div>
      <div className="modal-editInfo__global">
        <div className="modal-editInfo__global__info for-phone">
          <span className="modal-editInfo__global__info__title title-for-phone">Phone Number*</span>
          <PhoneInput
            onChange={(value) => {
              setPhoneNumber(value);
            }}
            value={phoneNumber}
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
