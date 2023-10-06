import React, { useEffect, useState } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
import { useDispatch, useSelector } from 'react-redux';
import markHome from '../assets/images/home-map.svg';
import markerSvg from '../assets/images/VectorMap.svg';
import locationSvg from '../assets/images/locationMark.svg';
import mapDefaultThem from '../utils/mapDefaultThem';
// import MapProfile from './MapProfile';
import InfoCard from './offer-info-card';
import { singleJobInfo } from '../store/actions/jobsRequest';
import { getSingleUser } from '../store/actions/users';
import UserCardMap from './UserCardMap';
// import userPng from '../assets/images/img__user__test.png';

function MapMarks({ coordinates, setCoordinates, jobs }) {
  const singleJob = useSelector((state) => state.jobsRequest.singleJob);
  const users = useSelector((state) => state.users.usersListForMap);
  const singleUser = useSelector((state) => state.users.singleUser);
  const role = useSelector((state) => state.users.profile.role);
  console.log(singleJob, role, users);
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
      position: window.google?.maps?.ControlPosition?.RIGHT_CENTER,
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
  const dispatch = useDispatch();
  const handleSeenSingleJob = (id) => {
    if (role === 'employee') {
      dispatch(singleJobInfo(id));
    } else {
      dispatch(getSingleUser(id));
    }
  };
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
        {role === 'employee' ? jobs.map((job) => (
          <Marker
            onClick={() => handleSeenSingleJob(job.id)}
            key={job.id}
            icon={{
              url: markerSvg,
            }}
            position={{ lat: job.geometry.coordinates[1], lng: job.geometry.coordinates[0] }}
          />
        ))
          : users.map((user) => (
            <Marker
              onClick={() => handleSeenSingleJob(user.id)}
              key={user.id}
              icon={{
                url: markerSvg,
              }}
              position={{ lat: user.location.coordinates[1], lng: user.location.coordinates[0] }}
            />
          ))}
      </GoogleMap>
      <button className="user__location__button" onClick={trackUserLocation} type="button">
        <img src={locationSvg} alt="geolocation" />
      </button>
      {Object.keys(singleJob)?.length !== 0 && (
      <InfoCard
        classMapSeen="on-map-seen"
        id={singleJob.id}
        creator={singleJob.userId}
        title={singleJob.title}
        priceMethod={singleJob.priceMethod}
        priceMaxHourly={singleJob.priceMaxHourly}
        priceMinHourly={singleJob.priceMinHourly}
        experience={singleJob.experience}
        createdAt={singleJob.createdAt}
        country={singleJob.country}
        city={singleJob.city}
        priceFixed={singleJob.priceFixed}
        description={singleJob.description}
      />
      )}
      {Object.keys(singleUser)?.length !== 0 && (
      <UserCardMap user={singleUser} />
      )}
      {/* <MapProfile /> */}
    </>
  );
}

export default MapMarks;
