import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { ReactComponent as Logo } from '../assets/images/header_logo.svg';
import Globe from '../assets/images/globe.svg';
import Avatar from '../assets/images/face.png';
import ChatBox from '../components/ChatBox';
import Languages from '../components/Languages';
import Notification from '../assets/images/notification.svg';
import ManuModal from '../components/ManuModal';

function Header() {
  const [isActiveModal, setIsActiveModal] = useState(false);
  const [isActiveLanguage, setIsActiveLanguage] = useState(false);
  const [isActiveManu, setIsActiveManu] = useState(false);
  const token = useSelector((state) => state.users.token);
  const ref = useRef(null);
  const languages = useRef(null);
  const manu = useRef(null);
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
  }, []);
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
  useEffect(() => {
    const handleOut = (event) => {
      if (manu.current && !manu.current.contains(event.target) && event.target.id !== 'dropdown-manu-button') {
        setIsActiveManu(false);
      }
    };
    document.addEventListener('click', handleOut);
    return () => {
      document.removeEventListener('click', handleOut);
    };
  }, [isActiveManu]);
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
  const handleManu = useCallback(() => {
    setIsActiveManu((prevState) => {
      let newFlag = false;
      if (prevState === false) {
        newFlag = true;
      } else if (prevState === true) {
        newFlag = false;
      }

      return newFlag;
    });
  }, [isActiveManu]);
  const handleModal = useCallback((e) => {
    console.log(e.target);
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
  const { t } = useTranslation();
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
            {token ? (
              <div className="header__menu__list">
                <ul>
                  <li><NavLink to="/messages">{t('manu_message')}</NavLink></li>
                  <li><NavLink to="/worker-offers">{t('manu_offer')}</NavLink></li>
                </ul>
              </div>
            ) : null}
            <div className="header__menu__block header-block">
              <button className="header__menu__block__globe" type="button" onClick={handleLanguage}>
                <img className="header__menu__block__globe__svg" src={Globe} alt="" id="dropdown-language-button" />
                <div ref={languages} className="languages__menu__list__bg">
                  {isActiveLanguage ? <Languages isShow={isActiveLanguage} /> : null}
                </div>
              </button>
              {token ? (
                <button className="header__menu__block__avatar" type="button" onClick={handleManu}>
                  <img className="header__menu__block__avatar__img" src={Avatar} alt="" id="dropdown-manu-button" />
                  <div ref={manu} className="settings__menu__modal-manu">
                    {isActiveManu ? <ManuModal /> : null}
                  </div>
                </button>
              ) : null}
              {token ? (
                <button className="header__menu__block__avatar" type="button" onClick={(e) => handleModal(e)}>
                  <img src={Notification} alt="" id="dropdown-button" />
                  <div ref={ref} className="header__menu__list__bg">
                    {isActiveModal ? <ChatBox /> : null}
                  </div>
                </button>
              ) : null}
              {!token ? (
                <NavLink to="/sign-up" className="header__menu__block-register" type="button">{t('manu_signUp')}</NavLink>
              ) : null}
              {!token ? (
                <NavLink to="/login" className="header__menu__block-login" type="button">{t('manu_login')}</NavLink>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
