import React from 'react';
import { ReactComponent as FilterIcon } from '../assets/images/offer_filter_icon.svg';
import { ReactComponent as SearchIcon } from '../assets/images/offer_filter_search.svg';

function Offer() {
  return (
    <div className="offer">
      <div className="container">
        <div className="offer__top">
          <FilterIcon />
          <label htmlFor="offer-search">
            <SearchIcon />
            <input type="file" id="offer-search" />
          </label>
          <div className="offer__top__block">
            <button className="offer__top__map-button" type="button">Map</button>
            <button className="offer__top__list-button" type="button">List</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offer;
