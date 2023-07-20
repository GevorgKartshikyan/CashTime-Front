import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import PhoneInput from 'react-phone-input-2';
import Autocomplete from 'react-google-autocomplete';
import jobDefaultImg from '../assets/images/job-image-default.svg';
import IndicatorsArrows from '../components/IndicatorsArrows';
import customStyles from '../utils/selectCustomStyles';
import countyList from '../utils/countyList';

function CreateJobSixth() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [error, setError] = useState('');
  const [countries, setCountries] = useState([]);
  const [selectCountry, setSelectCountry] = useState('');
  const [address, setAddress] = useState({
    latitude: '',
    longitude: '',
  });
  const [phoneNumber, setPhoneNumber] = useState('');
  useEffect(() => {
    const getCountries = async () => {
      const countriesData = await countyList();
      setCountries(countriesData);
    };
    getCountries();
  }, []);
  const handlePlaceSelect = (place) => {
    const { lat, lng } = place.geometry.location;
    console.log('Latitude:', lat());
    console.log('Longitude:', lng());
    setAddress({
      latitude: lat(),
      longitude: lng(),
    });
  };

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/webp', 'image/bmp', 'image/tiff'];

    if (file && allowedTypes.includes(file.type)) {
      reader.onload = (e) => {
        setSelectedPhoto(e.target.result);
      };

      reader.readAsDataURL(file);
    } else {
      setSelectedPhoto(null);
      setError('only image');
    }
  };

  console.log(address, selectCountry, phoneNumber);
  return (
    <div className="job__form__container__sixth">
      <div>
        <h4 className="create__job__title sixth-title">Describe Your Job</h4>
        {selectedPhoto ? <img src={selectedPhoto} alt="job desc" className="job-image" /> : (
          <div className="selected-image">
            <img src={jobDefaultImg} alt="Selected" />
          </div>
        )}
        {error ? <p>{error}</p> : null}
        <label htmlFor="job-id-input" className="job-image-label">
          <div className="label-container-sixth">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M15 9.75H9.75V15H8.25V9.75H3V8.25H8.25V3H9.75V8.25H15V9.75Z" fill="white" />
            </svg>
            <span className="label-desc-sixth">Upload a Picture</span>
          </div>
          <input type="file" id="job-id-input" onChange={handlePhotoChange} className="job-image-input" />
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
            types={['address']}
          />
        </div>
        <div>
          <p className="sixth-labels-desc">Phone</p>
          <PhoneInput
            onChange={(value) => {
              setPhoneNumber(`+${value}`);
            }}
            country="am"
            value={phoneNumber}
            placeholder="+(374)-00-00-00"
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

export default CreateJobSixth;
