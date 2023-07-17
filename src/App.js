import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CreateJob from './pages/Create-job';
import WriteReview from './pages/Write-Review';
import SignUp from './pages/Sign-Up';
import VerifyEmail from './pages/Verify-email';
import Verified from './pages/Verified';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/writereview" element={<WriteReview />} />
        <Route path="/create" element={<CreateJob />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/verify" element={<VerifyEmail />} />
        <Route path="/verified" element={<Verified />} />
        <Route path="/create-job" element={<CreateJob />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
