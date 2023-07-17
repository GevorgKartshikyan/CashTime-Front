import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import VerifyEmail from './pages/Verify-email';
import Verified from './pages/Verified';
import ConnectCard from './pages/Connect-card';
import History from './pages/History';
import SignUp from './pages/Sign-Up';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/verify" element={<VerifyEmail />} />
        <Route path="/verified" element={<Verified />} />
        <Route path="/history" element={<History />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/connect-card" element={<ConnectCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
