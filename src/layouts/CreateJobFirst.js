import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function CreateJobFirst(props) {
  const firstFormTitle = useSelector((state) => state.createJobForm.dataFromChild1) ?? '';
  const { onData } = props;
  const exampleTitles = ['Build responsive WordPress site with booking/payment functionality', 'Graphic designer needed to design ad creative for multiple campaigns', 'Facebook ad specialist needed for product launch'];
  const [jobTitle, setJobTitle] = useState(firstFormTitle ?? '');
  useEffect(() => {
    onData({ dataFromChild1: jobTitle || null });
  }, [jobTitle]);
  return (
    <div className="job__form__container">
      <div className="create__first">
        <h4 className="create__job__title">Write a title for your job post</h4>
        <input
          type="text"
          className="examples__input"
          value={jobTitle}
          onChange={(e) => {
            setJobTitle(e.target.value);
          }}
          placeholder="Software engineer"
        />
      </div>
      <div className="examples">
        <p className="examples__desc">Example titles</p>
        <ul className="examples__block">
          {exampleTitles.map((title) => (
            <li key={title} className="examples__list">{title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
CreateJobFirst.propTypes = {
  onData: PropTypes.func.isRequired,
};

export default CreateJobFirst;
