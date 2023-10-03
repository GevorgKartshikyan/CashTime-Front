import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editUserAbout } from '../store/actions/users';

function ProfileAboutEditModal({ cvBio }) {
  const [bio, setBio] = useState('' || cvBio);
  const dispatch = useDispatch();
  const handleSendNewInfo = (ev) => {
    ev.preventDefault();
    dispatch(editUserAbout({
      bio,
    }));
  };
  return (
    <div className="modal-editInfo  small-modal-profile">
      <p className="small-modal-profile__title">
        You can write about your years of experience, industry, or skills.
        People also talk about their
        achievements or
        previous job experiences.
      </p>
      <textarea maxLength={2600} value={bio} onChange={(e) => setBio(e.target.value)} className="small-modal-profile__text" name="" id="" cols="30" rows="10" />
      <div className="small-modal-profile__numbers">
        <span className="small-modal-profile__numbers__span">
          {bio ? bio?.length : 0}
          /2600
        </span>
      </div>
      <button onClick={handleSendNewInfo} className="small-modal-profile__btn" type="button">Save</button>
    </div>
  );
}

export default ProfileAboutEditModal;
