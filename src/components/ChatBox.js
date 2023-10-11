import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ChatBoxCard from './ChatBox-card';

function ChatBox({ setIsActive }) {
  const noticesList = useSelector((state) => state.notices.notices) || [];
  console.log(noticesList);
  return (
    <div className="chatbox">
      {noticesList.map((e) => (
        <ChatBoxCard
          setIsActive={setIsActive}
          id={e.id}
          method={e.method}
          jobId={e.noticeJobTo}
          key={e.id}
          jobTitle={e['fromJob.title']}
          friendId={e['userFrom.id']}
          avatar={e['userFrom.avatar']}
          name={e['userFrom.firstName']}
          lastName={e['userFrom.lastName']}
        />
      ))}
      <div className="chatbox__seeall">
        <NavLink to="/worker-offers" className="chatbox__text">See all</NavLink>
      </div>
    </div>
  );
}

export default ChatBox;
