import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Autocomplete from 'react-google-autocomplete';
import { useDispatch, useSelector } from 'react-redux';
import Wrapper from '../layouts/Wrapper';
import HomeJob from '../components/Home-job';
import JoinImg from '../assets/images/homejoin.svg';
import seeJobs from '../assets/images/seeJobs.svg';
import jobFind from '../assets/images/jobFind.svg';
import createProfile from '../assets/images/createProfile.svg';
// import Button from '../components/Button';
import JobLocationIcon from '../assets/images/home_location_icon.svg';
import SearchIcon from '../assets/images/Search_Icon.svg';
import JobHiring from '../layouts/Job_hiring';
import { homePageCoordinates } from '../store/actions/app';
import { getRandomJobs, getRandomUsers } from '../store/actions/users';

function Home() {
  const mapKey = process.env.REACT_APP_MAP_SECRET;

  useEffect(() => {
    const currentPath = window.location.pathname;
    console.log(currentPath);
    if (currentPath === '/') {
      window.history.pushState(null, null, currentPath);
    }
  }, []);
  const [randomJobs, setRandomJobs] = useState([]);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const profile = useSelector((state) => state.users.profile);
  const dispatch = useDispatch();
  const [searchJobAddress, setSearchJobAddress] = useState({
    city: '',
  });

  const [address, setAddress] = useState({
    lat: '',
    lng: '',
  });
  const handleSubmit = useCallback((ev) => {
    ev.preventDefault();
    dispatch(homePageCoordinates(address));
    navigate(`/offer/map?city=${searchJobAddress.city}`);
  }, [searchJobAddress]);

  const handlePlaceSelect = (place) => {
    try {
      const { lat, lng } = place.geometry.location;
      const addressComponents = place.address_components;
      let city = '';
      for (let i = 0; i < addressComponents?.length; i += 1) {
        const component = addressComponents[i];
        const componentType = component.types[0];
        if (componentType === 'locality') {
          city = component.long_name;
        }
      }
      setSearchJobAddress({
        city,
      });
      setAddress({
        lat: lat(),
        lng: lng(),
      });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    let fetchData;

    if (profile.role === 'employee') {
      fetchData = async () => {
        try {
          const { payload } = await dispatch(getRandomJobs());
          setRandomJobs(payload.randomJobs);
        } catch (e) {
          console.error(e);
        }
      };
    } else {
      fetchData = async () => {
        try {
          const { payload } = await dispatch(getRandomUsers());
          setRandomJobs(payload.randomUsers);
        } catch (e) {
          console.error(e);
        }
      };
    }

    fetchData();
  }, [profile.role]);
  return (
    <Wrapper>
      <section className="join">
        <div className="container">
          <div className="join__row">
            <div className="join__content">
              <div className="join__left">
                <h1 className="join__left__title">
                  {t('join_left_title')}
                </h1>
                <p className="join__left__text">
                  {t('join_left_text')}
                </p>
                {/* <div className="join__left__block join-block"> */}
                {/*   <Button className="join-block__btn1" title={t('join_block_btn1')} /> */}
                {/*   <Button */}
                {/*     className="join-block__btn2" */}
                {/*     title={t('join_block_btn2' */}
                {/*     + '')} */}
                {/*   /> */}
                {/* </div> */}
              </div>
              <div className="join__right">
                <img className="join__right__img" src={JoinImg} alt="" />
              </div>
            </div>
            <div className="join__bottom">
              <h3 className="join__bottom__title">{t('join_bottom_title')}</h3>
              <form className="join__bottom__form" onSubmit={(ev) => handleSubmit(ev)}>
                <label htmlFor="input-city" className="join__bottom__form__label">
                  <img className="join__bottom__form__icon" src={JobLocationIcon} alt="" />
                  <Autocomplete
                    placeholder={t('header_search_input')}
                    className="join__bottom__form__city"
                    apiKey={mapKey}
                    onPlaceSelected={handlePlaceSelect}
                    language="en"
                    options={{
                      componentRestrictions: { country: 'am' },
                      types: ['geocode', 'establishment'],
                    }}
                  />
                </label>
                <button type="submit" className="join__bottom__form__button">
                  <img className="join__bottom__form__button__icon" src={SearchIcon} alt="" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <JobHiring randomJobs={randomJobs} />
      <section className="information">
        <HomeJob rowReverse="" firstText={t('home_job_first_text_first')} secondText={t('home_job_first_text_second')} buttonTxt={t('home_job_first_text_button')} img={jobFind} />
        <HomeJob rowReverse="row" firstText={t('home_job_second_text_first')} secondText={t('home_job_second_text_second')} buttonTxt={t('home_job_second_text_button')} img={seeJobs} />
        <HomeJob rowReverse="" firstText={t('home_job_third_text_first')} secondText={t('home_job_third_text_second')} buttonTxt={t('home_job_second_text_button')} img={createProfile} />
      </section>
    </Wrapper>
  );
}

export default Home;
