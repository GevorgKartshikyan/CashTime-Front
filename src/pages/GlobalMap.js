import React from 'react';
import LoadingFile from '../layouts/LoadingFile';
import MapMarks from '../components/MapMarks';
// import MapProfile from '../components/MapProfile';

export default function GlobalMap({
  isLoaded, coordinates, setCoordinates, jobs,
}) {
  if (!isLoaded) return <LoadingFile />;
  return (
    <Map
      isLoaded={isLoaded}
      coordinates={coordinates}
      setCoordinates={setCoordinates}
      jobs={jobs}
    />
  );
}

function Map({ coordinates, setCoordinates, jobs }) {
  return (
    <div style={{
      maxHeight: '100vh',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      <MapMarks jobs={jobs} coordinates={coordinates} setCoordinates={setCoordinates} />
      {/* <MapProfile /> */}
    </div>
  );
}
