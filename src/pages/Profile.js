import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import UserImage from '../assets/images/face.png';
import EditSvg from '../assets/images/edit.svg';
import UserSvg from '../assets/images/user.svg';
import AddCvSvg from '../assets/images/addCV.svg';
import ProfileEditRow from '../components/Profile_edit_row';
import ProfileAddRow from '../components/Profile_add_row';
import { getSingleUser } from '../store/actions/users';

function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.singleUser);

  useEffect(() => {
    dispatch(getSingleUser(7));
  }, []);

  return (
    <>
      <Header />
      <div className="profile">
        <div className="profile__row">
          <img src={UserImage} alt="" className="profile__row__img" />
          <Link to="/">
            <img src={EditSvg} alt="" className="profile__row__svg" />
          </Link>
        </div>
        <ProfileEditRow title="First Name" text="Your Name" svg={UserSvg} />
        <ProfileEditRow title="First Name" text={user?.firstName} svg={UserSvg} />
        <ProfileEditRow title="Add Your CV" text="CV Link" svg={AddCvSvg} />
        <ProfileEditRow title="Add Your Manual" text="Fix Your Manual" svg="" />
        <ProfileAddRow title="Start a Trial for a Better Experience" />
        <ProfileAddRow title="Add a New Announcement" />
        <ProfileAddRow title="Notifications" />
        <ProfileAddRow title="Pro Plan" />
      </div>
      <Footer />
    </>
  );
}

export default Profile;
