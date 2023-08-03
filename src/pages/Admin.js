import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import notifications from '../assets/images/notifications.svg';
import settings from '../assets/images/settings.svg';
import adminImg from '../assets/images/adminImg.svg';
import Dashboard from '../components/Dashboard';

function Admin() {
  const [activePage, setActivePage] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index);
    setActivePage(index + 1);
  };

  const elements = ['Dashboard', 'Report', 'User'];
  return (
    <div className="admin">
      <div className="admin__row">
        <div className="admin__row__menu">
          <div className="admin__row__menu__title">
            <h3>CashTime</h3>
          </div>
          <div className="admin__row__menu-list">
            <ul>
              {elements.map((element, index) => (
                <li
                  className={`admin__row__menu-list-item ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => handleItemClick(index)}
                  role="presentation"
                >
                  <NavLink to="/admin">{element}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {activePage === 1 && <Dashboard /> }
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
