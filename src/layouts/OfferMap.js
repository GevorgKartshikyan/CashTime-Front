import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import TestInput from '../components/TestInput';
import GlobalMap from '../pages/GlobalMap';
import { ReactComponent as SearchIcon } from '../assets/images/offer_filter_search.svg';
import { jobListFromUsersMap } from '../store/actions/jobsRequest';

function OfferMap({ isLoaded }) {
  const navigate = useNavigate();
  const [coordinates, setCoordinates] = useState({
    lat: 40.791235,
    lng: 43.848753,
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const city = searchParams.get('city') || 'Gyumri';
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobsRequest.jobListFromUsers);
  useEffect(() => {
    dispatch(jobListFromUsersMap({ city }));
  }, [city]);
  return (
    <>
      <div className="container">
        <div className="offer__top offer__top-map">
          {/* <FilterIcon /> */}
          <div className="offer__top__search">
            <label className="labeltest" htmlFor="offer-search">
              <SearchIcon className="offer__top__search__icon" />
              <TestInput setCoordinates={setCoordinates} changeCity={setSearchParams} isLoaded={isLoaded} classInput="offer__top__search__input" />
            </label>
          </div>
          <div className="offer__top__block offer-top-block">

            <button
              className="offer__top__block__list active__btn"
              type="button"
            >
              Map
            </button>
            <button
              onClick={() => navigate('/offer/list')}
              className="offer__top__block__list"
              type="button"
            >
              List
            </button>
          </div>
        </div>
      </div>
      <div className="map-box-offer__map ">
        <div className="map-box-offer__map__container">
          <GlobalMap
            jobs={jobs}
            isLoaded={isLoaded}
            coordinates={coordinates}
            setCoordinates={setCoordinates}
          />
        </div>
      </div>
    </>
  );
}

export default OfferMap;
