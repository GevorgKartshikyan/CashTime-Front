import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import VisibilitySensor from 'react-visibility-sensor';
import Header from '../layouts/Header';
import searchIcon from '../assets/images/search_messages.svg';
import sendMessage from '../assets/images/send_message.svg';
import UserMessageBlock from '../components/User-message-block';
import {
  friendTyping,
  getMessagesList, newMessages, openMessage, sendMessages,
} from '../store/actions/messages';
import { getProfile, getSingleUser, listRequest } from '../store/actions/users';
import CheckIcon from '../assets/images/message_seen_icon.jpg';
import FileIcon from '../assets/images/file-icon.png';
import MessageTyping from '../components/MessageTyping';

function Messages() {
  const { REACT_APP_API_URL } = process.env;
  const token = useSelector((state) => state.users.token);
  const messages = useSelector((state) => state.messages.messages);
  const usersForMessages = useSelector((state) => state.users.usersForMessages || []);
  const singleUser = useSelector((state) => state.users.singleUser);
  const profile = useSelector((state) => state.users.profile);
  const { friendId } = useParams();
  const [text, setText] = useState('');
  const [files, setFiles] = useState([]);
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();
  const conversation = useRef();
  const [isTyping, setIsTyping] = useState(false);
  const friendIsTyping = useSelector((state) => state.messages.isTyping);
  const handleSendMessage = useCallback(() => {
    if ((text && friendId) || (files.length && friendId)) {
      console.log(files);
      dispatch(sendMessages({
        text,
        friendId,
        files,
      }));
      setText('');
      setFiles([]);
      dispatch(listRequest({
        page: 1, limit: 150, role: '', search: searchText,
      }));
    }
  }, [text, files]);
  const handleEnterKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleFileSelect = useCallback(async (ev) => {
    const newFiles = [...ev.target.files].map((file) => {
      file.uri = URL.createObjectURL(file);
      return file;
    });
    setFiles([...files, ...newFiles]);
  }, [files]);

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
  useEffect(() => {
    if (text.length > 0) {
      setIsTyping(true);
    } else {
      setIsTyping(false);
    }
  }, [text]);
  useEffect(() => {
    dispatch(friendTyping({ friendId, isTyping }));
  }, [isTyping, friendId]);
  if (!token) {
    window.location.href = '/login';
    return null;
  }

  console.log(messages);

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
            <Link to={`/profile/${friendId}`} className="messages__right__user">
              <div className="messages__right__user__avatar">
                <img src={REACT_APP_API_URL + singleUser.avatar} alt="" />
              </div>
              <div className="messages__right__user__name">
                <h3>{singleUser.firstName}</h3>
              </div>
            </Link>
          ) : null}
          <div className="messages__right__list" ref={conversation}>
            <div className="messages__right__list__scroll">
              {friendId ? [...messages].reverse().map((m) => (
                +m.to === +friendId
                  ? (
                    <div className="messages__right__list_left" key={m.id}>
                      <img src={REACT_APP_API_URL + profile.avatar} alt="" />
                      {m.text ? (
                        <p>
                          {m.text}
                          {m.seen ? <img src={CheckIcon} alt="" /> : null}
                        </p>
                      ) : null}
                      {
                        m.files.length ? (
                          <div className="messages__right__list_left_img">
                            {m?.files.map((img) => (
                              <img src={REACT_APP_API_URL + img.name} className="messages__right__list_left_img-picture" alt="" />
                            ))}
                            {m.seen ? <img src={CheckIcon} alt="" className="messages__right__list_left_img-check" /> : null}
                          </div>
                        ) : null
                      }
                    </div>
                  )
                  : (
                    <VisibilitySensor onChange={handleVisibleChange(m)} key={m.id}>
                      <div className="messages__right__list_right">
                        <img src={REACT_APP_API_URL + singleUser.avatar} alt="" />
                        {m.text ? (
                          <p>
                            {m.text}
                          </p>
                        ) : null}
                        {
                          m.files.length ? (
                            <div className="messages__right__list_right_img">
                              {m?.files.map((img) => (
                                <img src={REACT_APP_API_URL + img.name} className="messages__right__list_right_img-picture" alt="" />
                              ))}
                            </div>
                          ) : null
                        }
                      </div>
                    </VisibilitySensor>
                  )
              )) : null}
              {friendIsTyping ? (
                <MessageTyping
                  img={REACT_APP_API_URL + singleUser.avatar}
                />
              ) : null}
            </div>
          </div>
          {files.length ? (
            <div className="filesListWrapper">
              {files.map((d) => (
                <div key={d.uri} className="filesListWrapper__block">
                  {d.type.startsWith('image/') ? (
                    <img src={d.uri} className="filesListWrapper__block__img" alt="" />
                  ) : null}
                  {d.type.startsWith('video/') ? (
                  // eslint-disable-next-line jsx-a11y/media-has-caption
                    <video className="filesListWrapper__block__img">
                      <source src={d.uri} width={100} height={100} />
                    </video>
                  ) : null}
                  {!d.type.startsWith('image/') && !d.type.startsWith('video/') ? (
                    <i className="fa fa-file fa-3x" aria-hidden="true" />
                  ) : null}
                  {/* <p className="filesListWrapper__block__text">{d.name}</p> */}
                </div>
              ))}
            </div>
          ) : null}
          <div className="messages__right__send">
            <label htmlFor="file_message_input">
              <img src={FileIcon} alt="" />
              <input onChange={handleFileSelect} id="file_message_input" type="file" accept="image/*" multiple />
            </label>
            <label htmlFor="send_message_input">
              <input
                type="text"
                value={text}
                placeholder="type a message"
                id="send_message_input"
                onKeyDown={(ev) => handleEnterKeyPress(ev)}
                onInput={(ev) => setText(ev.target.value)}
              />
              <img src={sendMessage} alt="" role="presentation" onClick={() => handleSendMessage()} />
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Messages;
