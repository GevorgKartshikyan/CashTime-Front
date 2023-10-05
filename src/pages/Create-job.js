import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import CreateJobFirst from '../layouts/CreateJobFirst';
import CreateJobSecond from '../layouts/CreateJobSecond';
import StepIndicator from '../layouts/StepIndicator';
import CreateJobThird from '../layouts/CreateJobThird';
import CreateJobFourth from '../layouts/CreateJobFourth';
import CreateJobFifth from '../layouts/CreateJobFifth';
import CreateJobSixth from '../layouts/CreateJobSixth';
import CreateJobFinally from '../layouts/CreateJobFinally';
import Header from '../layouts/Header';
import setJobFormData from '../store/actions/createJobForm';

function CreateJob() {
  const { t } = useTranslation();
  const token = useSelector((state) => state.users.token);
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [localData, setLocalData] = useState({});
  const [isRight, setIsRight] = useState(false);
  const [file, setFile] = useState({});
  const profile = useSelector((state) => state.users.profile);
  const handleDataFromChild = (childData, x) => {
    setLocalData((prevData) => ({
      ...prevData,
      ...childData,
    }));
    setFile(x);
  };
  const handleNext = (operator, editCount) => {
    if (operator === '+') {
      setCount((prevState) => {
        const newCount = prevState + 1;
        if (prevState < newCount) {
          setIsRight(true);
        }
        return newCount;
      });
      dispatch(setJobFormData({ data: localData }));
    } else if (operator === '-' && count !== 1) {
      setCount((prevState) => {
        const newCount = prevState - 1;
        if (prevState > newCount) {
          setIsRight(false);
        }
        return newCount;
      });
    }
    if (editCount) {
      setCount(editCount);
    }
  };
  const pageVariants = {
    initial: { opacity: 0, x: isRight ? '100%' : '-100%' },
    in: { opacity: 1, x: '0' },
    out: { opacity: 0, x: '-100%' },
  };

  const pageTransition = {
    type: 'tween',
    ease: 'easeInOut',
    duration: 0.7,
  };

  if (!token) {
    window.location.href = '/login';
    return null;
  }

  if (profile.role === 'employee') {
    window.location.href = '/';
  }

  return (
    <>
      <Header />
      <div className="create__job">
        <div className="container">
          <div className="job-row">
            <motion.div
              key={count}
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              {count === 1 && <CreateJobFirst onData={handleDataFromChild} />}
              {count === 2 && <CreateJobSecond onData={handleDataFromChild} />}
              {count === 3 && <CreateJobThird onData={handleDataFromChild} />}
              {count === 4 && <CreateJobFourth onData={handleDataFromChild} />}
              {count === 5 && <CreateJobFifth onData={handleDataFromChild} />}
              {count === 6 && <CreateJobSixth onData={handleDataFromChild} />}
              {count === 7 && <CreateJobFinally file={file} editCount={handleNext} />}
            </motion.div>
          </div>
        </div>
        <div className="container-job container">
          {count < 7 ? (
            <div className="button-row">
              <StepIndicator step={count} count={6} editCount={handleNext} />
              <div className="job__buttons">
                <button type="button" className="job__btn" onClick={() => handleNext('-')}>
                  {t('create_cv_button_go_back')}
                </button>
                <button type="button" className="job__btn" onClick={() => handleNext('+')}>
                  {t('create_cv_button_Skip_Or_Next')}
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default CreateJob;
