import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import adminLocation from '../assets/images/admin_location.svg';
import userDashboardCall from '../assets/images/user-dashboard-call.svg';
import userDashboardEmail from '../assets/images/user-dashboard-email.svg';
import { singleUserFromAdmin } from '../store/actions/users';

function UserDashboard() {
  const { REACT_APP_API_URL } = process.env;
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const dispatch = useDispatch();
  const singleUserForAdminObj = useSelector((state) => state.users.singleUserFromAdmin) || {};
  useEffect(() => {
    dispatch(singleUserFromAdmin(id));
  }, []);
  return (
    <div className="user-dashboard">
      <div className="user-dashboard__title">
        <div className="user-dashboard__title__text">
          <h3>User Dashboard</h3>
        </div>
      </div>
      <div className="user-dashboard__profile">
        <div className="user-dashboard__profile__info">
          <div className="user-dashboard__profile__info__img">
            <img src={REACT_APP_API_URL + singleUserForAdminObj.avatar} alt="" />
          </div>
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
    </div>
  );
}

export default UserDashboard;
