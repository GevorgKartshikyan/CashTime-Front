import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { gapi } from 'gapi-script';
import { loginRequest } from '../store/actions/users';
import Header from '../layouts/Header';
import Img from '../assets/images/login_img.svg';
import LoginGoogle from '../components/LoginGoogle';

function Login() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const handleChange = useCallback((key) => (ev) => {
    setFormData({ ...formData, [key]: ev.target.value });
  }, [formData]);
  const handleSubmit = useCallback(async (ev) => {
    ev.preventDefault();
    const { payload } = await dispatch(loginRequest(formData));
    if (payload?.status === 'error') {
      if (payload?.message === 'Invalid email or password') {
        toast.error(`${payload?.message}`);
      } else {
        toast.error('An error occurred. Please try again later.');
      }
    }
  }, [formData]);

  const clientId = '586055279200-pj30j1k8tjhurugs3kla43sq6pkghegk.apps.googleusercontent.com';

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId,
        scope: '',
      });
    }

    gapi.load('client:auth2', start);
  }, []);

  return (
    <>
      <Header />
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="login">
        <div className="login__title">
          <h3>Log In To CashApp</h3>
        </div>
        <div className="login__form">
          <form onSubmit={handleSubmit} action="">
            <label className="email" htmlFor="email">
              <input
                placeholder="Email"
                type="email"
                id="email"
                required
                onChange={handleChange('email')}
                value={formData.email}
              />
            </label>
            <label className="password" htmlFor="password">
              <input
                placeholder="Password"
                type="password"
                id="password"
                required
                onChange={handleChange('password')}
                value={formData.password}
              />
            </label>
            <button type="submit">
              Continue with Email
            </button>
            <LoginGoogle />

          </form>
        </div>
        <div className="login__account">
          <span className="login__account__span" />
          <Link to="/sign-up">Don’t have an Account?</Link>
          <span className="login__account__span" />
        </div>
        <div className="login__image">
          <img src={Img} alt="" />
        </div>
      </div>
    </>
  );
}

export default Login;
