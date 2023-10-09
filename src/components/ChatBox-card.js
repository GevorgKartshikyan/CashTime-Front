import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import ConfirmModalNotices from './ConfirmModalNotices';
import { deleteNotice } from '../store/actions/notice';

const { REACT_APP_API_URL } = process.env;

function ChatBoxCard({
  name, avatar, id, jobId, friendId, jobTitle, lastName, method,
}) {
  console.log(method);
  const dispatch = useDispatch();
  const [activate, setActivate] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleConfirm = useCallback(async (e) => {
    setShowModal(true);
    document.body.style.overflowY = 'hidden';
    e.stopPropagation();
  }, [id, jobId]);
  const handleDelete = useCallback((e) => {
    dispatch(deleteNotice({ id, noticeJobTo: jobId }));
    e.stopPropagation();
  }, []);
  return (
    <>
      <div className="chatBoxCard">
        <div className="chatBoxCard__img">
          <img
            src={REACT_APP_API_URL + avatar}
            alt="user"
            style={{
              width: 60, height: 60, borderRadius: '50%', objectFit: 'cover',
            }}
          />
        </div>
        <div className="chatBoxCard__info">
          <div className="chatBoxCard__info__text">
            <p>
              You’ve received a request from
              <span style={{ marginLeft: 10, color: '#4A62B6' }}>{`${name} ${lastName}`}</span>
              {method === 'job' ? (
                <p>
                  From your  published job
                  <br />
                  <span style={{ marginLeft: 5, marginRight: 5, textDecoration: 'underline' }}>
                    <strong>
                      {jobTitle ? `(
                    ${jobTitle.length > 12 ? `${jobTitle?.slice(0, 12)?.toUpperCase()}...` : jobTitle?.toUpperCase()}
                    )` : 'No Name Job'}
                    </strong>
                  </span>
                </p>
              ) : <p>stex gre Vash</p>}
            </p>
          </div>
          <div className="chatBoxCard__info__buttons">
            <button onClick={(e) => handleDelete(e)} className="chatBoxCard__info__buttons__cancel" type="button">Cancel</button>
            <button onClick={(e) => handleConfirm(e)} className="chatBoxCard__info__buttons__accept" type="button">Accept</button>
          </div>
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
      {showModal
        && (
          <ConfirmModalNotices
            id={id}
            noticeJobTo={jobId}
            friendId={friendId}
            setShowModal={setShowModal}
            friendName={name}
            jobName={jobTitle}
            friendLastName={lastName}
          />
        )}
    </>
  );
}

export default ChatBoxCard;
