import React from 'react';

function MessageTyping({ img }) {
  return (
    <div className="messages__right__list_right">
      <img src={img} alt="" />
      <svg id="typing_bubble" data-name="typing bubble" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 120 66">
        <g id="bubble">
          <path className="cls-1" d="M152,166H108a29.848,29.848,0,0,1-16.03-4.647,10.993,10.993,0,1,1-12.7-16.692A30.008,30.008,0,0,1,108,106h44A30,30,0,0,1,152,166Zm-85,6a5,5,0,1,1,5-5A5,5,0,0,1,67,172Z" transform="translate(-62 -106)" />
        </g>
        <g>
          <circle className="dot" cx="46" cy="30" r="8" />
          <circle className="dot" cx="68" cy="30" r="8" />
          <circle className="dot" cx="90" cy="30" r="8" />
        </g>
      </svg>
    </div>
  );
}

export default MessageTyping;
