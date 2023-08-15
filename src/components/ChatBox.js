import React from 'react';
import { NavLink } from 'react-router-dom';
import ChatBoxCard from './ChatBox-card';

function ChatBox() {
  return (
    <div onClick={(e) => e.stopPropagation()} role="presentation" className="chatbox">
      <ChatBoxCard />
      <ChatBoxCard />
      <ChatBoxCard />
      <div className="chatbox__seeall">
        <NavLink to="/" className="chatbox__text">See all</NavLink>
      </div>
    </div>
  );
}

export default ChatBox;
