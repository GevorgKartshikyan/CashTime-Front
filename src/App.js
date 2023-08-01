import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import i18n from 'i18next';
import Home from './pages/Home';
import CreateJob from './pages/Create-job';
import WriteReview from './pages/Write-Review';
import UserRating from './pages/User-Rating';
import SignUp from './pages/Sign-Up';
import VerifyEmail from './pages/Verify-email';
import Verified from './pages/Verified';
import Messages from './pages/Messages';
import ConnectCard from './pages/Connect-card';
import History from './pages/History';
import WorkerOffers from './pages/Worker_Offers';
import Offer from './pages/Offer';
import CreateCV from './pages/Create-CV';
import Login from './pages/Login';
<<<<<<< HEAD
import CreateCvSixth from './components/CreateCVSixth';
import TestMap from './pages/TestMap';
=======
import CreateCVSixth from './components/CreateCVSixth';
>>>>>>> Narek

function App() {
  useEffect(() => {
    i18n.changeLanguage(window.localStorage.getItem('language'));
  }, [window.localStorage.getItem('language')]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/writereview" element={<WriteReview />} />
        <Route path="/userrating" element={<UserRating />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/verify" element={<VerifyEmail />} />
        <Route path="/verified" element={<Verified />} />
        <Route path="/history" element={<History />} />
        <Route path="/connect-card" element={<ConnectCard />} />
        <Route path="/create-job" element={<CreateJob />} />
        <Route path="/worker-offers" element={<WorkerOffers />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/create-cv" element={<CreateCV />} />
        <Route path="/login" element={<Login />} />
<<<<<<< HEAD
        <Route path="/test" element={<CreateCvSixth />} />
        <Route path="/test-map" element={<TestMap />} />
=======
        <Route path="/test" element={<CreateCVSixth />} />
>>>>>>> Narek
      </Routes>
    </BrowserRouter>
  );
}

export default App;
