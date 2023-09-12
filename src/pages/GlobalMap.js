import React from 'react';
import { useSelector } from 'react-redux';
import LoadingFile from '../layouts/LoadingFile';
import MapMarks from '../components/MapMarks';

export default function GlobalMap({
  isLoaded, coordinates, setCoordinates, jobs,
}) {
  const token = useSelector((state) => state.users.token);
  if (!token) {
    window.location.href = '/login';
    return null;
  }
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
  console.log(jobs);
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
    </div>
  );
}
