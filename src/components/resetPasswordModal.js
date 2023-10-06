import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword, resetPasswordConfirm } from '../store/actions/users';
import saveIcon from '../assets/images/saveIcon.png';

function ResetPasswordModal({ closeModal }) {
  const [resetPasswordFlag, setResetPasswordFlag] = useState(false);
  const [validationCodeError, setValidationCodeError] = useState('');
  const [validationCode, setValidationCode] = useState('');
  const [passwordSaved, setPasswordSaved] = useState(false);
  const userId = useSelector((state) => state.users.profile.id);
  const dispatch = useDispatch();
  const resetPasswordValidationCode = useSelector(
    (state) => state.users.resetPasswordValidationCode,
  );
  const [newPassword, setNewPassword] = useState({
    firstPassword: '',
    secondPassword: '',
  });
  useEffect(() => {
    dispatch(resetPassword({
      userId,
    }));
  }, []);
  const checkValidationCode = useCallback(() => {
    if (validationCode === resetPasswordValidationCode.toString()) {
      setResetPasswordFlag(true);
      setValidationCodeError('');
    } else {
      setValidationCodeError('Invalid Verification Code');
    }
  }, [resetPasswordFlag, validationCode, resetPasswordValidationCode, validationCodeError]);
  const addNewPassword = useCallback(async () => {
    if (newPassword.firstPassword === newPassword.secondPassword) {
      const { payload } = await dispatch(resetPasswordConfirm({
        userId,
        newPassword: newPassword.firstPassword,
      }));
      if (payload.status === 'ok') {
        setPasswordSaved(true);
        setTimeout(() => {
          setValidationCodeError('');
          setPasswordSaved(false);
          setResetPasswordFlag(false);
          closeModal(false);
          newPassword.firstPassword = '';
          newPassword.secondPassword = '';
        }, 3000);
      }
      setValidationCodeError('');
    } else {
      setValidationCodeError('Invalid Password');
    }
  }, [newPassword.firstPassword, newPassword.secondPassword, validationCodeError]);

  return (
    <div className="reset-password-modal">
      {resetPasswordFlag
        ? (
          <div className="reset-password-modal__small">
            {passwordSaved ? (
              <>
                <div className="reset-password-modal__small__imgBox">
                  <img className="reset-password-modal__small__imgBox__img" src={saveIcon} alt="img" />
                </div>
                <p className="reset-password-modal__small__savedPassword">Password saved</p>
              </>
            ) : (
              <>
                <button onClick={() => closeModal(false)} type="button" className="reset-password-modal__small__closeBtn">X</button>
                <p className="reset-password-modal__small__text">New password</p>
                <input value={newPassword.firstPassword} maxLength={32} className="reset-password-modal__small__input" type="text" onChange={(ev) => setNewPassword({ ...newPassword, firstPassword: ev.target.value })} />
                <p className="reset-password-modal__small__text">Confirm new password</p>
                <input value={newPassword.secondPassword} maxLength={32} className="reset-password-modal__small__input" type="text" onChange={(ev) => setNewPassword({ ...newPassword, secondPassword: ev.target.value })} />
                {validationCodeError
                  ? (
                    <div className="reset-password-modal__small__errorBox">
                      <p className="reset-password-modal__small__errorBox__error">{validationCodeError}</p>
                    </div>
                  )
                  : (
                    <div className="reset-password-modal__small__errorBox">
                      {/* <p className="reset-password-modal__small__errorBox__error">bbb</p> */}
                    </div>
                  )}
                <button className="reset-password-modal__small__btn" type="button" onClick={addNewPassword}>Save</button>
              </>
            )}

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
            {validationCodeError
              ? (
                <div className="reset-password-modal__small__errorBox">
                  <p className="reset-password-modal__small__errorBox__error">{validationCodeError}</p>
                </div>
              )
              : (
                <div className="reset-password-modal__small__errorBox">
                  {/* <p className="reset-password-modal__small__errorBox__error">bbb</p> */}
                </div>
              )}
            <button onClick={checkValidationCode} className="reset-password-modal__small__btn" type="button">Continue</button>
          </div>
        )}

    </div>
  );
}

export default ResetPasswordModal;
