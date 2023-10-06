import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { resetPassword, resetPasswordConfirm } from '../store/actions/users';
import saveIcon from '../assets/images/saveIcon.png';

function LoginPasswordModal({ closeModal }) {
  const [validationCode, setValidationCode] = useState(false);
  const [finishConfirmPassword, setFinishConfirmPassword] = useState(false);
  const [code, setCode] = useState('');
  const [backValidationCode, setBackValidationCode] = useState(0);
  const [newPasswordModal, setNewPasswordModal] = useState(false);
  const [sendEmail, setSendEmail] = useState('');
  const [showError, setShowError] = useState('');
  console.log(sendEmail);
  const [newPassword, setNewPassword] = useState({
    firstPassword: '',
    secondPassword: '',
  });
  const dispatch = useDispatch();
  const handleSendEmail = useCallback(async () => {
    const { payload } = await dispatch(resetPassword({
      userEmail: sendEmail,
    }));
    console.log(payload);
    if (payload.status === 'ok') {
      setValidationCode(true);
      setBackValidationCode(payload.validationCode);
      setShowError('');
    } else {
      setShowError('Email is not defined');
    }
  }, [sendEmail]);

  const handleSendCode = useCallback(() => {
    if (code.toString() === backValidationCode.toString()) {
      setNewPasswordModal(true);
      setShowError('');
    } else {
      setShowError('Invalid code');
    }
  }, [code, backValidationCode]);

  const handleSendNewInfo = useCallback(async () => {
    if (newPassword.firstPassword.length && newPassword.firstPassword.length) {
      if (newPassword.firstPassword === newPassword.secondPassword) {
        const { payload } = await dispatch(resetPasswordConfirm({
          userEmail: sendEmail,
          newPassword: newPassword.firstPassword,
        }));
        setShowError('');
        if (payload.status === 'ok') {
          setTimeout(() => {
            closeModal(false);
          }, 3000);
          setValidationCode(false);
          setCode('');
          setBackValidationCode(0);
          setSendEmail('');
          setShowError('');
          setNewPassword({
            firstPassword: '',
            secondPassword: '',
          });
          setFinishConfirmPassword(true);
        }
      } else {
        setShowError('Two passwords must be the same');
      }
    }
  });

  return (
    <div>
      {
      finishConfirmPassword ? (
        <div className="login__forgetPassword-modal">
          <div className="login__forgetPassword-modal__smallBox">
            <div className="login__forgetPassword-modal__smallBox__imgBox">
              <img className="login__forgetPassword-modal__smallBox__imgBox__img" src={saveIcon} alt="IMG" />
            </div>
            <p className="login__forgetPassword-modal__smallBox__saved">Password saved</p>
          </div>
        </div>
      )

        : (
          <div className="login__forgetPassword-modal">

            {
            newPasswordModal
              ? (
                <div className="login__forgetPassword-modal__smallBox">
                  <button onClick={() => closeModal(false)} type="button" className="login__forgetPassword-modal__smallBox__closeBtn">X</button>
                  <p className="login__forgetPassword-modal__smallBox__textPasswordFirst">New password</p>
                  <input
                    value={newPassword.firstPassword}
                    onChange={(ev) => setNewPassword(
                      { ...newPassword, firstPassword: ev.target.value },
                    )}
                    type="text"
                    className="login__forgetPassword-modal__smallBox__input"
                  />
                  <p className="login__forgetPassword-modal__smallBox__textPassword">Confirm new password</p>
                  <input
                    value={newPassword.secondPassword}
                    onChange={(ev) => setNewPassword(
                      { ...newPassword, secondPassword: ev.target.value },
                    )}
                    type="password"
                    className="login__forgetPassword-modal__smallBox__input"
                  />
                  {showError
                    ? (
                      <div className="login__forgetPassword-modal__smallBox__errorText">
                        <p className="login__forgetPassword-modal__smallBox__errorText__text">{showError}</p>
                      </div>
                    )
                    : (
                      <div className="login__forgetPassword-modal__smallBox__errorText">
                        <p className="login__forgetPassword-modal__smallBox__errorText" />
                      </div>
                    )}
                  <button onClick={handleSendNewInfo} type="button" className="login__forgetPassword-modal__smallBox__btn">Save</button>
                </div>
              )

              : (
                <div className="login__forgetPassword-modal__smallBox">
                  {validationCode ? (
                    <>
                      <button onClick={() => closeModal(false)} type="button" className="login__forgetPassword-modal__smallBox__closeBtn">X</button>
                      <p className="login__forgetPassword-modal__text">
                        Уважаемый пользователь.
                        <br />
                        На ваш адрес электронной
                        почты был отправлен
                        код подтверждения для смены пароля.
                        Пожалуйста, введите этот код ниже:
                      </p>
                      <input
                        type="text"
                        value={code}
                        onChange={(ev) => setCode(ev.target.value)}
                        className="login__forgetPassword-modal__smallBox__input"
                      />
                      {showError
                        ? (
                          <div className="login__forgetPassword-modal__smallBox__errorText">
                            <p className="login__forgetPassword-modal__smallBox__errorText__text">{showError}</p>
                          </div>
                        )
                        : (
                          <div className="login__forgetPassword-modal__smallBox__errorText">
                            <p className="login__forgetPassword-modal__smallBox__errorText" />
                          </div>
                        )}
                      <button type="button" onClick={handleSendCode} className="login__forgetPassword-modal__smallBox__btn">Send</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => closeModal(false)} type="button" className="login__forgetPassword-modal__smallBox__closeBtn">X</button>
                      <p className="login__forgetPassword-modal__smallBox__text">Please enter your email</p>
                      <input
                        type="text"
                        onChange={(ev) => setSendEmail(ev.target.value)}
                        value={sendEmail}
                        className="login__forgetPassword-modal__smallBox__input"
                      />
                      {showError
                        ? (
                          <div className="login__forgetPassword-modal__smallBox__errorText">
                            <p className="login__forgetPassword-modal__smallBox__errorText__text">{showError}</p>
                          </div>
                        )
                        : (
                          <div className="login__forgetPassword-modal__smallBox__errorText">
                            <p className="login__forgetPassword-modal__smallBox__errorText" />
                          </div>
                        )}
                      <button onClick={handleSendEmail} type="button" className="login__forgetPassword-modal__smallBox__btn">Send</button>
                    </>
                  )}
                </div>
              )
          }
          </div>
        )
    }
    </div>
  );
}

export default LoginPasswordModal;
