import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CheckboxItemsBlock from '../components/Checkbox-Items-block';
import ResumeBlock from '../components/Resume-block';
import PdfUpload from '../components/Pdf-upload';
import Header from '../layouts/Header';

function SignUpStepsFirst() {
  const titles = [
    {
      id: 1,
      title: 'Have You Done a freelance Before?',
    },
    {
      id: 2,
      title: 'What’s Your Goal?',
    },
    {
      id: 3,
      title: 'Let Us know You Better',
    },
  ];
  const [data, setData] = useState({
    isFreelancer: null,
    yourGoal: null,
  });
  const [step, setStep] = useState(0);
  const [flag, setFlag] = useState(false);
  const [isRight, setIsRight] = useState(false);
  const handlePrevNext = (prevOrNext) => {
    if (prevOrNext === 'prev' && flag) {
      setIsRight(false);
      setFlag(false);
    } else if (prevOrNext === 'prev' && step > 0) {
      setStep(step - 1);
      setIsRight(false);
    } else if (prevOrNext === 'next' && step < 2) {
      setStep(step + 1);
      setIsRight(true);
    } else if (prevOrNext === 'next' && step === 2) {
      setFlag(true);
    }
  };
  const handleStep = (num) => {
    if (num > step) {
      setIsRight(true);
    } else if (num < step) {
      setIsRight(false);
    }
    setStep(num);
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
      <div className="sign-up-steps-first new-css">
        <div className="container sign-up-steps-first__container">
          {!flag
            ? (
              <div className="sign-up-steps-first__block">
                <h3 className="sign-up-steps-first__block__title">{titles[step].title}</h3>
                <div className="sign-up-steps-first__block__step-block">
                  <span role="presentation" onClick={() => handleStep(0)} className={step + 1 === 1 ? 'sign-up-steps-first__block__step-block__num active' : 'sign-up-steps-first__block__step-block__num'}>1</span>
                  <div className="sign-up-steps-first__block__step-block__line" />
                  <span role="presentation" onClick={() => handleStep(1)} className={step + 1 === 2 ? 'sign-up-steps-first__block__step-block__num active' : 'sign-up-steps-first__block__step-block__num'}>2</span>
                  <div className="sign-up-steps-first__block__step-block__line" />
                  <span role="presentation" onClick={() => handleStep(2)} className={step + 1 === 3 ? 'sign-up-steps-first__block__step-block__num active' : 'sign-up-steps-first__block__step-block__num'}>3</span>
                </div>
                <motion.div
                  key={step}
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  {step + 1 === 1 && <CheckboxItemsBlock type="isFreelancer" data={data} setData={setData} levels={['This is My Very First Time', 'Intermediate', 'Expert']} />}
                  {step + 1 === 2 && <CheckboxItemsBlock type="yourGoal" data={data} setData={setData} levels={['To Earn Main Income', 'To Make Money On the Side', 'I Don’t Have a Goal in mind']} />}
                  {step + 1 === 3 && <ResumeBlock flag={flag} setFlag={setFlag} />}
                </motion.div>
              </div>
            )
            : (
              <motion.div
                key={step}
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <PdfUpload />
              </motion.div>
            )}
          <div className="sign-up-steps-first__buttons-block">
            <button type="button" className="job__btn" onClick={() => handlePrevNext('prev')}>
              Go Back
            </button>
            <button type="button" className="job__btn" onClick={() => handlePrevNext('next')}>
              Skip Or Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpStepsFirst;
