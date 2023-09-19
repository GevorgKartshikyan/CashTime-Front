import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import adminLocation from '../assets/images/admin_location.svg';
import userDashboardCall from '../assets/images/user-dashboard-call.svg';
import userDashboardEmail from '../assets/images/user-dashboard-email.svg';
import { singleUserFromAdmin, status as changeStatus } from '../store/actions/users';
import ReportModal from './ReportModal';

const { REACT_APP_API_URL } = process.env;

function UserDashboard() {
  const [searchParams] = useSearchParams();
  const userId = searchParams.get('id');
  const dispatch = useDispatch();
  const singleUserForAdminObj = useSelector((state) => state.users.singleUserFromAdmin) || {};
  const [newStatus, setNewStatus] = useState(singleUserForAdminObj.status);
  const [modalFlag, setModalFlag] = useState(false);
  useEffect(() => {
    if (singleUserForAdminObj.status !== undefined) {
      setNewStatus(singleUserForAdminObj.status);
    }
  }, [singleUserForAdminObj.status]);
  useEffect(() => {
    if (userId) {
      dispatch(singleUserFromAdmin(userId));
    }
  }, []);

  const handleChangeStatus = async (id) => {
    console.log(id);
    const { payload } = await dispatch(changeStatus(id));
    setNewStatus(payload.user?.status);
  };
  const handleOpenModal = async (checkModal) => {
    if (checkModal === 'active') {
      setModalFlag(true);
    } else {
      await handleChangeStatus(singleUserForAdminObj.id);
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
      <div className="user-dashboard">
        <div className="user-dashboard__title">
          <div className="user-dashboard__title__text">
            <h3>User Dashboard</h3>
          </div>
        </div>
        {userId ? (
          <div className="user-dashboard__profile">
            <div className="user-dashboard__profile__info">
              <div className="user-dashboard__profile__info__img">
                <img src={REACT_APP_API_URL + singleUserForAdminObj.avatar} alt="" />
              </div>
              <button
                onClick={() => handleOpenModal(newStatus)}
                type="button"
                style={newStatus === 'active' ? { backgroundColor: '#78C96B' }
                  : { backgroundColor: '#E31515' }}
                className="admin__employees__info__titles__status__btn"
              >
                {newStatus}

              </button>
              <div className="user-dashboard__profile__info__text">
                <div className="user-dashboard__profile__info__text-name">
                  <p>{`${singleUserForAdminObj.firstName} ${singleUserForAdminObj.lastName}`}</p>
                </div>
                <div className="user-dashboard__profile__info__text-status">
                  <p>{singleUserForAdminObj.role}</p>
                </div>
                <div className="user-dashboard__profile__info__text-location">
                  <div>
                    <img src={adminLocation} alt="" />
                  </div>
                  <p>{`${singleUserForAdminObj.country} ${singleUserForAdminObj.city}`}</p>
                </div>
              </div>
            </div>
            <div className="user-dashboard__profile__contact">
              <div className="user-dashboard__profile__contact__phone">
                <p>Phone</p>
                <div className="user-dashboard__profile__contact__phone-w">
                  <div>
                    <img src={userDashboardCall} alt="" />
                  </div>
                  <p>{singleUserForAdminObj.phone}</p>
                </div>
              </div>
              <div className="user-dashboard__profile__contact__email">
                <p>Email</p>
                <div className="user-dashboard__profile__contact__email-w">
                  <div>
                    <img src={userDashboardEmail} alt="" />
                  </div>
                  <p>{singleUserForAdminObj.email}</p>
                </div>
              </div>
            </div>
          </div>
        ) : <h3 className="user__not__selected">User not selected.</h3>}
      </div>
      {modalFlag === true ? <div role="presentation" className="report-overlay" onClick={() => setModalFlag(false)} /> : null}
    </>
  );
}

export default UserDashboard;
