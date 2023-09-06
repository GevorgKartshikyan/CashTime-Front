import React, { useState } from 'react';
import Select from 'react-select';
import ReactPaginate from 'react-paginate';
import SearchIconZoom from '../assets/images/offer_search_magnifier_mobile ui_zoom_icon.svg';
import IndicatorsArrowsSecond from './indicatorsArrowsSecond';
import InfoCard from './offer-info-card';

function OfferJobsList() {
  const [toggleBtn, setToggleBtn] = useState(true);
  const items = 905;
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
          styles={customStyles}
          // onChange={handeChangeSelects('service')}
          components={{
            IndicatorsContainer: IndicatorsArrowsSecond,
          }}
        />
      </div>
      {/* {toggleBtn ? ( */}
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
      {/* ) : null } */}
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
    </div>

  );
}

export default OfferJobsList;
