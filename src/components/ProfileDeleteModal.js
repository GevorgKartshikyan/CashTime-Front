import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteProfile } from '../store/actions/users';

function ProfileDeleteModal({ closeModal }) {
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const handleDeleteProfile = useCallback(async () => {
    const { payload } = await dispatch(deleteProfile(password));
    if (payload.status === 'ok') {
      localStorage.removeItem('token');
      window.location.reload();
    }
  }, [
    password,
  ]);
  return (
    <div className="profile-delete-modal">
      <div className="profile-delete-modal__small">
        <button onClick={() => closeModal(false)} type="button" className="profile-delete-modal__small__closeBtn">X</button>
        <h3 className="profile-delete-modal__small__title">Type Password</h3>
        <input className="profile-delete-modal__small__input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button className="profile-delete-modal__small__btn" onClick={handleDeleteProfile} type="button">Delete Account</button>

        <p className="profile-delete-modal__small__text">
          If you are sure you want to proceed and delete your account,
          enter your password and click
          &quot;Delete account&ldquo;.
          Otherwise, you can return to the main page of the site.
        </p>
        <p className="profile-delete-modal__small__text">
          We regret your decision to leave and hope that you can return to us in the future.
        </p>
      </div>
    </div>
  );
}

export default ProfileDeleteModal;
