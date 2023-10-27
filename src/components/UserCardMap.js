import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { sendNotice } from '../store/actions/notice';

const { REACT_APP_API_URL } = process.env;

function UserCardMap(props) {
  const { user } = props;
  const dispatch = useDispatch();
  const handleSendNotice = useCallback((creator) => {
    dispatch(sendNotice({ noticeTo: creator, noticeJobTo: null, method: 'freelancer' }));
  }, []);
  return (
    <div className="worker-offer-ticket for-map">
      <div className="worker-offer-ticket__first-line forFilter-first-line">
        <h3
          className="worker-offer-ticket__first-line__title forFilter-title"
        >
          {user.createdCvs?.profRole}
        </h3>
        <div className="worker-offer-ticket__first-line__block forFilter-block">
          <img
            src={REACT_APP_API_URL + user.avatar}
            alt=""
            className="worker-offer-ticket__first-line__img"
          />
          <div>
            <p className="worker-offer-ticket__first-line__name forFilter-name">{user.firstName}</p>
            <p className="worker-offer-ticket__first-line__name">{user.lastName}</p>
          </div>
        </div>
      </div>
      <div className="worker-offer-ticket__first-line forFilter-first-line">
        <div className="worker-offer-ticket__first-line__left forFilter-left">
          <p className="worker-offer-ticket__first-line__left__text">{user.city}</p>
          <p className="worker-offer-ticket__first-line__left__text">{user.phone}</p>
          <p className="worker-offer-ticket__first-line__left__text">{user.email}</p>
        </div>
        <div className="worker-offer-ticket__second-line forFilter-second-line">
          <span className="worker-offer-ticket__second-line__price forFilter-price">
            {user.createdCvs?.hourlyRate}
            {' '}
            AMD /hr
          </span>
        </div>
      </div>
      <button onClick={() => handleSendNotice(user.id)} type="button" className="worker-offer-ticket__button">Apply</button>
    </div>
  );
}

export default UserCardMap;
