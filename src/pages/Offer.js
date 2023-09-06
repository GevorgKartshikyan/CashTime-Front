import React from 'react';
import 'react-calendar/dist/Calendar.css';
import { useSelector } from 'react-redux';
import { useLoadScript } from '@react-google-maps/api';
import { useParams } from 'react-router-dom';
import Header from '../layouts/Header';
import OfferMap from '../layouts/OfferMap';
import OfferJobsFilter from '../layouts/OfferJobsFillter';

function Offer() {
  const token = useSelector((state) => state.users.token);
  if (!token) {
    window.location.href = '/login';
    return null;
  }
  const keyMap = process.env.REACT_APP_MAP_SECRET;
  const libraries = ['places'];

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: keyMap,
    libraries,
    language: 'en',
  });
  const { page } = useParams();
  return (
    <>
      <Header />
      <div>
        {!page && <OfferMap isLoaded={isLoaded} />}
        {page === 'list' && <OfferJobsFilter isLoaded={isLoaded} />}
        {page === 'map' && <OfferMap isLoaded={isLoaded} />}
      </div>
    </>

  );
}

export default Offer;
