import React, { useState } from 'react';

function ProfileAboutEditModal() {
  const [bio, setBio] = useState('');

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
          {bio.length}
          /2600
        </span>
      </div>
      <button className="small-modal-profile__btn" type="button">Save</button>
    </div>
  );
}

export default ProfileAboutEditModal;
