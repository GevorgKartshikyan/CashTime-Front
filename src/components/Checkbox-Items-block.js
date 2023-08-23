import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function CheckboxItemsBlock(props) {
  const level = useSelector((state) => state.createCvForm.dataSignUpFirstStep);
  console.log(level, 111);
  const {
    levels, data, setData, type,
  } = props;
  const [selectedLevel, setSelectedLevel] = useState(null);
  const handleLevelChange = (event) => {
    setSelectedLevel(event.target.value);
    if (type === 'isFreelancer') {
      setData({ ...data, isFreelancer: event.target.value });
    } else {
      setData({ ...data, yourGoal: event.target.value });
    }
  };
  return (
    <div
      className="job-third-checkbox"
      style={{
        marginTop: 0,
        alignItems: 'start',
      }}
    >
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
              {(level.yourGoal === e) || (level.isFreelancer === e) || selectedLevel === e ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M10.063 16.4L6.06299 12.4L7.46299 11L10.063 13.6L16.663 7L18.063 8.4L10.063 16.4Z"
                    fill="white"
                  />
                </svg>
              ) : null}
            </span>
          </div>
        </label>
      ))}
    </div>
  );
}

CheckboxItemsBlock.propTypes = {
  levels: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  type: PropTypes.string.isRequired,
  data: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  setData: PropTypes.func.isRequired,
};
export default CheckboxItemsBlock;
