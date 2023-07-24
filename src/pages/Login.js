import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../layouts/Header';
import Img from '../assets/images/login_img.svg';

function Login() {
  return (
    <>
      <Header />
      <div className="login">
        <div className="login__title">
          <h3>Log In To CashApp</h3>
        </div>
        <div className="login__form">
          <form action="">
            <label className="email" htmlFor="email">
              <input placeholder="Email" type="email" id="email" />
            </label>
            <label className="password" htmlFor="password">
              <input placeholder="Password" type="password" id="password" />
            </label>
            <button type="submit">
              Continue with Email
            </button>
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
