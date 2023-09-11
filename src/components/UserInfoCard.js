import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import avatar from '../assets/images/avatar.svg';
import callIcon from '../assets/images/Call.svg';
import emailIcon from '../assets/images/Email.svg';
import dotsIcon from '../assets/images/Dots.svg';
import ReportModal from './ReportModal';
import { status as changeStatus } from '../store/actions/users';

function UserInfoCard(props) {
  const {
    img, firstName, lastName, userId, date, profession, city, status,
  } = props;
  const [deleteFlag, setDeleteFlag] = useState(false);
  const [checkboxFlag, setCheckboxFlag] = useState(true);
  const [modalFlag, setModalFlag] = useState(false);
  const dispatch = useDispatch();
  const [newStatus, setNewStatus] = useState(status);
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
        <div className={checkboxFlag ? 'admin__employees__info__titles' : 'admin__employees__info__titles cheaked'}>
          <div className="admin__employees__info__titles__checkbox">
            <input type="checkbox" onChange={() => setCheckboxFlag(!checkboxFlag)} />
          </div>
          <div className="admin__employees__info__titles__name">
            <div className="admin__employees__info__titles__name__box">
              <img className="admin__employees__info__titles__name__box__img" src={img} alt="img" />
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
          <div className="admin__employees__info__titles__contact">
            <button type="button" className="admin__employees__info__titles__contact__btn">
              <img src={callIcon} alt="img" />
            </button>
            <button type="button" className="admin__employees__info__titles__contact__btn">
              <img src={emailIcon} alt="img" />
            </button>
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
          <div className="admin__employees__info__titles__action">
            <button onClick={() => setDeleteFlag(!deleteFlag)} className="admin__employees__info__titles__action__btn" type="button">
              <img className="img__action__admin__one" src={dotsIcon} alt="img" />
            </button>
            {
          deleteFlag ? <button type="button" className="admin__employees__info__titles__action__delete">Delete</button> : null
        }

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
