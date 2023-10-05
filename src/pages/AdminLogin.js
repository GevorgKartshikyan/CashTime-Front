import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequestAdmin } from '../store/actions/admin';

function AdminLogin() {
  const token = useSelector((state) => state.admin.adminToken);
  console.log(token);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    login: '',
    password: '',
  });
  const handleChange = useCallback((key) => (ev) => {
    setFormData({ ...formData, [key]: ev.target.value });
  }, [formData]);
  const handleSend = useCallback((ev) => {
    ev.preventDefault();
    dispatch(loginRequestAdmin(formData));
  }, [formData]);
  return (
    <div className="admin__login">
      <form onSubmit={handleSend}>
        <h2>Admin Login</h2>

        <input
          type="text"
          name="username"
          className="text-field"
          placeholder="Login"
          value={formData.login}
          onChange={handleChange('login')}
        />
        <input
          type="password"
          name="password"
          className="text-field"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange('password')}
        />
        <input type="submit" className="button" value="Login" />
      </form>
    </div>
  );
}

export default AdminLogin;
