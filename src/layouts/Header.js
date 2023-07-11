import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// import Home from '../pages/Home';
import { ReactComponent as Logo } from '../assets/images/header_logo.svg';
import { ReactComponent as Globe } from '../assets/images/globe.svg';
import { ReactComponent as Avatar } from '../assets/images/avatar.svg';

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
            <div className="header__menu__list">
              <ul>
                <li><NavLink to="/">Messages</NavLink></li>
                <li><NavLink to="/">Main</NavLink></li>
                <li><NavLink to="/">Offer</NavLink></li>
                <li><NavLink to="/">Profile</NavLink></li>
              </ul>
            </div>
            <div className="header__menu__block header-block">
              <button className="header__menu__block-register" type="button">Sign Up</button>
              <button className="header__menu__block-login" type="button">Log In</button>
              <Globe className="header__menu__block__globe" />
              <Avatar />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
