import React from 'react';

function CreateCvFifth() {
  return (
    <div className="CreateCvFifth">
      <div className="CreateCvFifth__text">
        <h3>Write a Bio, Let The World Know You Better</h3>
      </div>
      <div className="CreateCvFifth__bio">
        <form action="">
          <label htmlFor="bio">
            <textarea id="bio" cols="30" rows="10" />
          </label>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
}

export default CreateCvFifth;
