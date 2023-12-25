import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as Logo } from '../assets/images/header_logo.svg';
import Globe from '../assets/images/globe.svg';
import MessageIcon from '../assets/images/message-icon.svg';
import ChatBox from '../components/ChatBox';
import Languages from '../components/Languages';
import Notification from '../assets/images/notification.svg';
import ManuModal from '../components/ManuModal';
import { newMessages } from '../store/actions/messages';
import { noticeList } from '../store/actions/notice';

function Header() {
  const { REACT_APP_API_URL } = process.env;
  const [isActiveModal, setIsActiveModal] = useState(false);
  const [isActiveLanguage, setIsActiveLanguage] = useState(false);
  const [isActiveManu, setIsActiveManu] = useState(false);
  const profile = useSelector((state) => state.users.profile);
  const token = useSelector((state) => state.users.token);
  const newMessagesCount = useSelector((state) => state.messages.newMessagesCount);
  const dispatch = useDispatch();
  const ref = useRef(null);
  const languages = useRef(null);
  const manu = useRef(null);
  const activeLanguage = window.localStorage.getItem('language');
  useEffect(() => {
    dispatch(noticeList({ page: 1, limit: 10 }));
  }, []);
  const count = useSelector((state) => state.notices.count);
  useEffect(() => {
    dispatch(newMessages());
  }, [newMessagesCount]);
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
                  <li>
                    <NavLink to="/offer">
                      {profile?.role === 'employer' ? 'Employees' : t('header_jobs_button')}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/worker-offers">
                      {t('manu_offer')}
                    </NavLink>
                  </li>
                  {profile?.role === 'employer' ? (
                    <li>
                      <NavLink to="/create-job" className="header__menu__list-offer">
                        <strong>+</strong>
                        New Project
                      </NavLink>
                    </li>
                  ) : null}
                  <li>
                    <NavLink to="/messages" className="header__menu__list-message">
                      <img src={MessageIcon} alt="" />
                    </NavLink>
                    {newMessagesCount >= 99 ? <span className="header__menu__list-message-text">{newMessagesCount}</span> : null}
                    {newMessagesCount !== 0 && newMessagesCount < 99 ? <span className="header__menu__list-message-text">{newMessagesCount}</span> : null}
                  </li>
                </ul>
              </div>
            ) : null}
            <div className="header__menu__block header-block">
              <button className="header__menu__block__globe" type="button" onClick={handleLanguage}>
                <img className="header__menu__block__globe__svg" src={Globe} alt="" id="dropdown-language-button" />
                <div ref={languages} className="languages__menu__list__bg">
                  {isActiveLanguage ? <Languages isShow={isActiveLanguage} /> : null}
                </div>
                <p className="header__menu__block__globe-lang-text">
                  {activeLanguage ?? 'en'}
                </p>
              </button>
              {token ? (
                <button className="header__menu__block__avatar" type="button" onClick={(e) => handleModal(e)}>
                  {count >= 99 ? <span className="header__menu__block__notice__count">{count}</span> : null}
                  {count !== 0 && count < 99 ? <span className="header__menu__block__notice__count">{count}</span> : null}
                  <img src={Notification} alt="" id="dropdown-button" />
                  <div ref={ref} className="header__menu__list__bg">
                    {isActiveModal ? <ChatBox setIsActive={setIsActiveModal} /> : null}
                  </div>
                </button>
              ) : null}
              {token ? (
                <button className="header__menu__block__avatar" type="button" onClick={handleManu}>
                  {/* eslint-disable-next-line no-unsafe-optional-chaining */}
                  <img className="header__menu__block__avatar__img" src={REACT_APP_API_URL + profile?.avatar} alt="" id="dropdown-manu-button" />
                  <div ref={manu} className="settings__menu__modal-manu">
                    {isActiveManu ? <ManuModal setIsActiveManu={setIsActiveManu} /> : null}
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
