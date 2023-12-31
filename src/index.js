import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import './assets/styles/index.scss';
import i18n from './18n';
import store from './store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <Suspense fallback={<div>Loading...</div>}>
        <GoogleOAuthProvider clientId="586055279200-pj30j1k8tjhurugs3kla43sq6pkghegk.apps.googleusercontent.com">
          <App />
        </GoogleOAuthProvider>
      </Suspense>
    </I18nextProvider>
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
