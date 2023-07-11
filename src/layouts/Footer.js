import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/header_logo.svg';
import DownloadIcon from '../assets/images/get_it_on_google_play.png';
import ig from '../assets/images/ig.svg';
import fb from '../assets/images/fb.svg';
import linkedIn from '../assets/images/linkedIn.svg';
import tw from '../assets/images/tw.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__row">
          <div className="footer__logo__and__social__media">
            <div className="footer__logo">
              <Link to="/">
                <img src={Logo} className="footer__logo__img" alt="footer__logo" />
              </Link>
            </div>
            <div className="footer_social_media">
              <Link to="/">
                <img src={fb} className="footer__social__media__link" alt="fb" />
              </Link>
              <Link to="/">
                <img src={ig} className="footer__social__media__link" alt="ig" />
              </Link>
              <Link to="/">
                <img src={tw} className="footer__social__media__link" alt="tw" />
              </Link>
              <Link to="/">
                <img src={linkedIn} className="footer__social__media__link" alt="linkedIn" />
              </Link>
            </div>
          </div>
          <div className="footer__links">
            <div id="footer__links__col_one" className="footer__links__col">
              <Link className="footer_link" to="/">Menu</Link>
              <Link className="footer_link" to="/">Home</Link>
              <Link className="footer_link" to="/">About</Link>
              <Link className="footer_link" to="/">Register</Link>
              <Link className="footer_link" to="/">Contacts</Link>
            </div>
            <div id="footer__links__col_two" className="footer__links__col">
              <Link className="footer_link" to="/">Menu</Link>
              <Link className="footer_link" to="/">Home</Link>
              <Link className="footer_link" to="/">About</Link>
              <Link className="footer_link" to="/">Register</Link>
              <Link className="footer_link" to="/">Contacts</Link>
            </div>
            <div id="footer__links__col_three" className="footer__links__col">
              <Link className="footer_link" to="/">Menu</Link>
              <Link className="footer_link" to="/">Home</Link>
              <Link className="footer_link" to="/">About</Link>
              <Link className="footer_link" to="/">Register</Link>
              <Link className="footer_link" to="/">Contacts</Link>
            </div>
            <div id="footer__links__col_four" className="footer__links__col">
              <Link className="footer_link" to="/">Menu</Link>
              <Link className="footer_link" to="/">Home</Link>
              <Link className="footer_link" to="/">About</Link>
              <Link className="footer_link" to="/">Register</Link>
              <Link className="footer_link" to="/">Contacts</Link>
            </div>
          </div>
          <div className="footer__copyright">
            <h4 className="footer__copyright__text">Copyright © 2023 WorkfromHome. All Rights Reserved</h4>
            <img className="footer_download_icon" src={DownloadIcon} alt="get_it_on_google_play" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
