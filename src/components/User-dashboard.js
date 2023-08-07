import React from 'react';
import adminImg from '../assets/images/adminImg.svg';
import adminLocation from '../assets/images/admin_location.svg';
import userDashboardCall from '../assets/images/user-dashboard-call.svg';
import userDashboardEmail from '../assets/images/user-dashboard-email.svg';

function UserDashboard() {
  return (
    <div className="user-dashboard">
      <div className="user-dashboard__title">
        <div className="user-dashboard__title__text">
          <h3>User Dashboard</h3>
        </div>
        <div className="user-dashboard__title__search">
          <input type="search" placeholder="Search here..." />
        </div>
      </div>
      <div className="user-dashboard__profile">
        <div className="user-dashboard__profile__info">
          <div className="user-dashboard__profile__info__img">
            <img src={adminImg} alt="" />
          </div>
          <div className="user-dashboard__profile__info__text">
            <div className="user-dashboard__profile__info__text-name">
              <p>Amalia M. </p>
            </div>
            <div className="user-dashboard__profile__info__text-status">
              <p>Admin</p>
            </div>
            <div className="user-dashboard__profile__info__text-location">
              <div>
                <img src={adminLocation} alt="" />
              </div>
              <p>Gyumri, Armenia</p>
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
              <p>+3742 345 6789 0</p>
            </div>
          </div>
          <div className="user-dashboard__profile__contact__email">
            <p>Email</p>
            <div className="user-dashboard__profile__contact__email-w">
              <div>
                <img src={userDashboardEmail} alt="" />
              </div>
              <p>namesurname@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
