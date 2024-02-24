import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getDeleteProfileGoogle,
  getDeleteProfileGoogleConfirm,
} from '../store/actions/users';

function ProfileDeleteModalGoogle({ closeModal }) {
  const [password, setPassword] = useState('');
  const validationCode = useSelector((state) => state.users.deleteProfileValidationCode);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDeleteProfileGoogle());
  }, []);
  console.log(validationCode);

  const handleDeleteProfile = useCallback(async () => {
    if (+password === validationCode) {
      const { payload } = await dispatch(getDeleteProfileGoogleConfirm());
      console.log(payload);
      window.localStorage.removeItem('token');
      window.location.reload();
    }
  }, [
    password,
  ]);
  return (
    <div className="profile-delete-modal">
      <div className="profile-delete-modal__small">
        <button onClick={() => closeModal(false)} type="button" className="profile-delete-modal__small__closeBtn">X</button>
        <p className="reset-password-modal__small__text">
          Dear user
          <br />
          To your email address
          mail has been sent
          confirmation code for account deletion.
          Please enter this code below:
        </p>

        <p className="profile-delete-modal__small__text">
          If you are sure you want to proceed and delete your account,
          enter the code that was sent to your email address
          mail and click
          &quot;Delete account&ldquo;.
          Otherwise, you can return to the main page of the site.
        </p>
        <input className="profile-delete-modal__small__input" maxLength={4} type="text" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button className="profile-delete-modal__small__btn" onClick={handleDeleteProfile} type="button">Delete Account</button>
        <p className="profile-delete-modal__small__text">
          We regret your decision to leave and hope that you can return to us in the future.
        </p>
      </div>
    </div>
  );
}

export default ProfileDeleteModalGoogle;
