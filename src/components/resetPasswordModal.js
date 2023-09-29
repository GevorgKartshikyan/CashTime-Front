import React, { useState } from 'react';

function ResetPasswordModal({ closeModal }) {
  const [resetPassword, setResetPassword] = useState(false);
  const [validationCode, setValidationCode] = useState('');
  const [newPassword, setNewPassword] = useState({
    firstPassword: '',
    secondPassword: '',
  });
  return (
    <div className="reset-password-modal">
      {resetPassword
        ? (
          <div className="reset-password-modal__small">
            <button onClick={() => closeModal(false)} type="button" className="reset-password-modal__small__closeBtn">X</button>
            <p className="reset-password-modal__small__text">New password</p>
            <input value={newPassword.firstPassword} maxLength={32} className="reset-password-modal__small__input" type="text" onChange={(ev) => setNewPassword({ ...newPassword, firstPassword: ev.target.value })} />
            <p className="reset-password-modal__small__text">Confirm new password</p>
            <input value={newPassword.secondPassword} maxLength={32} className="reset-password-modal__small__input" type="text" onChange={(ev) => setNewPassword({ ...newPassword, secondPassword: ev.target.value })} />
            <button className="reset-password-modal__small__btn" type="button">Save</button>
          </div>
        )
        : (
          <div className="reset-password-modal__small">
            <button onClick={() => closeModal(false)} type="button" className="reset-password-modal__small__closeBtn">X</button>
            <p className="reset-password-modal__small__text">
              Уважаемый пользователь.
              <br />
              На ваш адрес электронной
              почты был отправлен
              код подтверждения для смены пароля.
              Пожалуйста, введите этот код ниже:
            </p>
            <input value={validationCode} maxLength={4} className="reset-password-modal__small__input" type="text" onChange={(ev) => setValidationCode(ev.target.value)} />
            <button onClick={() => setResetPassword(true)} className="reset-password-modal__small__btn" type="button">Continue</button>
          </div>
        )}

    </div>
  );
}

export default ResetPasswordModal;
