import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment/moment';
import { useNavigate } from 'react-router-dom';
import { deleteNotice } from '../store/actions/notice';
import ConfirmModalNotices from './ConfirmModalNotices';

const { REACT_APP_API_URL } = process.env;

function WorkerOfferTicket({
  id, name, lastName, avatar, jobId, jobTitle, friendId, date, city, country, seen,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
      <div className="worker-offer-ticket">
        <div className="worker-offer-ticket__first-line">
          <h3 className="worker-offer-ticket__first-line__title">{jobTitle}</h3>
          <div className="worker-offer-ticket__first-line__block">
            <img style={{ borderRadius: '50%' }} src={REACT_APP_API_URL + avatar} alt="" className="worker-offer-ticket__first-line__img" />
            <p className="worker-offer-ticket__first-line__name">{`${name} ${lastName}`}</p>
          </div>
        </div>
        <div style={{ marginBottom: 30 }} className="worker-offer-ticket__first-line">
          <div className="worker-offer-ticket__first-line__left">
            <p className="worker-offer-ticket__first-line__left__text">{`Applied ${moment(date).fromNow()}`}</p>
            <p className="worker-offer-ticket__first-line__left__text">
              {city}
              ,
              {' '}
              {country}
            </p>
          </div>
        </div>
        {!seen ? (
          <div>
            <button style={{ marginTop: 15 }} onClick={(e) => handleConfirm(e)} type="button" className="worker-offer-ticket__button">Confirm</button>
            <button onClick={(e) => handleDelete(e)} type="button" className="worker-offer-ticket__button">Delete</button>
          </div>
        ) : (
          <button
            onClick={() => {
              if (jobId) {
                navigate(`/add-review?friendId=${friendId}&jobId=${jobId}`);
              } else {
                navigate(`/add-review?friendId=${friendId}`);
              }
            }}
            className="worker-offer-ticket__button"
            type="button"
          >
            Add Review
          </button>
        )}
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

export default WorkerOfferTicket;
