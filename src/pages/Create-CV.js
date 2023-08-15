import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import Header from '../layouts/Header';
import CreateCvFirst from '../components/CreateCVFirst';
import StepIndicator from '../layouts/StepIndicator';
import CreateCVSecond from '../components/CreateCVSecond';
import CreateCVThird from '../components/CreateCvThird';
import CreateCVFifth from '../components/CreateCVFifth';
import CreateCVSixth from '../components/CreateCVSixth';
import CreateCVSeventh from '../components/CreateCVSeventh';
import CreateCVFinally from '../components/CreateCVFinally';
import createCvFormData from '../store/actions/createCvForm';

function CreateCv() {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [localData, setLocalData] = useState({});
  const [isRight, setIsRight] = useState(false);
  const [file, setFile] = useState({});
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
      dispatch(createCvFormData({ data: localData }));
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

  return (
    <>
      <Header />
      <div className="create-cv">
        <div className="container">
          <div className="create-cv__row">
            <motion.div
              key={count}
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
              style={{ alignSelf: 'center' }}
            >
              {count === 1 && <CreateCvFirst onData={handleDataFromChild} />}
              {count === 2 && <CreateCVSecond onData={handleDataFromChild} />}
              {count === 3 && <CreateCVThird onData={handleDataFromChild} />}
              {count === 4 && <CreateCVFifth onData={handleDataFromChild} />}
              {count === 5 && <CreateCVSixth onData={handleDataFromChild} />}
              {count === 6 && <CreateCVSeventh onData={handleDataFromChild} />}
              {count === 7 && <CreateCVFinally file={file} editCount={handleNext} />}
            </motion.div>
          </div>
        </div>
        <div className="container-job container">
          {count < 7 ? (
            <div className="button-row">
              <StepIndicator step={count} />
              <div className="job__buttons">
                <button type="button" className="job__btn" onClick={() => handleNext('-')}>
                  Go Back
                </button>
                <button type="button" className="job__btn" onClick={() => handleNext('+')}>
                  Skip Or Next
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default CreateCv;
