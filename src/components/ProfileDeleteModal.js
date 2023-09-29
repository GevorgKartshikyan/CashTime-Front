import React from 'react';

function ProfileDeleteModal({ closeModal }) {
  return (
    <div className="profile-delete-modal">
      <div className="profile-delete-modal__small">
        <button onClick={() => closeModal(false)} type="button" className="profile-delete-modal__small__closeBtn">X</button>
        <h3 className="profile-delete-modal__small__title">Type Password</h3>
        <input className="profile-delete-modal__small__input" type="text" />
        <button className="profile-delete-modal__small__btn" type="button">Delete Account</button>
        <p className="profile-delete-modal__small__text">
          Если вы уверены, что хотите продолжить и удалить свой аккаунт,
          введите свои пароль и нажмите
          &quot;Удалить аккаунт&ldquo;.
          В противном случае вы можете вернуться на главную страницу сайта.
        </p>
        <p className="profile-delete-modal__small__text">
          Мы сожалеем о вашем решении уйти и надеемся, что в будущем вы можете вернуться к нам.
        </p>
      </div>
    </div>
  );
}

export default ProfileDeleteModal;
