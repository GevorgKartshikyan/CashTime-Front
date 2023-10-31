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
          Уважаемый пользователь.
          <br />
          На ваш адрес электронной
          почты был отправлен
          код подтверждения для удаление аккаунта.
          Пожалуйста, введите этот код ниже:
        </p>

        <p className="profile-delete-modal__small__text">
          Если вы уверены, что хотите продолжить и удалить свой аккаунт,
          введите код который был отправлен на ваш адрес электронной
          почты и нажмите
          &quot;Удалить аккаунт&ldquo;.
          В противном случае вы можете вернуться на главную страницу сайта.
        </p>
        <input className="profile-delete-modal__small__input" maxLength={4} type="text" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button className="profile-delete-modal__small__btn" onClick={handleDeleteProfile} type="button">Delete Account</button>
        <p className="profile-delete-modal__small__text">
          Мы сожалеем о вашем решении уйти и надеемся, что в будущем вы можете вернуться к нам.
        </p>
      </div>
    </div>
  );
}

export default ProfileDeleteModalGoogle;
