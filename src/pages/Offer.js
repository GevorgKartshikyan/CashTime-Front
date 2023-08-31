import React, { useCallback, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Select from 'react-select';
import ReactPaginate from 'react-paginate';
// import { defaultStyles } from 'react-select/dist/declarations/src/styles';
// import Autocomplete from 'react-google-autocomplete';
import { ReactComponent as SearchIcon } from '../assets/images/offer_filter_search.svg';
import DownIcon from '../assets/images/offer_select_down_arrow_icon 2.svg';
import SearchIconZoom from '../assets/images/offer_search_magnifier_mobile ui_zoom_icon.svg';
import IndicatorsArrowsSecond from '../components/indicatorsArrowsSecond';
import InfoCard from '../components/offer-info-card';
import GlobalMap from './GlobalMap';
import TestInput from './TestInput';
import Header from '../layouts/Header';

function Offer({ isLoaded }) {
  const [activeButton, setActiveButton] = useState(false);
  const [categoryShow, setCategoryShow] = useState(false);
  const [experienceShow, setExperienceShow] = useState(false);
  const [dateShow, setDateShow] = useState(false);
  const [selectedDates, setSelectedDates] = useState([]);
  // const [selectedExperience, setSelectedExperience] = useState([]);
  const [toggleBtn, setToggleBtn] = useState(true);
  const items = 905;
  const [filter, setFilter] = useState({
    category: '',
    experience_level: {
      entryLevel: '',
      intermediate: '',
      expert: '',
    },
    job_type: {
      hourly: '',
      hour_min: '',
      hour_max: '',
      monthly: '',
      fixed: '',
      salary_min: '',
      salary_max: '',
    },
    tags: '',
    location: '',
    date: {
      from: '',
      to: '',
    },

  });
  const handeFilterSelects = useCallback((key) => (e) => {
    if (key.includes('.')) {
      const [parentKey, childKey] = key.split('.');
      setFilter((prevState) => {
        if (prevState[parentKey][childKey]) {
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

  // const handleCheckboxChange = useCallback((e) => {
  //   setSelectedExperience((prevState) => {
  //     const { value } = e.target;
  //     if (prevState.includes(value)) {
  //       return prevState.filter((item) => item !== value);
  //     }
  //     return [...prevState, value];
  //   });
  // }, [setSelectedExperience]);
  const options = [
    {
      value: 'test1',
      label: 'Test1',
    },
    {
      value: 'test2',
      label: 'Test2',
    },
    {
      value: 'Newest',
      label: 'Newest',
    }];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      fontFamily: 'Lato,sans-serif',
      // padding: 0 25,
      paddingLeft: 12,
      paddingRight: 15,
      color: 'black',
      width: 110,
      height: 35,
      border: state.isFocused ? 0 : 0,
      borderRadius: 20,
      background: '#E17A01',
      outline: 'none',
      boxShadow: 'none',
      '&:hover': {
        borderColor: '#E17A01',
      },
      '&:focus': {
        borderColor: 'rgba(3, 16, 84, 0.90)',
        boxShadow: 'none',
      },
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? 'black' : '#E17A01',
      background: state.isSelected ? '#E17A01' : null,
      cursor: 'pointer',
    }),
    placeholder: (defaultStyles) => ({
      ...defaultStyles,
      color: 'black',
      fontSize: 14,
    }),
  };
  // const [address, setAddress] = useState({
  //   latitude: '',
  //   longitude: '',
  // });
  // console.log(address);
  // const handlePlaceSelect = (place) => {
  //   try {
  //     const { lat, lng } = place.geometry.location;
  //     setAddress({
  //       latitude: lat(),
  //       longitude: lng(),
  //     });
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };
  // console.log(selectedExperience);
  return (
    <>
      <Header />
      <div>
        {activeButton ? (
          <div className="offer">
            <div className="container">
              {/* !!!!!!!!!!!!!!!!!!!!!! */}
              {/* Offer top */}
              {/* !!!!!!!!!!!!!!!!!!!!!! */}
              <div className="offer__top">
                {/* <FilterIcon /> */}
                <div className="offer__top__search">
                  <label className="labeltest" htmlFor="offer-search">
                    <SearchIcon className="offer__top__search__icon" />
                    <TestInput isLoaded={isLoaded} classInput="offer__top__search__input" />
                    {/* <input type="text" placeholder="Gyumri,Armenia"
                  id="offer-search" className="offer__top__search__input" /> */}
                  </label>
                  <div className="offer__top__block">

                    <button
                      onClick={() => setActiveButton(false)}
                      className={activeButton ? 'offer__top__block__map'
                        : 'offer__top__block__map active__btn'}
                      type="button"
                    >
                      Map
                    </button>
                    <button
                      onClick={() => setActiveButton(true)}
                      className={activeButton ? 'offer__top__block__list active__btn'
                        : 'offer__top__block__list'}
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
                          onChange={handeFilterSelects('category')}
                          type="text"
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
                            checked={filter.experience_level.entryLevel === 'Entry Level'}
                            value="Entry Level"
                            onChange={handeFilterSelects('experience_level.entryLevel')}
                            style={{ display: 'none' }}
                            type="checkbox"
                            id="experience-checkbox1"
                            name="experience-checkbox"
                            className="offer__container__left__experience__options__checkbox"
                          />
                          <div className="check-container small-check">
                            <span className="check-squad small-check__squad">
                              {filter.experience_level.entryLevel === 'Entry Level' && (
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
                            checked={filter.experience_level.intermediate === 'intermediate'}
                            style={{ display: 'none' }}
                            value="intermediate"
                            onChange={handeFilterSelects('experience_level.intermediate')}
                            name="experience-checkbox"
                            type="checkbox"
                            id="experience-checkbox2"
                            className="offer__container__left__experience__options__checkbox"
                          />
                          <div className="check-container small-check">
                            <span className="check-squad small-check__squad">
                              {filter.experience_level.intermediate === 'intermediate' && (
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
                              checked={filter.job_type.hourly === 'hourly'}
                              style={{ display: 'none' }}
                              value="hourly"
                              onChange={handeFilterSelects('job_type.hourly')}
                              name="job-checkbox"
                              type="checkbox"
                              id="job-checkbox1"
                              className="offer__container__left__experience__options__checkbox"
                            />
                            <div className="check-container small-check">
                              <span className="check-squad small-check__squad">
                                {filter.job_type.hourly === 'hourly' && (
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
                          <label htmlFor="job-checkbox2" className="label">
                            <input
                              checked={filter.job_type.monthly === 'monthly'}
                              style={{ display: 'none' }}
                              value="monthly"
                              onChange={handeFilterSelects('job_type.monthly')}
                              name="job-checkbox"
                              type="checkbox"
                              id="job-checkbox2"
                              className="offer__container__left__experience__options__checkbox"
                            />
                            <div className="check-container small-check">
                              <span className="check-squad small-check__squad">
                                {filter.job_type.monthly === 'monthly' && (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 24" fill="none">
                                  <path d="M10.063 16.4L6.06299 12.4L7.46299 11L10.063 13.6L16.663 7L18.063 8.4L10.063 16.4Z" fill="white" />
                                </svg>
                                )}
                              </span>
                            </div>
                            <span
                              className="offer__container__left__experience__options__label"
                            >
                              Monthly
                            </span>
                          </label>

                        </div>
                        <div className="offer__container__left__experience__job__options__time">
                          {/* chekboxy haninq */}
                          <label htmlFor="job-checkbox4">
                            <input
                              onChange={handeFilterSelects('job_type.hour_min')}
                              type="number"
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
                        <div className="offer__container__left__experience__job__options">
                          <label htmlFor="job-checkbox7" className="label">
                            <input
                              checked={filter.job_type.fixed === 'fixed'}
                              style={{ display: 'none' }}
                              value="fixed"
                              onChange={handeFilterSelects('job_type.fixed')}
                              name="job-checkbox-salary"
                              type="checkbox"
                              id="job-checkbox7"
                              className="offer__container__left__experience__options__checkbox"
                            />
                            <div className="check-container small-check">
                              <span className="check-squad small-check__squad">
                                {filter.job_type.fixed === 'fixed' && (
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
                        <div className="offer__container__left__experience__job__options__salary">

                          <div
                            className="offer__container__left__experience__job__options__salary__lastBox"
                          >

                            <label htmlFor="job-checkbox4">
                              <input
                                onChange={handeFilterSelects('job_type.salary_min')}
                                type="number"
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
                                placeholder="max$"
                                className="offer__container__left__experience__job__options__salary__lastBox__input"
                              />
                            </label>

                          </div>
                        </div>
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
                          className="offer__container__left__category__select__options__tags__input"
                          placeholder="Search For Tags"
                          id="category-search"
                        />

                      </label>
                      <hr className="offer-filter-line" />
                      <h3 className="offer__container__left__category__select__options__tags__title">Client Location</h3>
                      <label htmlFor="category-search">
                        <img
                          className="
              offer__container__left__category__select__options__icon"
                          src={SearchIconZoom}
                          alt="img"
                        />
                        <input
                          onChange={handeFilterSelects('location')}
                          type="text"
                          className="offer__container__left__category__select__options__tags__input"
                          placeholder="Select Location"
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
                <div className="offer__container__right">
                  <div className="offer__container__right__toggle">
                    <div className="offer__container__right__toggle__buttons">
                      <button type="button" onClick={() => setToggleBtn(true)} className={toggleBtn ? 'offer__container__right__toggle__buttons__search active' : 'offer__container__right__toggle__buttons__search'}>Searched</button>
                      <button type="button" onClick={() => setToggleBtn(false)} className={toggleBtn ? 'offer__container__right__toggle__buttons__saved' : 'offer__container__right__toggle__buttons__saved active'}>Saved Jobs</button>
                    </div>

                  </div>
                  <label htmlFor="container-right-input" className="offer__container__right__label">
                    <img src={SearchIconZoom} alt="img" className="offer__container__right__label__search-img" />
                    <input type="text" id="container-right-input" className="offer__container__right__label__search-input" />
                  </label>
                  <div className="offer__container__right__sort">
                    <span className="offer__container__right__sort__text">Sort:</span>
                    <Select
                      placeholder="Newest"
                      options={options}
                      styles={customStyles}
                      // onChange={handeChangeSelects('service')}
                      components={{
                        IndicatorsContainer: IndicatorsArrowsSecond,
                      }}
                    />
                  </div>
                  {toggleBtn ? (
                    <div>
                      <InfoCard
                        title="Rework And Improve My Figma Designs"
                        detail="Hourly:12-15 USD,12-15 USD,Available, Expert"
                        postTime="Posed Yesterday"
                        description="Im working on a new business idea/concept.
                Im not the best designer in the world so Id
                like someone to help take my very basic designs in figma and improve them .
                Ive got a basic colour scheme and design structure but thats about it."
                      />
                      <InfoCard
                        title="Rework And Improve My Figma Designs"
                        detail="Hourly:12-15 USD,12-15 USD,Available, Expert"
                        postTime="Posed Yesterday"
                        description="Im working on a new business idea/concept.
                Im not the best designer in the world so Id
                like someone to help take my very basic designs in figma and improve them .
                Ive got a basic colour scheme and design structure but thats about it."
                      />
                      <InfoCard
                        title="Rework And Improve My Figma Designs"
                        detail="Hourly:12-15 USD,12-15 USD,Available, Expert"
                        postTime="Posed Yesterday"
                        description="Im working on a new business idea/concept.
                Im not the best designer in the world so Id
                like someone to help take my very basic designs in figma and improve them .
                Ive got a basic colour scheme and design structure but thats about it."
                      />
                      <InfoCard
                        title="Rework And Improve My Figma Designs"
                        detail="Hourly:12-15 USD,12-15 USD,Available, Expert"
                        postTime="Posed Yesterday"
                        description="Im working on a new business idea/concept.
                Im not the best designer in the world so Id
                like someone to help take my very basic designs in figma and improve them .
                Ive got a basic colour scheme and design structure but thats about it."
                      />
                      <InfoCard
                        title="Rework And Improve My Figma Designs"
                        detail="Hourly:12-15 USD,12-15 USD,Available, Expert"
                        postTime="Posed Yesterday"
                        description="Im working on a new business idea/concept.
                Im not the best designer in the world so Id
                like someone to help take my very basic designs in figma and improve them .
                Ive got a basic colour scheme and design structure but thats about it."
                      />
                    </div>
                  ) : null }
                  {toggleBtn ? (
                    <div className="offer__container__right__paginate">
                      <ReactPaginate
                        activeClassName="item active-page"
                        breakClassName="item break-me"
                        breakLabel=""
                        // maxPageCount={5}
                        containerClassName="pagination"
                        disabledClassName="disabled-page"
                        marginPagesDisplayed={0}
                        nextClassName="item next "
                        // nextLabel={<ArrowForwardIosIcon style={{ fontSize: 18, width: 150 }} />}
                        onPageChange={() => null}
                        pageCount={items}
                        pageClassName="item pagination-page "
                        pageRangeDisplayed={5}
                        previousClassName="item previous"
                      />
                    </div>
                  ) : null}

                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="map-box-offer">
            <div className="container">
              <div className="offer__top offer__top-map">
                {/* <FilterIcon /> */}
                <div className="offer__top__search">
                  <label className="labeltest" htmlFor="offer-search">
                    <SearchIcon className="offer__top__search__icon" />
                    <TestInput isLoaded={isLoaded} classInput="offer__top__search__input" />
                    {/* <input type="text" placeholder="Gyumri,Armenia"
                  id="offer-search" className="offer__top__search__input" /> */}
                  </label>
                </div>
                <div className="offer__top__block offer-top-block">

                  <button
                    onClick={() => setActiveButton(false)}
                    className={activeButton ? 'offer__top__block__map'
                      : 'offer__top__block__map active__btn'}
                    type="button"
                  >
                    Map
                  </button>
                  <button
                    onClick={() => setActiveButton(true)}
                    className={activeButton ? 'offer__top__block__list active__btn'
                      : 'offer__top__block__list'}
                    type="button"
                  >
                    List
                  </button>
                </div>
              </div>
            </div>
            <div className="map-box-offer__map ">
              <div className="map-box-offer__map__container">
                <GlobalMap isLoaded={isLoaded} />
              </div>
            </div>
          </div>
        )}
      </div>
    </>

  );
}

export default Offer;
