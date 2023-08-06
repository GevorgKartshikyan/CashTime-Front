import React from 'react';

function addService() {
  return (
    <div className="add__service">
      <h2 className="add__service__text">
        Job Title
      </h2>
      <input type="text" maxLength="30" className="add__service__input" />
      <h2 className="add__service__text add__service__text__second">
        Roles
      </h2>
      <input type="text" maxLength="30" className="add__service__input__second" />
    </div>
  );
}

export default addService;
