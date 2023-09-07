import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingFile from '../layouts/LoadingFile';
import MapMarks from '../components/MapMarks';
import { jobListFromUsers } from '../store/actions/jobsRequest';
import MapProfile from '../components/MapProfile';
// import TestInput from './TestInput';

export default function GlobalMap({ isLoaded }) {
  if (!isLoaded) return <LoadingFile />;

  return <Map isLoaded={isLoaded} />;
}

function Map() {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobsRequest.jobListFromUsers);
  useEffect(() => {
    dispatch(jobListFromUsers());
  }, []);
  console.log(jobs);
  const markers = [
    { lat: 40.791235, lng: 43.848753 },
    { lat: 40.791722, lng: 43.848015 },
    { lat: 40.789123, lng: 43.846731 },
    { lat: 40.788452, lng: 43.846037 },
    { lat: 40.788871, lng: 43.848614 },
    { lat: 40.788990, lng: 43.847409 },
    { lat: 40.7855952, lng: 43.843743 },
  ];
  const token = useSelector((state) => state.users.token);
  if (!token) {
    window.location.href = '/login';
    return null;
  }
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
      <MapMarks markers={markers} />
      <MapProfile />
    </div>
  );
}
