import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CreateJobFirst from '../layouts/CreateJobFirst';
import CreateJobSecond from '../layouts/CreateJobSecond';
import StepIndicator from '../layouts/StepIndicator';
import CreateJobThird from '../layouts/CreateJobThird';
import CreateJobFourth from '../layouts/CreateJobFourth';
import CreateJobFifth from '../layouts/CreateJobFifth';
import CreateJobSixth from '../layouts/CreateJobSixth';
import CreateJobFinally from '../layouts/CreateJobFinally';
import Header from '../layouts/Header';

function CreateJob() {
  const [count, setCount] = useState(2);
  const [data, setData] = useState({});
  const [isRight, setIsRight] = useState(false);
  const handleDataFromChild = (childData) => {
    setData((prevData) => ({
      ...prevData,
      ...childData,
    }));
  };
  const handleCountChange = (newCount) => {
    setCount(newCount);
  };
  const handleNext = (operator) => {
    if (operator === '+') {
      setCount((prevState) => {
        const newCount = prevState + 1;
        if (prevState < newCount) {
          setIsRight(true);
        }
        return newCount;
      });
    } else if (operator === '-' && count !== 1) {
      setCount((prevState) => {
        const newCount = prevState - 1;
        if (prevState > newCount) {
          setIsRight(false);
        }
        return newCount;
      });
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
              {count === 7 && <CreateJobFinally data={data} edit={handleCountChange} />}
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

export default CreateJob;
