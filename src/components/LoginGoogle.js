import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import GoogleIcon from '../assets/images/Signup_google_icon.svg';
import { registerRequest } from '../store/actions/users';

function LoginGoogle() {
  const dispatch = useDispatch();

  const responseGoogle = (response) => {
    console.log(response.wt.rV, response.wt.uT, response.wt.cu);
    try {
      dispatch(registerRequest({
        email: response.wt.cu,
        lastName: response.wt.uT,
        firstName: response.wt.rV,
        type: 'google',
      }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <GoogleLogin
        clientId="586055279200-pj30j1k8tjhurugs3kla43sq6pkghegk.apps.googleusercontent.com"
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
        onFailure={responseGoogle}
        cookiePolicy="single_host_origin"
      />
    </div>
  );
}

export default LoginGoogle;
