import React, { useCallback, useState } from 'react';
import userImg from '../assets/images/chatbox_user.svg';

function ChatBoxCard() {
  const [activate, setActivate] = useState(false);
  const [show, setShow] = useState(true);
  const [result, setResult] = useState('');

  const handleClose = useCallback((e, res) => {
    setShow(false);
    setResult(res);
    e.stopPropagation();
  }, [result]);

  return (
    <div className="chatBoxCard">
      <div className="chatBoxCard__img">
        <img src={userImg} alt="" />
      </div>
      <div className="chatBoxCard__info">
        <div className="chatBoxCard__info__text">
          <p>You’ve received a request from Nikitta</p>
        </div>
        { show && (
          <div className="chatBoxCard__info__buttons">
            <button onClick={(e) => handleClose(e, '0')} className="chatBoxCard__info__buttons__cancel" type="button">Cancel</button>
            <button onClick={(e) => handleClose(e, '1')} className="chatBoxCard__info__buttons__accept" type="button">Accept</button>
          </div>
        )}
      </div>
      <div className="chatBoxCard__settings" role="presentation" onClick={() => setActivate(!activate)}>
        <span />
        <span />
        <span />
      </div>
      {activate
        ? (
          <div className="notification__menu__list__bg">
            <div className="notification">
              <p className="notification__report">Report Notification</p>
              <p className="notification__delete">Delete</p>
            </div>
          </div>
        ) : null}
    </div>
  );
}

export default ChatBoxCard;
