import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import VisibilitySensor from 'react-visibility-sensor';
import Header from '../layouts/Header';
import searchIcon from '../assets/images/search_messages.svg';
import sendMessage from '../assets/images/send_message.svg';
import UserMessageBlock from '../components/User-message-block';
import {
  getMessagesList, newMessages, openMessage, sendMessages,
} from '../store/actions/messages';
import { getProfile, getSingleUser, listRequest } from '../store/actions/users';
import CheckIcon from '../assets/images/message_seen_icon.jpg';

function Messages() {
  const { REACT_APP_API_URL } = process.env;
  const token = useSelector((state) => state.users.token);
  const messages = useSelector((state) => state.messages.messages);
  const usersForMessages = useSelector((state) => state.users.usersForMessages);
  const singleUser = useSelector((state) => state.users.singleUser);
  const profile = useSelector((state) => state.users.profile);
  const { friendId } = useParams();
  const [text, setText] = useState('');
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();
  const conversation = useRef();

  const handleSendMessage = useCallback(() => {
    if (text) {
      dispatch(sendMessages({
        text,
        friendId,
        files: null,
      }));
      setText('');
      dispatch(listRequest({
        page: 1, limit: 150, role: 'employer', search: searchText,
      }));
    }
  }, [text]);

  const handleEnterKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  useEffect(() => {
    dispatch(getMessagesList({ friendId }));
    dispatch(listRequest({
      page: 1, limit: 150, role: '', search: searchText,
    }));
  }, [friendId, searchText]);

  useEffect(() => {
    if (friendId) {
      dispatch(getSingleUser(friendId));
    }
    dispatch(getProfile());
  }, [friendId]);

  useEffect(() => {
    const { scrollHeight } = conversation.current;
    dispatch(newMessages());
    conversation.current.scrollTo({
      top: scrollHeight,
    });
  }, [messages.length, friendId]);

  const handleVisibleChange = useCallback((message) => (isVisible) => {
    if (isVisible && !message.seen) {
      dispatch(openMessage(message.id));
    }
  }, []);
  console.log(usersForMessages);
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
              <input type="text" placeholder="Search Messages" id="search_message_input" onChange={(ev) => setSearchText(ev.target.value)} />
              <img src={searchIcon} alt="" />
            </label>
          </div>
          <div className="messages__left__list">
            <div className="messages__left__list__scroll">
              {usersForMessages.map((user) => (
                user.id !== profile.id ? (
                  <UserMessageBlock
                    id={user.id}
                    key={user.id}
                    name={user.firstName}
                    message={user?.lastMessage || null}
                    date={user.lastVisit}
                    isOnline={user.isOnline}
                    img={REACT_APP_API_URL + user.avatar}
                  />
                ) : null
              ))}
            </div>
          </div>
        </div>
        <div className="messages__right">
          {friendId ? (
            <div className="messages__right__user">
              <div className="messages__right__user__avatar">
                <img src={REACT_APP_API_URL + singleUser.avatar} alt="" />
              </div>
              <div className="messages__right__user__name">
                <h3>{singleUser.firstName}</h3>
              </div>
            </div>
          ) : null}
          <div className="messages__right__list" ref={conversation}>
            <div className="messages__right__list__scroll">
              {friendId ? [...messages].reverse().map((m) => (
                +m.to === +friendId
                  ? (
                    <div className="messages__right__list_left" key={m.id}>
                      <img src={REACT_APP_API_URL + profile.avatar} alt="" />
                      <p>
                        {m.text}
                        {m.seen ? <img src={CheckIcon} alt="" /> : null}
                      </p>
                    </div>
                  )
                  : (
                    <VisibilitySensor onChange={handleVisibleChange(m)} key={m.id}>
                      <div className="messages__right__list_right">
                        <img src={REACT_APP_API_URL + singleUser.avatar} alt="" />
                        <p>{m.text}</p>
                      </div>
                    </VisibilitySensor>
                  )
              )) : null}
            </div>
          </div>
          <div className="messages__right__send">
            <label htmlFor="send_message_input">
              <input type="text" value={text} placeholder="type a message" id="send_message_input" onKeyDown={(ev) => handleEnterKeyPress(ev)} onInput={(ev) => setText(ev.target.value)} />
              <img src={sendMessage} alt="" role="presentation" onClick={() => handleSendMessage()} />
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Messages;
