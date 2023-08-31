import React, { useEffect, useState } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
import markHome from '../assets/images/home-map.svg';
import markerSvg from '../assets/images/VectorMap.svg';
import locationSvg from '../assets/images/locationMark.svg';
import mapDefaultThem from '../utils/mapDefaultThem';

function MapMarks({ markers }) {
  const [coordinates, setCoordinates] = useState({
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

  useEffect(() => {
    trackUserLocation();
  }, []);
  // console.log(markers);
  return (
    <>
      <GoogleMap
        zoom={15}
        center={coordinates}
        mapContainerStyle={containerStyle}
        options={mapOptions}
      >
        <Marker
          position={coordinates}
          icon={{
            url: markHome,
          }}
        />
        {markers.map((marker) => (
          <Marker
            onClick={() => console.log('a')}
        // eslint-disable-next-line react/no-array-index-key
            key={marker.lng + marker.lat}
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
    </>
  );
}

export default MapMarks;
