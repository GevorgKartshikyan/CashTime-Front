import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function splitStringsBySpace(arr) {
  return arr.flatMap((stringWithSpace) => stringWithSpace.split(' '));
}

function CreateJobThird(props) {
  const { onData } = props;
  const levels = ['Entry', 'Intermediate', 'Expert'];
  const [selectedLevel, setSelectedLevel] = useState(null);
  const handleLevelChange = (event) => {
    setSelectedLevel(event.target.value);
  };
  useEffect(() => {
    onData({ dataFromChild3: selectedLevel });
  }, [selectedLevel]);
  return (
    <div className="job__form__container">
      <h4 className="create__job__title" style={{ width: '612px' }}>What level of experience will it need?</h4>
      <div className="job-third-checkbox">
        {levels.map((e) => (
          <label htmlFor={e} className="level-label" key={e}>
            <p className="label-desc">{e}</p>
            <input
              type="radio"
              name="level"
              value={e}
              id={e}
              className="level-input"
              checked={selectedLevel === e}
              onChange={handleLevelChange}
            />
            <div className="check-container">
              <span className="check-squad">
                {selectedLevel === e && (
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                  <path d="M10.063 16.4L6.06299 12.4L7.46299 11L10.063 13.6L16.663 7L18.063 8.4L10.063 16.4Z" fill="white" />
                </svg>
                )}
              </span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}
CreateJobThird.propTypes = {
  onData: PropTypes.func.isRequired,
};

export default CreateJobThird;
