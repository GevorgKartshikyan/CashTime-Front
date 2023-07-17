import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CreateJob from './pages/Create-job';
<<<<<<< HEAD
import WriteReview from './pages/Write-Review';
=======
import SignUp from './pages/Sign-Up';
>>>>>>> 7d41177cf6b4fbdf2be972c7d8695f142222902a

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
<<<<<<< HEAD
        <Route path="/writereview" element={<WriteReview />} />
        <Route path="/create" element={<CreateJob />} />
=======
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/verify" element={<VerifyEmail />} />
        <Route path="/verified" element={<Verified />} />
        <Route path="/create-job" element={<CreateJob />} />
>>>>>>> 7d41177cf6b4fbdf2be972c7d8695f142222902a
      </Routes>
    </BrowserRouter>
  );
}

export default App;
