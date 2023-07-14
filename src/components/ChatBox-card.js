import React from 'react';
import userImg from '../assets/images/chatbox_user.svg';

function ChatBoxCard() {
  return (
    <div className="chatBoxCard">
      <div className="chatBoxCard__img">
        <img src={userImg} alt="" />
      </div>
      <div className="chatBoxCard__info">
        <div className="chatBoxCard__info__text">
          <p>You’ve received a request from Nikitta</p>
        </div>
        <div className="chatBoxCard__info__buttons">
          <button className="chatBoxCard__info__buttons__cancel" type="button">Cancel</button>
          <button className="chatBoxCard__info__buttons__accept" type="button">Accept</button>
        </div>
      </div>
      <div className="chatBoxCard__settings">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

export default ChatBoxCard;
