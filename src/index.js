import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
// import App from './App';
import './assets/styles/index.scss';
import CreateJob from './pages/Create-job';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CreateJob />,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
