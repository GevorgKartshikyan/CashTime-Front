import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// import Home from '../pages/Home';
import { ReactComponent as Logo } from '../assets/images/header_logo.svg';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <div className="header__logo">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div className="header__menu">
            <ul>
              <li><NavLink to="/">Messages</NavLink></li>
              <li><NavLink to="/">Main</NavLink></li>
              <li><NavLink to="/">Offer</NavLink></li>
              <li><NavLink to="/">Profile</NavLink></li>
              <li><NavLink to="/">Sign Up</NavLink></li>
              <li><NavLink to="/">Log In</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
