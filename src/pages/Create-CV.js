import React, { useState } from 'react';
import Header from '../layouts/Header';
import CreateCvFirst from '../components/CreateCVFirst';
import StepIndicator from '../layouts/StepIndicator';

function CreateCv() {
  const [count, setCount] = useState(6);

  const handleNext = (operator) => {
    if (operator === '+') {
      setCount((prevState) => {
        const newCount = prevState + 1;
        return newCount;
      });
    } else if (operator === '-' && count !== 1) {
      setCount((prevState) => {
        const newCount = prevState - 1;
        return newCount;
      });
    }
  };

  return (
    <>
      <Header />
      <div className="create-cv">
        <div className="container">
          <div className="create-cv__row">
            <CreateCvFirst />
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
    </>
  );
}

export default CreateCv;
