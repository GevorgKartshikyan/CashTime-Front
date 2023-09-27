import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { blockedUsers } from '../store/actions/users';

function BlockedUsers() {
  const users = useSelector((state) => state.users.blocked);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { REACT_APP_API_URL } = process.env;
  const handleGetSingleUser = (id) => {
    navigate(`/admin/user?id=${id}`);
  };
  useEffect(() => {
    dispatch(blockedUsers());
  }, []);
  console.log(users);
  return (
    <div className="blocked">
      <div className="admin__row__dashboard__title blocked__title"><h3>Blocked Users</h3></div>
      <div className="blocked__row">
        {users.map((user) => (
          <div key={user.id} className="blocked__user">
            <div className="blocked__user__info">
              <div className="blocked__user__info__img" role="presentation" onClick={() => handleGetSingleUser(user.id)}>
                <img src={REACT_APP_API_URL + user.avatar} alt="" />
              g</div>
              <div className="blocked__user__info__text">
                <div role="presentation" onClick={() => handleGetSingleUser(user.id)} className="blocked__user__info__text__name">
                  <p>{user.firstName}</p>
                  <p>{user.firstName}</p>
                </div>
                <div className="blocked__user__info__text__role">
                  <p>{user.role}</p>
                </div>
              </div>
            </div>
            <div className="blocked__user__text">
              <p>{user['report.text']}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlockedUsers;
