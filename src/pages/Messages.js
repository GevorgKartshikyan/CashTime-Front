import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../layouts/Header';
import searchIcon from '../assets/images/search_messages.svg';
import userAvatar from '../assets/images/message_user_avatar.svg';
import sendMessage from '../assets/images/send_message.svg';
import UserMessageBlock from '../components/User-message-block';

function Messages() {
  const token = useSelector((state) => state.users.token);
  if (!token) {
    window.location.href = '/login';
    return null;
  }
  return (
    <>
      <Header />
      <div className="messages">
        <div className="messages__left">
          <div className="messages__left__title">
            <h3>Messages</h3>
          </div>
          <div className="messages__left__search">
            <label htmlFor="search_message_input">
              <input type="text" placeholder="Search Messages" id="search_message_input" />
              <img src={searchIcon} alt="" />
            </label>
          </div>
          <div className="messages__left__list">
            <div className="messages__left__list__scroll">
              <UserMessageBlock name="Amanelia M." message="I’ll Be there in 3 minutes" date="2min ago" img={userAvatar} />
              <UserMessageBlock name="Amanelia M." message="I’ll Be there in 3 minutes" date="2min ago" img={userAvatar} />
              <UserMessageBlock name="Amanelia M." message="I’ll Be there in 3 minutes" date="2min ago" img={userAvatar} />
              <UserMessageBlock name="Amanelia M." message="I’ll Be there in 3 minutes" date="2min ago" img={userAvatar} />
              <UserMessageBlock name="Amanelia M." message="I’ll Be there in 3 minutes" date="2min ago" img={userAvatar} />
              <UserMessageBlock name="Amanelia M." message="I’ll Be there in 3 minutes" date="2min ago" img={userAvatar} />
              <UserMessageBlock name="Amanelia M." message="I’ll Be there in 3 minutes" date="2min ago" img={userAvatar} />
              <UserMessageBlock name="Amanelia M." message="I’ll Be there in 3 minutes" date="2min ago" img={userAvatar} />
              <UserMessageBlock name="Amanelia M." message="I’ll Be there in 3 minutes" date="2min ago" img={userAvatar} />
              <UserMessageBlock name="Amanelia M." message="I’ll Be there in 3 minutes" date="2min ago" img={userAvatar} />
            </div>
          </div>
        </div>
        <div className="messages__right">
          <div className="messages__right__user">
            <div className="messages__right__user__avatar">
              <img src={userAvatar} alt="" />
            </div>
            <div className="messages__right__user__name">
              <h3>Amanelia M.</h3>
            </div>
          </div>
          <div className="messages__right__list">
            <div className="messages__right__list__scroll">
              <div className="messages__right__list_right">
                <img src={userAvatar} alt="" />
                <p>I’ll Be there Soon</p>
              </div>
              <div className="messages__right__list_right">
                <img src={userAvatar} alt="" />
                <p>I’ll Be there Soon</p>
              </div>
              <div className="messages__right__list_right">
                <img src={userAvatar} alt="" />
                <p>I’ll Be there Soon</p>
              </div>
              <div className="messages__right__list_right">
                <img src={userAvatar} alt="" />
                <p>I’ll Be there Soon</p>
              </div>
              <div className="messages__right__list_right">
                <img src={userAvatar} alt="" />
                <p>I’ll Be there Soon</p>
              </div>
              <div className="messages__right__list_right">
                <img src={userAvatar} alt="" />
                <p>I’ll Be there Soon</p>
              </div>
              <div className="messages__right__list_right">
                <img src={userAvatar} alt="" />
                <p>I’ll Be there Soon</p>
              </div>
              <div className="messages__right__list_right">
                <img src={userAvatar} alt="" />
                <p>I’ll Be there Soon</p>
              </div>
              <div className="messages__right__list_left">
                <img src={userAvatar} alt="" />
                <p>Wow, this is really epic</p>
              </div>
              <div className="messages__right__list_left">
                <img src={userAvatar} alt="" />
                <p>Wow, this is really epic</p>
              </div>
            </div>
          </div>
          <div className="messages__right__send">
            <label htmlFor="send_message_input">
              <input type="text" placeholder="type a message" id="send_message_input" />
              <img src={sendMessage} alt="" />
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Messages;
