import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import i18n from 'i18next';
import { useDispatch, useSelector } from 'react-redux';
import Home from './pages/Home';
import GlobalMap from './pages/GlobalMap';
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
import Admin from './pages/Admin';
import Profile from './pages/Profile';
import { getProfile } from './store/actions/users';
import { socketInit } from './store/actions/socket';
import { newMessages } from './store/actions/messages';
import NotFoundPage from './components/NotFoundPage';
import SuccessModal from './components/SuccessModal';
import AdminLogin from './pages/AdminLogin';
import SingleProfile from './pages/SingleProfile';

function App() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.users.token);
  useEffect(() => {
    i18n.changeLanguage(window.localStorage.getItem('language'));
  }, [window.localStorage.getItem('language')]);
  useEffect(() => {
    dispatch(getProfile());
    if (token) {
      dispatch(socketInit(token));
    }
  }, [token]);
  useEffect(() => {
    dispatch(getProfile());
    dispatch(newMessages());
  });
  return (
    <BrowserRouter>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cash-Time</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/:userId" element={<SingleProfile />} />
        <Route path="/add-review" element={<WriteReview />} />
        <Route path="/userrating" element={<UserRating />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/verify" element={<VerifyEmail />} />
        <Route path="/verified" element={<Verified />} />
        <Route path="/history" element={<History />} />
        <Route path="/connect-card" element={<ConnectCard />} />
        <Route path="/create-job" element={<CreateJob />} />
        <Route path="/worker-offers" element={<WorkerOffers />} />
        <Route path="/messages/:friendId" element={<Messages />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/offer/:page" element={<Offer />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/create-cv" element={<CreateCV />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/:page" element={<Admin />} />
        <Route path="/test-map" element={<GlobalMap />} />
        <Route path="/*" element={<NotFoundPage />} />
        <Route path="/success-message/:page" element={<SuccessModal />} />
        <Route path="/admin/login" element={<AdminLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
