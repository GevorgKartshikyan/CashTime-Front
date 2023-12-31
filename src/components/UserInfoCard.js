// overlay

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import avatar from '../assets/images/avatar.svg';
import ReportModal from './ReportModal';
import { status as changeStatus } from '../store/actions/users';

function UserInfoCard(props) {
  const { REACT_APP_API_URL } = process.env;
  const {
    img, firstName, lastName, userId, date, profession, city, status,
  } = props;
  const [modalFlag, setModalFlag] = useState(false);
  const dispatch = useDispatch();
  const [newStatus, setNewStatus] = useState(status);
  const navigate = useNavigate();
  const handleChangeStatus = async (id) => {
    const { payload } = await dispatch(changeStatus(id));
    setNewStatus(payload.user.status);
    console.log(payload);
  };
  const handleOpenModal = async (checkModal) => {
    if (checkModal === 'active') {
      setModalFlag(true);
    } else {
      await handleChangeStatus(userId);
    }
  };
  const handleGetSingleUser = () => {
    navigate(`/admin/user?id=${userId}`);
  };
  return (
    <>
      {modalFlag === true
        ? (
          <ReportModal
            onChangeStatus={handleChangeStatus}
            modalFlag={setModalFlag}
            userId={userId}
          />
        )
        : null}
      <div className="admin__employees__info">
        <div className="admin__employees__info__titles">
          <div role="presentation" onClick={handleGetSingleUser} className="admin__employees__info__titles__name">
            <div className="admin__employees__info__titles__name__box">
              <img className="admin__employees__info__titles__name__box__img" src={REACT_APP_API_URL + img} alt="img" />
            </div>
            <h3 className="admin__employees__info__titles__name__text">
              {firstName}
              {' '}
              <br />
              {lastName}
            </h3>
          </div>
          <div className="admin__employees__info__titles__id">
            <h3 className="admin__employees__info__titles__id__text">
              {userId}
            </h3>
          </div>
          <div className="admin__employees__info__titles__date">
            <h3 className="admin__employees__info__titles__date__text">{date}</h3>
          </div>
          <div className="admin__employees__info__titles__profession">
            <h3 className="admin__employees__info__titles__profession__text">{profession}</h3>
          </div>
          <div className="admin__employees__info__titles__city">
            <h3 className="admin__employees__info__titles__city__text">{city}</h3>
          </div>
          <div className="admin__employees__info__titles__status">
            <button
              onClick={() => handleOpenModal(newStatus)}
              type="button"
              style={newStatus === 'active' ? { backgroundColor: '#78C96B' }
                : { backgroundColor: '#E31515' }}
              className="admin__employees__info__titles__status__btn"
            >
              {newStatus}

            </button>
          </div>
        </div>
      </div>
      {modalFlag === true ? <div role="presentation" className="report-overlay" onClick={() => setModalFlag(false)} /> : null}
    </>
  );
}
UserInfoCard.defaultProps = {
  img: avatar,
};
UserInfoCard.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
  profession: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  img: PropTypes.string,
  date: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default UserInfoCard;
