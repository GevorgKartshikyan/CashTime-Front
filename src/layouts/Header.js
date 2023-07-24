import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Link, NavLink } from 'react-router-dom';
// import Home from '../pages/Home';
import { ReactComponent as Logo } from '../assets/images/header_logo.svg';
import Globe from '../assets/images/globe.svg';
import Avatar from '../assets/images/avatar.svg';
import ChatBox from '../components/ChatBox';
import Languages from '../components/Languages';
import Notification from '../components/Notification';

function Header() {
  const [isActiveModal, setIsActiveModal] = useState(false);
  const [isActiveLanguage, setIsActiveLanguage] = useState(false);
  const ref = useRef(null);
  const languages = useRef(null);
  useEffect(() => {
    const handleOut = (event) => {
      if (languages.current && !languages.current.contains(event.target) && event.target.id !== 'dropdown-language-button') {
        setIsActiveLanguage(false);
      }
    };
    document.addEventListener('click', handleOut);
    return () => {
      document.removeEventListener('click', handleOut);
    };
  }, [isActiveLanguage]);
  useEffect(() => {
    const handleOut = (event) => {
      if (ref.current && !ref.current.contains(event.target) && event.target.id !== 'dropdown-button') {
        setIsActiveModal(false);
      }
    };
    document.addEventListener('click', handleOut);
    return () => {
      document.removeEventListener('click', handleOut);
    };
  }, [isActiveModal]);
  const handleLanguage = useCallback(() => {
    setIsActiveLanguage((prevState) => {
      let newFlag = false;
      if (prevState === false) {
        newFlag = true;
      } else if (prevState === true) {
        newFlag = false;
      }

      return newFlag;
    });
  }, [isActiveLanguage]);
  const handleModal = useCallback(() => {
    setIsActiveModal((prevState) => {
      let newFlag = false;
      if (prevState === false) {
        newFlag = true;
      } else if (prevState === true) {
        newFlag = false;
      }

      return newFlag;
    });
  }, [isActiveModal]);
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
                <li><NavLink to="/messages">Messages</NavLink></li>
                <li><NavLink to="/">Main</NavLink></li>
                <li><NavLink to="/offer">Offer</NavLink></li>
                <li><NavLink to="/profile">Profile</NavLink></li>
              </ul>
            </div>
            <div className="header__menu__block header-block">
              <button className="header__menu__block-register" type="button">Sign Up</button>
              <button className="header__menu__block-login" type="button">Log In</button>
              <button className="header__menu__block__globe" type="button" onClick={handleLanguage}>
                <img src={Globe} alt="" id="dropdown-language-button" />
              </button>
              <button className="header__menu__block__avatar" type="submit" onClick={handleModal}>
                <img src={Avatar} alt="" id="dropdown-button" />
              </button>
            </div>
          </div>
        </div>
        <div ref={ref} className="header__menu__list__bg">
          {isActiveModal ? <ChatBox /> : null}
        </div>
        <div ref={languages} className="languages__menu__list__bg">
          {isActiveLanguage ? <Languages /> : null}
        </div>
        <div className="notification__menu__list__bg">
          <Notification />
        </div>
      </div>
    </header>
  );
}

export default Header;
