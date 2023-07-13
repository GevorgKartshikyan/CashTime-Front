import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
import SignUp from './pages/Sign-Up';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
