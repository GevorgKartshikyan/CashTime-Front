import React, {
  useCallback, useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';

function CreateJobSecond(props) {
  const { onData } = props;
  const skills = ['User Experience', 'Figma', 'Photoshop', 'test'];
  const [showMessage, setShowMessage] = useState('');
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const handleSkill = useCallback((skill) => {
    if (!selectedSkills.includes(skill) && selectedSkills.length < 3) {
      setSelectedSkills([...selectedSkills, skill]);
    }
    if (selectedSkills.length === 3) {
      setShowMessage('max length 3');
    }
  }, [selectedSkills, setSelectedSkills]);
  useEffect(() => {
    onData({ dataFromChild2: selectedSkills });
  }, [selectedSkills]);
  const handleChange = useCallback((e) => {
    if (selectedSkills.length === 0) {
      setInputValue(e.target.value);
      onData({ dataFromChild2: e.target.value });
    }
  }, [inputValue, selectedSkills]);
  const handleSkillDelete = useCallback((e) => {
    setSelectedSkills(selectedSkills.filter((item) => item !== e));
  }, [selectedSkills]);
  return (
    <div className="job__form__container">
      <h4 className="create__job__title second">
        What are the main skills required for your
        work?
      </h4>
      <div className="job__second__block">
        <p className="create__second__desc">Search skills or add your own</p>
        <div className="input-container">
          <input value={selectedSkills.length === 0 ? inputValue : selectedSkills.join(' ')} type="text" className={selectedSkills.length === 0 ? 'job__second__input' : 'job__second__input hidden'} onChange={handleChange} />
          <p style={{ height: '20px' }}>{showMessage}</p>
          <div className="selected-container">
            {selectedSkills.map((e) => (
              <span className="selected" key={e}>
                <p>{e}</p>
                <button type="button" className="skill-delete" onClick={() => handleSkillDelete(e)}>X</button>
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="job__second__skills_block job__second__block">
        <p className="suggested-skills">Suggested skills</p>
        <div className="skills">
          {skills.map((e) => (
            <button type="button" key={e} className="skills__title" onClick={() => handleSkill(e)}>{`+ ${e}`}</button>
          ))}
        </div>
      </div>
    </div>
  );
}
CreateJobSecond.propTypes = {
  onData: PropTypes.func.isRequired,
};

export default CreateJobSecond;
