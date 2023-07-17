import React from 'react';
import * as propTypes from 'prop-types';

function UserMessageBlock(props) {
  const {
    name, message, date, img,
  } = props;
  return (
    <div className="user__block">
      <div className="user__block__w">
        <div className="user__block__img">
          <img src={img} alt="" />
        </div>
        <div className="user__block__information">
          <h3 className="user__block__information__name">{name}</h3>
          <p className="user__block__information__message">{message}</p>
        </div>
      </div>
      <div className="user__block__date">
        <p>{date}</p>
      </div>
    </div>
  );
}

UserMessageBlock.propTypes = {
  name: propTypes.string.isRequired,
  message: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
  img: propTypes.string.isRequired,
};

export default UserMessageBlock;
