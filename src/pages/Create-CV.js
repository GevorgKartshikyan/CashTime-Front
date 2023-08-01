import React, { useState } from 'react';
import Header from '../layouts/Header';
import CreateCvFirst from '../components/CreateCVFirst';
import StepIndicator from '../layouts/StepIndicator';
import CreateCVSecond from '../components/CreateCVSecond';
import CreateCVThird from '../components/CreateCvThird';
import CreateCVFifth from '../components/CreateCVFifth';
import CreateCVSixth from '../components/CreateCVSixth';

function CreateCv() {
  const [count, setCount] = useState(1);
  const [data, setData] = useState({});
  const handleDataFromChild = (childData) => {
    setData((prevData) => ({
      ...prevData,
      ...childData,
    }));
  };
  console.log(data);
  const handleNext = (operator) => {
    if (operator === '+') {
      setCount((prevState) => {
        const newCount = prevState + 1;
        console.log(count);
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
            {count === 1 && <CreateCvFirst onData={handleDataFromChild} />}
            {count === 2 && <CreateCVSecond onData={handleDataFromChild} />}
            {count === 3 && <CreateCVThird onData={handleDataFromChild} />}
            {count === 4 && <CreateCVFifth onData={handleDataFromChild} />}
            {count === 5 && <CreateCVSixth onData={handleDataFromChild} />}
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
