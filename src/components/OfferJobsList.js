import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import SearchIconZoom from '../assets/images/offer_search_magnifier_mobile ui_zoom_icon.svg';
import IndicatorsArrowsSecond from './indicatorsArrowsSecond';
import InfoCard from './offer-info-card';
import cryingEmoji from '../assets/images/crying.svg';
import LoadingFileFromList from './LoadingFileFromList';

function OfferJobsList({
  handlePageChange, searchParams, setOrder, setFilter,
}) {
  const [toggleBtn, setToggleBtn] = useState(true);
  const options = [
    {
      value: 'Newest',
      label: 'Newest',
    },
    {
      value: 'Latest',
      label: 'Latest',
    },
  ];
  const jobsFilter = useSelector((state) => state.jobsRequest.jobsFromUsersFilter);
  const currentPage = useSelector((state) => state.jobsRequest.currentPageUsers);
  const totalPages = useSelector((state) => state.jobsRequest.totalPagesUsers);
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      fontFamily: 'Lato,sans-serif',
      // padding: 0 25,
      paddingLeft: 12,
      paddingRight: 15,
      color: 'black',
      width: 120,
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
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const handleChange = (selected) => {
    setSelectedOption(selected);
  };
  useEffect(() => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('order-by', selectedOption.value);
    setOrder(newSearchParams);
  }, [selectedOption]);
  console.log(jobsFilter);
  const status = useSelector((state) => state.jobsRequest.jobsListStatus);
  const handleResetSearch = () => {
    setFilter({
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
  };
  console.log(status);
  return (
    <div className="offer__container__right">
      <div className="offer__container__right__toggle">
        <div className="offer__container__right__toggle__buttons">
          <button type="button" onClick={() => setToggleBtn(true)} className={toggleBtn ? 'offer__container__right__toggle__buttons__search active' : 'offer__container__right__toggle__buttons__search'}>Searched</button>
          <button type="button" onClick={() => setToggleBtn(false)} className={toggleBtn ? 'offer__container__right__toggle__buttons__saved' : 'offer__container__right__toggle__buttons__saved active'}>Saved Jobs</button>
        </div>

      </div>
      <div className="offer__container__right__toggle">
        <label htmlFor="container-right-input" className="offer__container__right__label">
          <img src={SearchIconZoom} alt="img" className="offer__container__right__label__search-img" />
          <input type="text" id="container-right-input" className="offer__container__right__label__search-input" />
        </label>
      </div>
      <div className="offer__container__right__sort">
        <span className="offer__container__right__sort__text">Sort:</span>
        <Select
          placeholder="Newest"
          options={options}
          value={selectedOption}
          onChange={handleChange}
          styles={customStyles}
          components={{
            IndicatorsContainer: IndicatorsArrowsSecond,
          }}
        />
      </div>
      <div>
        {status === 'ok' ? (
          jobsFilter.length > 0 && jobsFilter ? jobsFilter.map((job) => (
            <InfoCard
              id={job.id}
              creator={job.userId}
              key={job.id}
              title={job.title}
              priceMethod={job.priceMethod}
              priceMaxHourly={job.priceMaxHourly}
              priceMinHourly={job.priceMinHourly}
              experience={job.experience}
              createdAt={job.createdAt}
              country={job.country}
              city={job.city}
              priceFixed={job.priceFixed}
              description={job.description}
            />
          )) : (
            <>
              <div className="bad-query-offer-container">
                <img src={cryingEmoji} alt="bad query" />
                <p className="bad-query-offer">
                  Nothing was found for your query
                </p>
              </div>
              <div className="reset-query">
                <button className="button-error-handler-reset" onClick={handleResetSearch} type="button">Reset Search</button>
              </div>
            </>
          )
        ) : status === 'pending' ? (
          <div className="offer-loading-container">
            <LoadingFileFromList />
          </div>
        ) : (
          <div className="something-error-container">
            <h3>Something went wrong :(  </h3>
            <button onClick={() => window.location.reload()} className="button-error-handler-reset" type="button">Refresh Page</button>
          </div>
        )}
      </div>
      <div className="offer__container__right__paginate">
        {jobsFilter.length > 0 ? (
          <ReactPaginate
            activeClassName="item active-page"
            breakClassName="item break-me"
            breakLabel=""
            containerClassName="pagination"
            disabledClassName="disabled-page"
            marginPagesDisplayed={0}
            nextClassName="item next "
            onPageChange={handlePageChange}
            pageCount={totalPages} // total
            forcePage={currentPage - 1} // current
            pageClassName="item pagination-page "
            pageRangeDisplayed={5}
            previousClassName="item previous"
          />
        ) : null}
      </div>
    </div>

  );
}

export default OfferJobsList;
