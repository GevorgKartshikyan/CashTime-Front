import React, {
  useCallback, useState,
} from 'react';

function CreateCVThird() {
  const skills = ['User Experience', 'Android', 'Adobe XD', 'Ios', 'Figma'];
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
  const handleChange = useCallback((e) => {
    if (selectedSkills.length === 0) {
      setInputValue(e.target.value);
    }
  }, [inputValue, selectedSkills]);
  const handleSkillDelete = useCallback((e) => {
    setSelectedSkills(selectedSkills.filter((item) => item !== e));
  }, [selectedSkills]);
  return (
    <div className="create__cv__container">
      <h4 className="create__cv__title">
        Add Your Skills
      </h4>
      <div className="create__cv__block">
        <p className="create__cv__desc">Your Skills*</p>
        <div className="create__cv__input-container">
          <input
            value={selectedSkills.length === 0 ? inputValue : selectedSkills.join(' ')}
            type="text"
            className={selectedSkills.length === 0 ? 'create__cv__input' : 'job__second__input hidden'}
            onChange={handleChange}
          />
          <p style={{ height: '20px' }}>{showMessage}</p>
          <div className="create__cv__selected-container">
            {selectedSkills.map((e) => (
              <span className="create__cv__selected" key={e}>
                <p>{e}</p>
                <button
                  type="button"
                  className="skill-delete"
                  onClick={() => handleSkillDelete(e)}
                >
                  X
                </button>
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="create__cv__block">
        <p className="create__cv__suggested-skills">Suggested skills</p>
        <div className="create__cv__skills">
          {skills.map((e) => (
            <button
              type="button"
              key={e}
              className="create__cv__skills__title"
              onClick={() => handleSkill(e)}
            >
              {`+ ${e}`}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CreateCVThird;
