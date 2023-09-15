import React from 'react'; import 'react-calendar/dist/Calendar.css';
import { useSelector } from 'react-redux'; import { useLoadScript } from '@react-google-maps/api';
import { useParams } from 'react-router-dom'; import Header from '../layouts/Header';
import OfferMap from '../layouts/OfferMap'; import OfferJobsFilter from '../layouts/OfferJobsFillter';
import NotFoundPage from '../components/NotFoundPage';

const libraries = ['places'];
const keyMap = process.env.REACT_APP_MAP_SECRET;

function Offer() {
  const token = useSelector((state) => state.users.token);
  const { role } = useSelector((state) => state.users.profile);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: keyMap,
    libraries,
    language: 'en',
  });
  const { page } = useParams();
  if (!token) {
    window.location.href = '/login'; return null;
  }
  if (page !== 'list' && page !== 'map' && page) {
    return <NotFoundPage />;
  }
  return (
    <>
      <Header />
      <div>
        {!page && <OfferMap isLoaded={isLoaded} userRole={role} />}
        {page === 'list' && <OfferJobsFilter isLoaded={isLoaded} userRole={role} />}
        {page === 'map' && <OfferMap isLoaded={isLoaded} userRole={role} />}
      </div>
    </>
  );
}
export default Offer;
