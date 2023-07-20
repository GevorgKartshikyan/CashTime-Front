import React, {
  useCallback, useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';

function CreateJobSecond(props) {
  const { onData } = props;
  const skills = ['User Experience', 'Figma', 'Photoshop', 'test'];
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSkill = useCallback((skill) => {
    setSelectedSkills([...selectedSkills, skill]);
  }, [selectedSkills, setSelectedSkills]);

  useEffect(() => {
    onData({ dataFromChild2: selectedSkills });
  }, [selectedSkills]);
  const handleChange = useCallback((e) => {
    setInputValue(e.target.value);
  }, [inputValue]);
  console.log(selectedSkills);
  // const handleSkillDelete = useCallback((e) => {
  //   setSelectedSkills(selectedSkills.filter((item) => item !== e));
  // }, [selectedSkills]);

  return (
    <div className="job__form__container">
      <h4 className="create__job__title second">
        What are the main skills required for your
        work?
      </h4>
      <div className="job__second__block">
        <p className="create__second__desc">Search skills or add your own</p>
        <div className="input-container">
          <input value={inputValue} type="text" className="job__second__input" onChange={handleChange} />
          <div className="selected-container">
            {/* {selectedSkills.map((e) => ( */}
            {/*   <span className="selected" key={e}> */}
            {/*     <p>{e}</p> */}
            {/*     <button type="button" className="skill-delete"
            onClick={() => handleSkillDelete(e)}>X</button> */}
            {/*   </span> */}
            {/* ))} */}
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
