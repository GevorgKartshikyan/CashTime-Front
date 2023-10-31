import React, { useCallback, useEffect, useState } from 'react';
import { gapi } from 'gapi-script';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import jwtDecode from 'jwt-decode';
import { GoogleLogin } from '@react-oauth/google';
import { loginRequest } from '../store/actions/users';
import Header from '../layouts/Header';
import Img from '../assets/images/login_img.svg';
import GoogleIcon from '../assets/images/Signup_google_icon.svg';
import LoginPasswordModal from '../components/LoginPasswordModal';

function Login() {
  const token = useSelector((state) => state.users.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [modalFlag, setModalFlag] = useState(false);
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
      console.log(payload);
      toast.error(`${payload?.message}`);

      // if (payload?.message === 'Invalid email or password') {
      //   toast.error(`${payload?.message}`);
      // } else if (payload?.message === 'deleted') {
      //   toast.error(`${payload?.message}`);
      // } else {
      //   toast.error('An error occurred. Please try again later.');
      // }
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

  const responseGoogle = async (response) => {
    const user = jwtDecode(response.credential);
    console.log(user);
    try {
      const { payload } = await dispatch(loginRequest({
        email: user.email,
        type: 'google',
      }));

      if (payload.status === 'ok' || payload.status === 'fulfilled') {
        navigate('/');
      }

      if (payload.status === 'error') {
        toast.error(`${payload?.message}`);
      }
      if (payload.status === 'deleted') {
        toast.error(`${payload?.status}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (token) {
    window.location.href = '/';
    return null;
  }
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
            <div className="googleLogin">
              <GoogleLogin
                render={(renderProps) => (
                  <button
                    type="button"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    <div className="signup__start__icon">
                      <div className="signup__start__icon__boxes">
                        <img src={GoogleIcon} alt="IMG" />
                      </div>
                    </div>
                  </button>
                )}
                buttonText="Login"
                onSuccess={responseGoogle}
                onError={responseGoogle}
                useOneTap
              />
            </div>

          </form>
          <div className="forgetPassword">
            <span className="login__account__span" />
            <button onClick={() => setModalFlag(true)} className="forgetPassword__btn" type="button">Forget your password?</button>
            <span className="login__account__span" />
          </div>
        </div>
        <div className="login__account">
          <span className="login__account__span" />
          <Link to="/sign-up">Don’t have an Account?</Link>
          <span className="login__account__span" />
        </div>
        <div className="login__image">
          <img src={Img} alt="" />
        </div>
        {modalFlag ? <LoginPasswordModal closeModal={setModalFlag} /> : null}

      </div>
    </>
  );
}

export default Login;
