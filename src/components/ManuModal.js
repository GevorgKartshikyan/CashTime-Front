import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Settings from '../assets/images/settings.svg';
import SignOut from '../assets/images/signOut.svg';
import Profile from '../assets/images/icons.svg';
// import Delete from '../assets/images/delete.svg';
import History from '../assets/images/history.svg';
import Switch from '../assets/images/switch.svg';
import { changeRole } from '../store/actions/users';

function ManuModal(props) {
  const { setIsActiveManu } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignOut = useCallback(() => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  }, []);
  const handleSwitch = useCallback(() => {
    dispatch(changeRole());
    setIsActiveManu(false);
  }, []);
  return (
    <div role="presentation" onClick={(e) => e.stopPropagation()} className="manu-modal">
      <button type="button" className="manu-modal__line" onClick={() => navigate('/profile')}>
        <img className="manu-modal__line__img" src={Profile} alt="" />
        <span className="manu-modal__line__text">Profile</span>
      </button>
      <button type="button" className="manu-modal__line" onClick={() => navigate('/history')}>
        <img className="manu-modal__line__img" src={History} alt="" />
        <span className="manu-modal__line__text">History</span>
      </button>
      <button type="button" onClick={() => handleSwitch()} className="manu-modal__line">
        <img className="manu-modal__line__img" src={Switch} alt="" />
        <span className="manu-modal__line__text">Switch Account</span>
      </button>
      <button type="button" className="manu-modal__line" onClick={() => navigate('/settings')}>
        <img className="manu-modal__line__img" src={Settings} alt="" />
        <span className="manu-modal__line__text">Settings</span>
      </button>
      <button type="button" className="manu-modal__line" onClick={() => handleSignOut()}>
        <img className="manu-modal__line__img" src={SignOut} alt="" />
        <span className="manu-modal__line__text">Sign out</span>
      </button>
    </div>
  );
}

export default ManuModal;
