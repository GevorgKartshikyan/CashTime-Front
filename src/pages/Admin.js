import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import notifications from '../assets/images/notifications.svg';
import settings from '../assets/images/settings.svg';
import adminImg from '../assets/images/adminImg.svg';
import Dashboard from '../components/Dashboard';
import UserDashboard from '../components/User-dashboard';
import AdminEmployees from '../components/AdminEmployees';

function Admin() {
  const elements = ['Dashboard', 'Employees', 'Employers', 'Report', 'User'];

  const { page = elements[0].toLowerCase() } = useParams();

  return (
    <div className="admin">
      <div className="admin__row">
        <div className="admin__row__menu">
          <div className="admin__row__menu__title">
            <h3>CashTime</h3>
          </div>
          <div className="admin__row__menu-list">
            <ul>
              {elements.map((element) => (
                <li
                  key={element}
                  className={`admin__row__menu-list-item ${page === element.toLowerCase() ? 'active' : ''}`}
                  role="presentation"
                >
                  <NavLink to={`/admin/${element.toLowerCase()}`}>{element}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {page === 'dashboard' || !page ? <Dashboard /> : null}
        {page === 'employees' && <AdminEmployees /> }
        {page === 'employers' && <AdminEmployees /> }
        {page === 'user' && <UserDashboard /> }
        <div className="admin__row__user">
          <div className="admin__row__user__w">
            <div className="admin__row__user__w-notification">
              <img src={notifications} alt="" />
            </div>
            <div className="admin__row__user__w-settings">
              <img src={settings} alt="" />
            </div>
            <div className="admin__row__user__w-info">
              <div className="admin__row__user__w-info__text">
                <h3>Amalia M.</h3>
                <p>Admin</p>
              </div>
              <div className="admin__row__user__w-info__img">
                <img src={adminImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;