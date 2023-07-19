import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { ReactComponent as FilterIcon } from '../assets/images/offer_filter_icon.svg';
import { ReactComponent as SearchIcon } from '../assets/images/offer_filter_search.svg';
import DownIcon from '../assets/images/offer_select_down_arrow_icon 2.svg';
import SearchIconZoom from '../assets/images/offer_search_magnifier_mobile ui_zoom_icon.svg';

function Offer() {
  const [activeButton, setActiveButton] = useState(false);
  const [categoryShow, setCategoryShow] = useState(false);
  const [experienceShow, setExperienceShow] = useState(false);
  const [dateShow, setDateShow] = useState(false);
  const [selectedDates, setSelectedDates] = useState([]);
  // const calendarStyles = {
  //   maxWidth: '1000px',
  //   margin: '0 auto',
  //   // Add more custom styles as needed
  // };
  const handleDateChange = (date) => {
    setSelectedDates(date);
    console.log(date);
  };

  return (
    <div className="offer">
      <div className="container">
        {/* !!!!!!!!!!!!!!!!!!!!!! */}
        {/* Offer top */}
        {/* !!!!!!!!!!!!!!!!!!!!!! */}
        <div className="offer__top">
          <FilterIcon />
          <div className="offer__top__search">
            <label htmlFor="offer-search">
              <SearchIcon className="offer__top__search__icon" />
              <input type="text" id="offer-search" className="offer__top__search__input" />
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
                    type="text"
                    className="offer__container__left__category__select__options__input"
                    placeholder="Select a category"
                    id="category-search"
                  />
                </label>
              </div>
            </div>
            <hr className="line" />
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
                  <label htmlFor="experience-checkbox1">
                    <input
                      type="checkbox"
                      id="experience-checkbox1"
                      className="offer__container__left__experience__options__checkbox"
                    />
                    <span
                      className="offer__container__left__experience__options__label"
                    >
                      Entry Level
                    </span>
                  </label>
                  <label htmlFor="experience-checkbox2">
                    <input
                      type="checkbox"
                      id="experience-checkbox2"
                      className="offer__container__left__experience__options__checkbox"
                    />
                    <span
                      className="offer__container__left__experience__options__label"
                    >
                      Entry Level
                    </span>
                  </label>
                  <label htmlFor="experience-checkbox3">
                    <input
                      type="checkbox"
                      id="experience-checkbox3"
                      className="offer__container__left__experience__options__checkbox"
                    />
                    <span
                      className="offer__container__left__experience__options__label"
                    >
                      Entry Level
                    </span>
                  </label>
                </div>
                <div className="offer__container__left__experience__job">
                  <h3 className="offer__container__left__experience__job__text">Job Type</h3>
                  <div className="offer__container__left__experience__job__options">
                    <label htmlFor="job-checkbox1">
                      <input
                        type="checkbox"
                        id="job-checkbox1"
                        className="offer__container__left__experience__job__options__checkbox"
                      />
                      <span
                        className="offer__container__left__experience__options__label"
                      >
                        Hourly
                      </span>
                    </label>
                    <label htmlFor="job-checkbox2">
                      <input
                        type="checkbox"
                        id="job-checkbox2"
                        className="offer__container__left__experience__job__options__checkbox"
                      />
                      <span
                        className="offer__container__left__experience__options__label"
                      >
                        Monthly
                      </span>
                    </label>
                  </div>
                  <div className="offer__container__left__experience__job__options__time">
                    <label htmlFor="job-checkbox3">
                      <input
                        type="checkbox"
                        id="job-checkbox3"
                        className="offer__container__left__experience__job__options__time__checkbox"
                      />
                    </label>
                    <label htmlFor="job-checkbox4">
                      <input
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
                    <label htmlFor="job-checkbox7">
                      <input
                        type="checkbox"
                        id="job-checkbox7"
                        className="offer__container__left__experience__job__options__checkbox"
                      />
                      <span
                        className="offer__container__left__experience__options__label"
                      >
                        Fixed
                      </span>
                    </label>
                  </div>
                  <div className="offer__container__left__experience__job__options__salary">
                    <label htmlFor="job-checkbox8">
                      <input
                        type="checkbox"
                        id="job-checkbox8"
                        className="offer__container__lef
                        t__experience__job__options__salary__checkbox"
                      />
                      <span
                        className="offer__container__left__experience__job__options__salary__info"
                      >
                        Less than 50 USD
                      </span>
                    </label>
                    <div
                      className="offer__container__left__experience__job__options__salary__boxes"
                    >
                      <label htmlFor="job-checkbox9">
                        <input
                          type="checkbox"
                          id="job-checkbox9"
                          className="offer__container__lef
                        t__experience__job__options__salary__checkbox"
                        />
                        <span
                          className="offer__container__left__experience__job__options__salary__info"
                        >
                          100-200
                        </span>
                      </label>
                      <span
                        className="offer__container__left__experience__job__options__salary__info"
                      >
                        $
                      </span>
                    </div>
                    <div
                      className="offer__container__left__experience__job__options__salary__boxes"
                    >
                      <label htmlFor="job-checkbox10">
                        <input
                          type="checkbox"
                          id="job-checkbox10"
                          className="offer__container__lef
                        t__experience__job__options__salary__checkbox"
                        />
                        <span
                          className="offer__container__left__experience__job__options__salary__info"
                        >
                          200-500
                        </span>
                      </label>
                      <span
                        className="offer__container__left__experience__job__options__salary__info"
                      >
                        $
                      </span>
                    </div>
                    <div
                      className="offer__container__left__experience__job__options__salary__boxes"
                    >
                      <label htmlFor="job-checkbox11">
                        <input
                          type="checkbox"
                          id="job-checkbox11"
                          className="offer__container__lef
                        t__experience__job__options__salary__checkbox"
                        />
                        <span
                          className="offer__container__left__experience__job__options__salary__info"
                        >
                          500-1K
                        </span>
                      </label>
                      <span
                        className="offer__container__left__experience__job__options__salary__info"
                      >
                        $
                      </span>
                    </div>
                    <div
                      className="offer__container__left__experience__job__options__salary__lastBox"
                    >
                      <label htmlFor="job-checkbox3">
                        <input
                          type="checkbox"
                          id="job-checkbox3"
                          className="offer__container__left__experience__job__options__salary__lastBox__checkbox"
                        />
                      </label>
                      <label htmlFor="job-checkbox4">
                        <input
                          type="number"
                          id="job-checkbox4"
                          placeholder="min$"
                          className="offer__container__left__experience__job__options__salary__lastBox__input"
                        />
                      </label>

                      <label htmlFor="job-checkbox5">
                        <input
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
            <hr className="line" />
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
                  selectRange // Этот параметр позволяет выбирать несколько дней в одном месяце
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
                    type="text"
                    className="offer__container__left__category__select__options__tags__input"
                    placeholder="Search For Tags"
                    id="category-search"
                  />

                </label>
                <hr className="line" />
                <h3 className="offer__container__left__category__select__options__tags__title">Client Location</h3>
                <label htmlFor="category-search">
                  <img
                    className="
              offer__container__left__category__select__options__icon"
                    src={SearchIconZoom}
                    alt="img"
                  />
                  <input
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
        </div>
      </div>
    </div>

  );
}

export default Offer;
