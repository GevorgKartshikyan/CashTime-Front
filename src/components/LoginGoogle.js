// import React from 'react';
// // import { GoogleLogin } from 'react-google-login';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import GoogleIcon from '../assets/images/Signup_google_icon.svg';
// import { registerRequest } from '../store/actions/users';
//
// function LoginGoogle() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//
//   const responseGoogle = async (response) => {
//     console.log(response.wt.rV, response.wt.uT, response.wt.cu);
//     try {
//       const { payload } = await dispatch(registerRequest({
//         email: response.wt.cu,
//         lastName: response.wt.uT,
//         firstName: response.wt.rV,
//         type: 'google',
//       }));
//
//       if (payload.status === 'ok' || payload.status === 'fulfilled') {
//         navigate('/verified');
//       }
//
//       if (payload.status === 'error') {
//         toast.error(`${payload?.message}`);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
//
//   return (
//     <div className="googleLogin">
//       {/* <GoogleLogin */}
//       {/*   clientId="586055279200-pj30j1k8tjhurugs3kla43sq6pkgheg
//       k.apps.googleusercontent.com" */}
//       {/*   render={(renderProps) => ( */}
//       {/*     <button */}
//       {/*       type="button" */}
//       {/*       onClick={renderProps.onClick} */}
//       {/*       disabled={renderProps.disabled} */}
//       {/*     > */}
//       {/*       <div className="signup__start__icon"> */}
//       {/*         <div className="signup__start__icon__boxes"> */}
//       {/*           <img src={GoogleIcon} alt="IMG" /> */}
//       {/*         </div> */}
//       {/*       </div> */}
//       {/*     </button> */}
//       {/*   )} */}
//       {/*   buttonText="Login" */}
//       {/*   onSuccess={responseGoogle} */}
//       {/*   onFailure={responseGoogle} */}
//       {/*   cookiePolicy="single_host_origin" */}
//       {/* /> */}
//     </div>
//   );
// }
//
// export default LoginGoogle;
