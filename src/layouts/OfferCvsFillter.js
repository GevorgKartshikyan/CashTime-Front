import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MapInputAutocomplete from '../components/MapInputAutocomplete';
import SearchIconZoom from '../assets/images/offer_search_magnifier_mobile ui_zoom_icon.svg';
import { ReactComponent as SearchIcon } from '../assets/images/offer_filter_search.svg';
import OfferCvsList from '../components/OfferCvsList';

function OfferJobsFilter({ isLoaded }) {
  const navigate = useNavigate();
  const [city, setCity] = useState('');
  const [data, setData] = useState({
    entryLevel: false,
    intermediate: false,
    expert: false,
    hourly: false,
    hourMin: 0,
    hourMax: 100000,
    // fixed: false,
    // salary_min: 0,
    // salary_max: 100000,
    profRole: '',
    location: city,
  });
  useEffect(() => {
    setData({ ...data, location: city });
  }, [city]);
  return (
    <div className="container">
      <div className="offer__top">
        {/* <FilterIcon /> */}
        <div className="offer__top__search">
          <label className="labeltest" htmlFor="offer-search">
            <SearchIcon className="offer__top__search__icon" />
            <MapInputAutocomplete
              pageType="CV"
              isLoaded={isLoaded}
              setCity={setCity}
              classInput="offer__top__search__input"
            />
          </label>
          <div className="offer__top__block">
            <button
              className="offer__top__block__map"
              type="button"
              onClick={() => navigate('/offer/map')}
            >
              Map
            </button>
            <button
              className="offer__top__block__list active__btn"
              type="button"
            >
              List
            </button>
          </div>
        </div>
      </div>
      <div className="offer__container">
        <div className="offer__container__left">
          <h2 className="offer__container__left__title">Filter By</h2>
          <hr className="offer-filter-line" />
          <div className="offer__container__left__experience">
            <div className="offer__container__left__experience__select">
              <h3 className="offer__container__left__experience__select__text">
                Experience
                level
              </h3>
            </div>
            <div className="offer__container__left__experience__options">
              <label
                htmlFor="experience-checkbox1"
                className="label"
              >
                <div
                  className="check-container small-check"
                  role="presentation"
                  onClick={() => setData({
                    ...data,
                    entryLevel: !data.entryLevel,
                  })}
                >
                  <span className="check-squad small-check__squad">
                    {data?.entryLevel
                      ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                        >
                          <path
                            d="M10.063 16.4L6.06299 12.4L7.46299 11L10.063 13.6L16.663 7L18.063 8.4L10.063 16.4Z"
                            fill="white"
                          />
                        </svg>
                      ) : null}
                  </span>
                </div>
                <span
                  className="offer__container__left__experience__options__label"
                >
                  Entry Level
                </span>
              </label>
              <label htmlFor="experience-checkbox2" className="label">
                <div
                  className="check-container small-check"
                  role="presentation"
                  onClick={() => setData({
                    ...data,
                    intermediate: !data.intermediate,
                  })}
                >
                  <span className="check-squad small-check__squad">
                    {data?.intermediate ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                      >
                        <path
                          d="M10.063 16.4L6.06299 12.4L7.46299 11L10.063 13.6L16.663 7L18.063 8.4L10.063 16.4Z"
                          fill="white"
                        />
                      </svg>
                    ) : null}
                  </span>
                </div>
                <span
                  className="offer__container__left__experience__options__label"
                >
                  Intermediate
                </span>
              </label>
              <label htmlFor="experience-checkbox3" className="label">
                <input
                  style={{ display: 'none' }}
                  value="Expert"
                  name="experience-checkbox"
                  type="checkbox"
                  id="experience-checkbox3"
                  className="offer__container__left__experience__options__checkbox"
                />
                <div
                  className="check-container small-check"
                  role="presentation"
                  onClick={() => setData({
                    ...data,
                    expert: !data.expert,
                  })}
                >
                  <span className="check-squad small-check__squad">
                    {data?.expert ? (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 24" fill="none">
                        <path
                          d="M10.063 16.4L6.06299 12.4L7.46299 11L10.063 13.6L16.663 7L18.063 8.4L10.063 16.4Z"
                          fill="white"
                        />
                      </svg>
                    ) : null}
                  </span>
                </div>
                <span
                  className="offer__container__left__experience__options__label"
                >
                  Expert
                </span>
              </label>
            </div>
            <div className="offer__container__left__experience__job">
              <h3 className="offer__container__left__experience__job__text">Job Type</h3>
              <div className="offer__container__left__experience__job__options">
                <label htmlFor="job-checkbox1" className="label">
                  <div
                    className="check-container small-check"
                    role="presentation"
                    onClick={() => setData({
                      ...data,
                      hourly: !data.hourly,
                    })}
                  >
                    <span className="check-squad small-check__squad">
                      {data.hourly ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 24" fill="none">
                          <path
                            d="M10.063 16.4L6.06299 12.4L7.46299 11L10.063 13.6L16.663 7L18.063 8.4L10.063 16.4Z"
                            fill="white"
                          />
                        </svg>
                      ) : null}
                    </span>
                  </div>
                  <span
                    className="offer__container__left__experience__options__label"
                  >
                    Hourly
                  </span>
                </label>
              </div>
              {data.hourly ? (
                <div className="offer__container__left__experience__job__options__time">
                  <label htmlFor="job-checkbox4">
                    <input
                      type="number"
                      id="job-checkbox4"
                      value={data.hourMin}
                      onChange={(ev) => setData({
                        ...data,
                        hourMin: ev.target.value,
                      })}
                      placeholder="min"
                      className="offer__container__left__experience__job__options__time__input"
                    />
                  </label>
                  <span
                    className="offer__container__left__experience__job__options__time__text"
                  >
                    /hr
                  </span>
                  <label htmlFor="job-checkbox5">
                    <input
                      type="number"
                      id="job-checkbox4"
                      value={data.hourMax}
                      onChange={(ev) => setData({
                        ...data,
                        hourMax: ev.target.value,
                      })}
                      placeholder="max"
                      className="offer__container__left__experience__job__options__time__input"
                    />
                  </label>
                  <span
                    className="offer__container__left__experience__job__options__time__text"
                  >
                    /hr
                  </span>

                </div>
              ) : null}
            </div>
          </div>
          <hr className="offer-filter-line" />
          <div className="offer__container__left__category__select__options__tags">
            <h3
              className="offer__container__left__category__select__options__tags__title"
            >
              Profession
            </h3>
            <label htmlFor="category-search">
              <img
                className="
              offer__container__left__category__select__options__icon"
                src={SearchIconZoom}
                alt="img"
              />
              <input
                type="text"
                value={data.profRole}
                onChange={(ev) => setData({
                  ...data,
                  profRole: ev.target.value,
                })}
                className="offer__container__left__category__select__options__tags__input"
                placeholder="Search profession"
                id="category-search"
              />
            </label>
          </div>
          <hr className="offer-filter-line" />
          <div />
        </div>
        <OfferCvsList data={data} />
      </div>
    </div>
  );
}

export default OfferJobsFilter;
