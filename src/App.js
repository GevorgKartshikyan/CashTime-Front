import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import VerifyEmail from './pages/Verify-email';
import Verified from './pages/Verified';
import Messages from './pages/Messages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/verify" element={<VerifyEmail />} />
        <Route path="/verified" element={<Verified />} />
        <Route path="/messages" element={<Messages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
