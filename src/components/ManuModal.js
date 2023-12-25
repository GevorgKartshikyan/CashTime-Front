import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import Settings from '../assets/images/settings.svg';
import { t } from 'i18next';
import SignOut from '../assets/images/signOut.svg';
import Profile from '../assets/images/icons.svg';
// import Delete from '../assets/images/delete.svg';
// import History from '../assets/images/history.svg';
import Switch from '../assets/images/switch.svg';
import { changeRole } from '../store/actions/users';
import completedWork from '../assets/images/completed-order-svgrepo-com.svg';

function ManuModal(props) {
  const { setIsActiveManu } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignOut = useCallback(() => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  }, []);
  const handleSwitch = useCallback(async () => {
    const { payload } = await dispatch(changeRole());
    if (payload.status === 'ok') {
      window.location.reload();
    }
    setIsActiveManu(false);
  }, []);
  return (
    <div role="presentation" onClick={(e) => e.stopPropagation()} className="manu-modal">
      <button type="button" className="manu-modal__line" onClick={() => navigate('/profile')}>
        <img className="manu-modal__line__img" src={Profile} alt="" />
        <span className="manu-modal__line__text">{t('header_menu_profile')}</span>
      </button>
      <button type="button" className="manu-modal__line" onClick={() => navigate('/confirm-review')}>
        <img className="manu-modal__line__img" src={completedWork} alt="" />
        <span className="manu-modal__line__text">Completed Works</span>
      </button>
      <button type="button" onClick={() => handleSwitch()} className="manu-modal__line">
        <img className="manu-modal__line__img" src={Switch} alt="" />
        <span className="manu-modal__line__text">{t('header_menu_switch')}</span>
      </button>
      {/* eslint-disable-next-line max-len */}
      {/* <button type="button" className="manu-modal__line" onClick={() => navigate('/settings')}> */}
      {/*   <img className="manu-modal__line__img" src={Settings} alt="" /> */}
      {/*   <span className="manu-modal__line__text">Settings</span> */}
      {/* </button> */}
      <button type="button" className="manu-modal__line" onClick={() => handleSignOut()}>
        <img className="manu-modal__line__img" src={SignOut} alt="" />
        <span className="manu-modal__line__text">{t('header_menu_sign_out')}</span>
      </button>
    </div>
  );
}

export default ManuModal;
