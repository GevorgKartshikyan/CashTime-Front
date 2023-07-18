import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CreateJobFirst from '../layouts/CreateJobFirst';
import CreateJobSecond from '../layouts/CreateJobSecond';
import StepIndicator from '../layouts/StepIndicator';
import CreateJobThird from '../layouts/CreateJobThird';
import CreateJobFourth from '../layouts/CreateJobFourth';
import CreateJobFifth from '../layouts/CreateJobFifth';
import CreateJobSixth from '../layouts/CreateJobSixth';

function CreateJob() {
  const [count, setCount] = useState(6);
  const [data, setData] = useState({});
  const [isRight, setIsRight] = useState(false);
  const handleDataFromChild = (childData) => {
    setData((prevData) => ({
      ...prevData,
      ...childData,
    }));
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
    console.log(data);
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
          </motion.div>
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
    </div>
  );
}

export default CreateJob;
// import React, { useRef } from 'react';
//
// function App() {
//   const inputs = useRef([]);
//
//   const handleInputChange = (index, e) => {
//     const { value } = e.target;
//     if (value.length === 1 && index < inputs.current.length - 1) {
//       inputs.current[index + 1].focus();
//     }
//   };
//
//   const handleKeyDown = (index, e) => {
//     const { value } = e.target;
//     if (e.keyCode === 8 && value.length === 0 && index > 0) {
//       inputs.current[index - 1].focus();
//     }
//   };
//
//   return (
//     <div>
//       {Array.from({ length: 4 }, (_, index) => (
//         <input
//           key={index}
//           ref={(ref) => {
//             inputs.current[index] = ref;
//             return null;
//           }}
//           type="text"
//           maxLength={1}
//           onChange={(e) => handleInputChange(index, e)}
//           onKeyDown={(e) => handleKeyDown(index, e)}
//         />
//       ))}
//     </div>
//   );
// }
//
// export default App;
