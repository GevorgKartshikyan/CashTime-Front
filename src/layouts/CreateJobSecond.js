import React, {
  useCallback, useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { AnimatePresence, motion } from 'framer-motion';
import { useSelector } from 'react-redux';

function CreateJobSecond(props) {
  const { onData } = props;
  const secondFormArray = useSelector((state) => state.createJobForm.dataFromChild2) ?? [];
  const skills = [
    { id: 1, defaultSkills: 'User Experience' },
    { id: 2, defaultSkills: 'Figma' },
    { id: 3, defaultSkills: 'Photoshop' },
    { id: 4, defaultSkills: 'test' },
  ];
  const [selectedSkills, setSelectedSkills] = useState(secondFormArray ?? []);
  const [inputValue, setInputValue] = useState('');

  const handleSkill = useCallback((skill) => {
    const lowerCaseSelectedSkills = selectedSkills.map((s) => s.skill.toLowerCase());
    const lowerCaseSkill = skill.toLowerCase();

    if (!lowerCaseSelectedSkills.includes(lowerCaseSkill)) {
      setSelectedSkills([...selectedSkills, { skill, id: _.uniqueId() }]);
      setInputValue('');
    }
  }, [selectedSkills, setSelectedSkills, inputValue]);

  useEffect(() => {
    onData({ dataFromChild2: selectedSkills });
  }, [selectedSkills]);
  const handleChange = useCallback((e) => {
    setInputValue(e.target.value);
  }, [inputValue]);
  const handleSkillDelete = useCallback((e) => {
    setSelectedSkills(selectedSkills.filter((item) => item.id !== e));
  }, [selectedSkills]);
  return (
    <div className="job__form__container">
      <h4 className="create__job__title second">
        What are the main skills required for your work?
      </h4>
      <div className="job__second__block">
        <p className="create__second__desc">Search skills or add your own</p>
        <div className="input-container">
          <input value={inputValue} type="text" className="job__second__input" onChange={handleChange} />
          {inputValue && (
            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              type="button"
              className="job-second-btn-for-add-skill"
              onClick={() => handleSkill(inputValue)}
            >
              + Add Skill
            </motion.button>
          )}
          <AnimatePresence>
            {selectedSkills.length > 0 && (
              <>
                <p>Selected Skills</p>
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="job__second-selected-container"
                  style={{ width: '100%' }}
                >
                  <>
                    {selectedSkills.map((e) => (
                      <motion.p
                        key={e.id}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0, transition: { delay: 0.1, duration: 0.8 } }}
                        exit={{ opacity: 0, y: -10, transition: { delay: 0, duration: 0.3 } }}
                        className="job__second-selected-skills"
                      >
                        {e.skill}
                        <button type="button" onClick={() => handleSkillDelete(e.id)}>
                          X
                        </button>
                      </motion.p>
                    ))}
                  </>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div className="job__second__skills_block job__second__block">
        <p className="suggested-skills">Suggested skills</p>
        <div className="skills">
          {skills.map((e) => (
            <button
              type="button"
              key={e.id}
              className="skills__title"
              onClick={() => handleSkill(e.defaultSkills)}
            >
              {`+ ${e.defaultSkills}`}
            </button>
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
