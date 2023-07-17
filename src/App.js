import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import VerifyEmail from './pages/Verify-email';
import Verified from './pages/Verified';
import CreateJob from './pages/Create-job';
import SignUp from './pages/Sign-Up';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/verify" element={<VerifyEmail />} />
        <Route path="/verified" element={<Verified />} />
        <Route path="/create" element={<CreateJob />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
