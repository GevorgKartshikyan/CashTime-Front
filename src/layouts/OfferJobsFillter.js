import React, { useCallback, useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import MapInputAutocomplete from '../components/MapInputAutocomplete';
import DownIcon from '../assets/images/offer_select_down_arrow_icon 2.svg';
import SearchIconZoom from '../assets/images/offer_search_magnifier_mobile ui_zoom_icon.svg';
import OfferJobsList from '../components/OfferJobsList';
import { ReactComponent as SearchIcon } from '../assets/images/offer_filter_search.svg';
import { jobListFromUsersFilter } from '../store/actions/jobsRequest';

function OfferJobsFilter({ isLoaded }) {
  const [categoryShow, setCategoryShow] = useState(false);
  const [experienceShow, setExperienceShow] = useState(false);
  const [dateShow, setDateShow] = useState(false);
  const [selectedDates, setSelectedDates] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState({
    title: '',
    experience_level: {
      entryLevel: '',
      intermediate: '',
      expert: '',
    },
    job_type: {
      hourly: '',
      hour_min: '',
      hour_max: '',
      fixed: '',
      salary_min: '',
      salary_max: '',
    },
    date: {
      from: '',
      to: '',
    },
    tags: '',
  });
  const handeFilterSelects = useCallback((key) => (e) => {
    if (key.includes('.')) {
      const [parentKey, childKey] = key.split('.');
      setFilter((prevState) => {
        if (prevState[parentKey][childKey] === 'Intermediate' || prevState[parentKey][childKey] === 'Expert' || prevState[parentKey][childKey] === 'Entry' || prevState[parentKey][childKey] === 'Hourly Rate' || prevState[parentKey][childKey] === 'Project Budget') {
          return {
            ...filter,
            [parentKey]: {
              ...filter[parentKey],
              [childKey]: '',
            },
          };
        }
        return {
          ...filter,
          [parentKey]: {
            ...filter[parentKey],
            [childKey]: e.target.value,
          },
        };
      });
    } else {
      setFilter({
        ...filter,
        [key]: e.target.value,
      });
    }
  }, [filter]);

  const handleDateChange = (date) => {
    setFilter({
      ...filter,
      date: {
        ...filter.date,
        to: date[1],
        from: date[0],
      },
    });
    setSelectedDates(date);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const city = searchParams.get('city') || '';
  const page = parseInt(searchParams.get('page') || 1, 10);
  const limit = parseInt(searchParams.get('limit') || 5, 10);
  const order = searchParams.get('order-by') || '';
  console.log(order);
  const handlePageChange = (event) => {
    const selectedPage = event.selected + 1;
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('page', selectedPage);
    newSearchParams.set('limit', limit);
    setSearchParams(newSearchParams);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(jobListFromUsersFilter({
        filter, page, limit, city, order,
      }));
    }, 800);
    return () => {
      clearTimeout(timer);
    };
  }, [filter, searchParams]);

  // console.log(filter);
  return (
    <div className="container">
      <div className="offer__top">
        {/* <FilterIcon /> */}
        <div className="offer__top__search">
          <label className="labeltest" htmlFor="offer-search">
            <SearchIcon className="offer__top__search__icon" />
            <MapInputAutocomplete searchParams={searchParams} setCity={setSearchParams} isLoaded={isLoaded} classInput="offer__top__search__input" />
          </label>
          <div className="offer__top__block">

            <button
              onClick={() => navigate('/offer/map')}
              className="offer__top__block__map"
              type="button"
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
      {/* !!!!!!!!!!!!!!!!!!!!!! */}
      {/* Offer container */}
      {/* !!!!!!!!!!!!!!!!!!!!!! */}

      <div className="offer__container">
        {/* !!!!!!!!!!!!!!!!!!!!!! */}
        {/* Offer container left */}
        {/* !!!!!!!!!!!!!!!!!!!!!! */}
        <div className="offer__container__left">
          <h2 className="offer__container__left__title">Filter By</h2>
          {/* !!!!!!!!!!!!!!!!!!!!!!!!!! */}
          {/* Category box */}
          {/* !!!!!!!!!!!!!!!!!!!!!!!!!! */}
          <div className="offer__container__left__category">
            <div className="offer__container__left__category__select">
              <h3 className="offer__container__left__category__select__text">Category</h3>
              <img
                role="presentation"
                onClick={() => setCategoryShow(!categoryShow)}
                className={categoryShow ? 'offer__container__left__category__select__icon  arrow__active'
                  : 'offer__container__left__category__select__icon'}
                src={DownIcon}
                alt="img"
              />

            </div>
            <div
              className="offer__container__left__category__select__options"
              style={categoryShow ? { display: 'none' } : { display: 'block' }}
            >
              <label htmlFor="category-search">
                <img
                  className="offer__container__left__category__select__options__icon"
                  src={SearchIconZoom}
                  alt="img"
                />
                <input
                  onChange={handeFilterSelects('title')}
                  type="text"
                  value={filter.title}
                  className="offer__container__left__category__select__options__input"
                  placeholder="Select a category"
                  id="category-search"
                />
              </label>
            </div>
          </div>
          <hr className="offer-filter-line" />
          {/* !!!!!!!!!!!!!!!!!!!!!! */}
          {/* Experience box */}
          {/* !!!!!!!!!!!!!!!!!!!!!! */}
          <div className="offer__container__left__experience">
            <div className="offer__container__left__experience__select">
              <h3 className="offer__container__left__experience__select__text">
                Experience
                level
              </h3>
              <img
                role="presentation"
                onClick={() => setExperienceShow(!experienceShow)}
                className={experienceShow ? 'offer__container__left__experience__select__icon  arrow__active'
                  : 'offer__container__left__experience__select__icon'}
                src={DownIcon}
                alt="img"
              />
            </div>
            <div style={experienceShow ? { display: 'none' } : { display: 'block' }}>
              <div className="offer__container__left__experience__options">
                <label htmlFor="experience-checkbox1" className="label">
                  <input
                    checked={filter.experience_level.entryLevel === 'Entry'}
                    value="Entry"
                    onChange={handeFilterSelects('experience_level.entryLevel')}
                    style={{ display: 'none' }}
                    type="checkbox"
                    id="experience-checkbox1"
                    name="experience-checkbox"
                    className="offer__container__left__experience__options__checkbox"
                  />
                  <div className="check-container small-check">
                    <span className="check-squad small-check__squad">
                      {filter.experience_level.entryLevel === 'Entry' && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                          <path d="M10.063 16.4L6.06299 12.4L7.46299 11L10.063 13.6L16.663 7L18.063 8.4L10.063 16.4Z" fill="white" />
                        </svg>
                      )}
                    </span>
                  </div>
                  <span
                    className="offer__container__left__experience__options__label"
                  >
                    Entry Level
                  </span>
                </label>
                <label htmlFor="experience-checkbox2" className="label">
                  <input
                    checked={filter.experience_level.intermediate === 'Intermediate'}
                    style={{ display: 'none' }}
                    value="Intermediate"
                    onChange={handeFilterSelects('experience_level.intermediate')}
                    name="experience-checkbox"
                    type="checkbox"
                    id="experience-checkbox2"
                    className="offer__container__left__experience__options__checkbox"
                  />
                  <div className="check-container small-check">
                    <span className="check-squad small-check__squad">
                      {filter.experience_level.intermediate === 'Intermediate' && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                          <path d="M10.063 16.4L6.06299 12.4L7.46299 11L10.063 13.6L16.663 7L18.063 8.4L10.063 16.4Z" fill="white" />
                        </svg>
                      )}
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
                    checked={filter.experience_level.expert === 'Expert'}
                    style={{ display: 'none' }}
                    value="Expert"
                    onChange={handeFilterSelects('experience_level.expert')}
                    name="experience-checkbox"
                    type="checkbox"
                    id="experience-checkbox3"
                    className="offer__container__left__experience__options__checkbox"
                  />
                  <div className="check-container small-check">
                    <span className="check-squad small-check__squad">
                      {filter.experience_level.expert === 'Expert' && (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 24" fill="none">
                          <path d="M10.063 16.4L6.06299 12.4L7.46299 11L10.063 13.6L16.663 7L18.063 8.4L10.063 16.4Z" fill="white" />
                        </svg>
                      )}
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
                    <input
                      checked={filter.job_type.hourly === 'Hourly Rate'}
                      style={{ display: 'none' }}
                      value="Hourly Rate"
                      onChange={handeFilterSelects('job_type.hourly')}
                      name="job-checkbox"
                      type="checkbox"
                      id="job-checkbox1"
                      className="offer__container__left__experience__options__checkbox"
                    />
                    <div className="check-container small-check">
                      <span className="check-squad small-check__squad">
                        {filter.job_type.hourly === 'Hourly Rate' && (
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 24" fill="none">
                            <path d="M10.063 16.4L6.06299 12.4L7.46299 11L10.063 13.6L16.663 7L18.063 8.4L10.063 16.4Z" fill="white" />
                          </svg>
                        )}
                      </span>
                    </div>
                    <span
                      className="offer__container__left__experience__options__label"
                    >
                      Hourly
                    </span>
                  </label>
                </div>
                {filter.job_type.hourly === 'Hourly Rate' && (
                <div className="offer__container__left__experience__job__options__time">
                  {/* chekboxy haninq */}
                  <label htmlFor="job-checkbox4">
                    <input
                      onChange={handeFilterSelects('job_type.hour_min')}
                      type="number"
                      value={filter.job_type.hour_min}
                      id="job-checkbox4"
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
                      onChange={handeFilterSelects('job_type.hour_max')}
                      type="number"
                      value={filter.job_type.hour_max}
                      id="job-checkbox4"
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
                )}
                <div className="offer__container__left__experience__job__options">
                  <label htmlFor="job-checkbox7" className="label">
                    <input
                      checked={filter.job_type.fixed === 'Project Budget'}
                      style={{ display: 'none' }}
                      value="Project Budget"
                      onChange={handeFilterSelects('job_type.fixed')}
                      name="job-checkbox-salary"
                      type="checkbox"
                      id="job-checkbox7"
                      className="offer__container__left__experience__options__checkbox"
                    />
                    <div className="check-container small-check">
                      <span className="check-squad small-check__squad">
                        {filter.job_type.fixed === 'Project Budget' && (
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 24" fill="none">
                            <path d="M10.063 16.4L6.06299 12.4L7.46299 11L10.063 13.6L16.663 7L18.063 8.4L10.063 16.4Z" fill="white" />
                          </svg>
                        )}
                      </span>
                    </div>
                    <span
                      className="offer__container__left__experience__options__label"
                    >
                      Fixed
                    </span>
                  </label>

                </div>
                {filter.job_type.fixed === 'Project Budget' && (
                <div className="offer__container__left__experience__job__options__salary">

                  <div
                    className="offer__container__left__experience__job__options__salary__lastBox"
                  >

                    <label htmlFor="job-checkbox4">
                      <input
                        onChange={handeFilterSelects('job_type.salary_min')}
                        type="number"
                        value={filter.job_type.salary_min}
                        id="job-checkbox4"
                        placeholder="min$"
                        className="offer__container__left__experience__job__options__salary__lastBox__input"
                      />
                    </label>

                    <label htmlFor="job-checkbox5">
                      <input
                        onChange={handeFilterSelects('job_type.salary_max')}
                        type="number"
                        id="job-checkbox4"
                        value={filter.job_type.salary_max}
                        placeholder="max$"
                        className="offer__container__left__experience__job__options__salary__lastBox__input"
                      />
                    </label>

                  </div>
                </div>
                )}
              </div>
            </div>
            <div />

          </div>
          <hr className="offer-filter-line" />
          {/* !!!!!!!!!!!!!!!!!!!!!! */}
          {/* Job category options & Job selary */}
          {/* !!!!!!!!!!!!!!!!!!!!!! */}
          <div className="offer__container__left__category__select">
            <h3 className="offer__container__left__category__select__text">Date Picker</h3>
            <img
              role="presentation"
              onClick={() => setDateShow(!dateShow)}
              className={dateShow ? 'offer__container__left__category__select__icon  arrow__active'
                : 'offer__container__left__category__select__icon'}
              src={DownIcon}
              alt="img"
            />

          </div>
          <div
            className="offer__container__left__category__select__options"
            style={dateShow ? { display: 'none' } : { display: 'block' }}
          >
            <div>
              <Calendar
                onChange={handleDateChange}
                  // style={calendarStyles}
                value={selectedDates}
                locale="en-GB"
                selectRange
              />
            </div>
            <div className="offer__container__left__category__select__options__tags">
              <h3 className="offer__container__left__category__select__options__tags__title">Tags</h3>
              <label htmlFor="category-search">
                <img
                  className="
              offer__container__left__category__select__options__icon"
                  src={SearchIconZoom}
                  alt="img"
                />
                <input
                  onChange={handeFilterSelects('tags')}
                  type="text"
                  value={filter.tags}
                  className="offer__container__left__category__select__options__tags__input"
                  placeholder="Search For Tags"
                  id="category-search"
                />

              </label>
            </div>
          </div>
          <div />
        </div>
        {/* !!!!!!!!!!!!!!!!!!!!!! */}
        {/* Offer container right */}
        {/* !!!!!!!!!!!!!!!!!!!!!! */}
        <OfferJobsList
          setFilter={setFilter}
          searchParams={searchParams}
          setOrder={setSearchParams}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default OfferJobsFilter;
