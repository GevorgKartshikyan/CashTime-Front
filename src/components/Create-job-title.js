import React, { useState } from 'react';

function CreateJobTitle() {
  const exampleTitles = ['Build responsive WordPress site with booking/payment functionality', 'Graphic designer needed to design ad creative for multiple campaigns', 'Facebook ad specialist needed for product launch'];
  const [jobTitle, setJobTitle] = useState('');
  return (
    <div className="job__form__first">
      <div className="create__first">
        <h4 className="create__first__title">Write a title for your job post</h4>
        <input type="text" className="examples__input" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} placeholder="Software engineer" />
      </div>
      <div className="examples">
        <p className="examples__desc">Example titles</p>
        <ul className="examples__block">
          {exampleTitles.map((title) => (
            <li key={title} className="examples__list">{title}</li>
          ))}
        </ul>
      </div>
      <div className="job__buttons">
        <button type="button" className="job__btn">Go Back</button>
        <button type="button" className="job__btn">{jobTitle ? 'Next' : 'Skip For Now'}</button>
      </div>
    </div>
  );
}

export default CreateJobTitle;
