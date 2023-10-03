import React, { useCallback, useEffect, useState } from 'react';
import Select from 'react-select';
import Autocomplete from 'react-google-autocomplete';
import PhoneInput from 'react-phone-input-2';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import IndicatorsArrows from './IndicatorsArrows';
import jobDefaultImg from '../assets/images/job-image-default.svg';
import { getCountries } from '../store/actions/utils';

function CreateCvSeventh(props) {
  const sixtyFormObj = useSelector((state) => state.createCvForm.dataFromChild7) ?? {};
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      fontFamily: 'Lato,sans-serif',
      paddingLeft: 5,
      paddingRight: 15,
      color: 'rgba(3, 16, 84, 0.50)',
      width: 415,
      height: 37,
      border: state.isFocused ? 0 : 0,
      borderRadius: 8,
      background: '#fff',
      outline: 'none',
      marginBottom: 15,
      boxShadow: 'none',
      '&:hover': {
        borderColor: 'rgba(3, 16, 84, 0.70)',
      },
      '&:focus': {
        borderColor: 'rgba(3, 16, 84, 0.90)',
        boxShadow: 'none',
      },
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? '#FFF' : '#333',
      background: state.isSelected ? 'rgba(3, 16, 84, 0.50)' : null,
      cursor: 'pointer',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'rgba(3, 16, 84, 0.70)',
    }),
    placeholder: (defaultStyles) => ({
      ...defaultStyles,
      color: 'rgba(3 16, 84, 0.50)',
      fontSize: 14,
    }),
    menu: (provided) => ({
      ...provided,
      color: 'red',
      zIndex: 999999999999999,
    }),
  };
  const dispatch = useDispatch();
  const { onData } = props;
  // fileSrc for render file for request
  const [selectedPhoto, setSelectedPhoto] = useState({
    fileSrc: sixtyFormObj.selectedPhoto || '',
    file: null,
  });
  const countries = useSelector((state) => state.utils.countries) || [];
  const [selectCountry, setSelectCountry] = useState(sixtyFormObj.selectCountry || '');
  const [address, setAddress] = useState({
    latitude: '',
    longitude: '',
    fullAddress: '',
    location: '',
  });
  const [phoneNumber, setPhoneNumber] = useState(sixtyFormObj.phoneNumber ?? '');
  useEffect(() => {
    onData({
      dataFromChild7: {
        selectCountry,
        address,
        selectedPhoto: selectedPhoto.fileSrc,
        phoneNumber,
      },
    }, selectedPhoto.file);
  }, [selectCountry, address, selectedPhoto, phoneNumber]);
  useEffect(() => {
    dispatch(getCountries());
  }, []);
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
  const handleFileSelect = useCallback(async (ev) => {
    if (ev.target.files[0]) {
      console.log(ev.target.files);
      const newFile = URL.createObjectURL(ev.target.files[0]);
      setSelectedPhoto({ fileSrc: newFile, file: ev.target.files[0] });
    }
  }, [selectedPhoto]);

  return (
    <div className="job__form__container__sixth" style={{ zIndex: 777777 }}>
      <div>
        <h4 className="create__job__title sixth-title">Describe Your Job</h4>
        {selectedPhoto.fileSrc ? <img src={selectedPhoto.fileSrc} alt="job desc" className="job-image" /> : (
          <div className="selected-image">
            <img src={jobDefaultImg} alt="Selected" />
          </div>
        )}
        <label htmlFor="job-id-input" className="job-image-label">
          <div className="label-container-sixth">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M15 9.75H9.75V15H8.25V9.75H3V8.25H8.25V3H9.75V8.25H15V9.75Z" fill="white" />
            </svg>
            <span className="label-desc-sixth">Upload a Picture</span>
          </div>
          <input type="file" id="job-id-input" onChange={handleFileSelect} className="job-image-input" />
        </label>
      </div>
      <div className="options-row-sixth">
        <div>
          <p className="sixth-labels-desc">
            Country*
          </p>
          <Select
            placeholder="Select County"
            options={countries}
            value={countries.find((country) => country.value === selectCountry)}
            onChange={(e) => setSelectCountry(e.value)}
            styles={customStyles}
            className="signup__start__form__select"
            classNamePrefix="signup__start__form__select"
            components={{
              IndicatorsContainer: IndicatorsArrows,
            }}
          />
        </div>
        <div>
          <p className="sixth-labels-desc">
            Street Address* (won’t show on profile)
          </p>
          <Autocomplete
            placeholder="Write your address"
            className="signup__start__form__input"
            apiKey="AIzaSyDgzO2lx8X_g2p2q0U9xCB5PkpELNNnzgM"
            onPlaceSelected={handlePlaceSelect}
            options={{
              language: 'en',
              componentRestrictions: { country: 'am' },
              types: ['geocode', 'establishment'],
            }}
          />

        </div>
        <div>
          <p className="sixth-labels-desc">Phone</p>
          <PhoneInput
            onChange={(value) => {
              setPhoneNumber(`+${value}`);
            }}
            buttonClass="dropdown-flag-item"
            inputClass="signup__start__form__select__phone"
            country={selectCountry || 'am'}
            value={phoneNumber}
            dropdownClass="custom-phone-dropdown"
            inputProps={{
              // dropdownClass: 'custom-phone-dropdown',
              className: 'signup__start__form__select__phone',
            }}
          />
        </div>
        <div />
      </div>
    </div>
  );
}

CreateCvSeventh.propTypes = {
  onData: PropTypes.func.isRequired,
};

export default CreateCvSeventh;
