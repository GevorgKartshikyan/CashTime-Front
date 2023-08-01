import React, { useState } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import Autocomplete from 'react-google-autocomplete';

const key = 'AIzaSyDgzO2lx8X_g2p2q0U9xCB5PkpELNNnzgM';
export default function TestMap() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: key,
    libraries: ['places'],
  });

  if (!isLoaded) return <div>Loading...</div>;

  return <Map />;
}

function Map() {
  // const [lat, setLat] = useState(40.791235);
  // const [lng, setLng] = useState(43.848753);
  const [coordinates, setCoordinates] = useState({
    lat: 40.791235,
    lng: 43.848753,
  });
  const containerStyle = {
    width: '1000px',
    height: '600px',
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
  };
  const handlePlaceSelect = (place) => {
    try {
      const { lat: latitude, lng: longitude } = place.geometry.location;
      setCoordinates({
        lat: latitude(),
        lng: longitude(),
      });
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <>
      <div>hello</div>
      <Autocomplete
        placeholder="Write your address"
        className="signup__start__form__input"
        onPlaceSelected={handlePlaceSelect}
        options={{
          language: 'en',
          componentRestrictions: { country: 'am' },
          types: ['cities'],
        }}
      />
      <GoogleMap
        zoom={15}
        center={coordinates}
        mapContainerStyle={containerStyle}
        options={mapOptions}
      >
        {markers.map((marker, index) => (
          <Marker
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            onClick={(e) => {
              console.log(e);
            }}
            position={{ lat: marker.lat, lng: marker.lng }}
          />
        ))}
      </GoogleMap>
    </>
  );
}
