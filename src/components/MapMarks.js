import React, { useEffect, useState } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
import markHome from '../assets/images/home-map.svg';
import markerSvg from '../assets/images/VectorMap.svg';
import locationSvg from '../assets/images/locationMark.svg';
import mapDefaultThem from '../utils/mapDefaultThem';

function MapMarks({ coordinates, setCoordinates, jobs }) {
  const [home, setHome] = useState({
    lat: 40.791235,
    lng: 43.848753,
  });
  const containerStyle = {
    width: '100vw',
    height: '100vh',
    textAlign: 'center',
  };
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
          // console.log(position);
          setCoordinates({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setHome({
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

  useEffect(() => {
    trackUserLocation();
  }, []);
  console.log(jobs);
  return (
    <>
      <GoogleMap
        zoom={14}
        center={coordinates}
        mapContainerStyle={containerStyle}
        options={mapOptions}
      >
        <Marker
          position={home}
          icon={{
            url: markHome,
          }}
        />
        {jobs.map((job) => (
          <Marker
            onClick={() => console.log('a')}
        // eslint-disable-next-line react/no-array-index-key
            key={job.id}
            icon={{
              url: markerSvg,
            }}
            position={{ lat: job.geometry.coordinates[1], lng: job.geometry.coordinates[0] }}
          />
        ))}
      </GoogleMap>
      <button className="user__location__button" onClick={trackUserLocation} type="button">
        <img src={locationSvg} alt="geolocation" />
      </button>
    </>
  );
}

export default MapMarks;
