import React, { useState } from 'react';
import {
  GoogleMap, useLoadScript, Marker,
} from '@react-google-maps/api';
import LoadingFile from '../layouts/LoadingFile';
import mapDefaultThem from '../utils/mapDefaultThem';
import markerSvg from '../assets/images/VectorMap.svg';
import locationSvg from '../assets/images/locationMark.svg';
// import MapProfile from '../components/MapProfile';

const key = process.env.REACT_APP_MAP_SECRET;
const libraries = ['places'];
export default function TestMap() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: key,
    libraries,
    language: 'en',
  });
  if (!isLoaded) return <LoadingFile />;

  return <Map />;
}

function Map() {
  const [coordinates, setCoordinates] = useState({
    lat: 40.791235,
    lng: 43.848753,
  });
  const containerStyle = {
    width: '100vw',
    height: '95vh',
    textAlign: 'center',
  };

  // const center = useMemo(() => ({ lat: coordinates.lat, lng: coordinates.lng }), []);
  // console.log(center);
  const markers = [
    { lat: 40.791235, lng: 43.848753 },
    { lat: 40.791722, lng: 43.848015 },
    { lat: 40.789123, lng: 43.846731 },
    { lat: 40.788452, lng: 43.846037 },
    { lat: 40.788871, lng: 43.848614 },
    { lat: 40.788990, lng: 43.847409 },
    { lat: 40.7855952, lng: 43.843743 },
  ];

  const mapOptions = {
    zoomControlOptions: {
      position: window.google.maps.ControlPosition.RIGHT_CENTER,
    },
    styles: mapDefaultThem,
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false,
  };
  const trackUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position);
          setCoordinates({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error getting user location:', error);
        },
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };
  return (
    <div style={{
      maxHeight: '100vh', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
    }}
    >

      <GoogleMap
        zoom={15}
        center={coordinates}
        mapContainerStyle={containerStyle}
        options={mapOptions}
      >
        {markers.map((marker, index) => (
          <Marker
            onClick={() => console.log('a')}
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            icon={{
              url: markerSvg,
            }}
            position={{ lat: marker.lat, lng: marker.lng }}
          />
        ))}
      </GoogleMap>
      <button className="user__location__button" onClick={trackUserLocation} type="button">
        <img src={locationSvg} alt="geolocation" />
      </button>
      {/* <MapProfile /> */}
    </div>
  );
}
