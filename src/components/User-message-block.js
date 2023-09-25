import React from 'react';
import * as propTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import moment from 'moment';

function UserMessageBlock(props) {
  let isUnreadMessage = false;
  const {
    id, name, message, date, img, isOnline,
  } = props;
  if (message) {
    if (+message.from === +id) {
      if (!message.seen) {
        isUnreadMessage = true;
      }
    }
  }
  return (
    <NavLink className={`user__block ${isUnreadMessage ? 'user__block__active' : ''}`} to={`/messages/${id}`} key={id}>
      <div className="user__block__w">
        <div className="user__block__img">
          <img src={img} alt="" />
        </div>
        <div className="user__block__information">
          <h3 className="user__block__information__name">{name}</h3>
          <p className="user__block__information__message">{message?.text}</p>
        </div>
      </div>
      <div className="user__block__date">
        {date ? <p>{isOnline ? <span className="user__block__date-span" /> : moment(date).calendar()}</p> : null}
      </div>
    </NavLink>
  );
}

UserMessageBlock.propTypes = {
  name: propTypes.string.isRequired,
  message: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
  img: propTypes.string.isRequired,
};

export default UserMessageBlock;
