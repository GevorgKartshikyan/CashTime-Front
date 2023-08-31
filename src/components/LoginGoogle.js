import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import jwtDecode from 'jwt-decode';
import GoogleIcon from '../assets/images/Signup_google_icon.svg';
import { registerRequest } from '../store/actions/users';

function LoginGoogle() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const responseGoogle = async (response) => {
    const user = jwtDecode(response.credential);
    console.log(user);
    try {
      const { payload } = await dispatch(registerRequest({
        email: user.email,
        lastName: user.family_name,
        firstName: user.given_name,
        type: 'google',
      }));

      if (payload.status === 'ok' || payload.status === 'fulfilled') {
        navigate('/verified');
      }

      if (payload.status === 'error') {
        toast.error(`${payload?.message}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="googleLogin">
      <GoogleLogin
        render={(renderProps) => (
          <button
            type="button"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            <div className="signup__start__icon">
              <div className="signup__start__icon__boxes">
                <img src={GoogleIcon} alt="IMG" />
              </div>
            </div>
          </button>
        )}
        buttonText="Login"
        onSuccess={responseGoogle}
        onError={responseGoogle}
        useOneTap
      />
    </div>
  );
}

export default LoginGoogle;
