import React from 'react'; import 'react-calendar/dist/Calendar.css';
import { useSelector } from 'react-redux'; import { useLoadScript } from '@react-google-maps/api';
import { useParams } from 'react-router-dom'; import Header from '../layouts/Header';
import OfferMap from '../layouts/OfferMap'; import OfferJobsFilter from '../layouts/OfferJobsFillter';

const libraries = ['places'];
function Offer() {
  const token = useSelector((state) => state.users.token);
  const keyMap = process.env.REACT_APP_MAP_SECRET;
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: keyMap,
    libraries,
    language: 'en',
  });
  const { page } = useParams();
  if (!token) {
    window.location.href = '/login'; return null;
  }
  return (
    <>
      <Header />
      {' '}
      <div>
        {!page && <OfferMap isLoaded={isLoaded} />}
        {' '}
        {page === 'list' && <OfferJobsFilter isLoaded={isLoaded} />}
        {page === 'map' && <OfferMap isLoaded={isLoaded} />}
      </div>
    </>
  );
}
export default Offer;
