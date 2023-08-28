import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import CheckboxItemsBlock from '../components/Checkbox-Items-block';

function SignUpStepsFirst(props) {
  const { onData } = props;
  const titles = [
    {
      id: 1,
      title: 'Have You Done a freelance Before?',
    },
    {
      id: 2,
      title: 'What’s Your Goal?',
    },
  ];
  const [data, setData] = useState({
    isFreelancer: null,
    yourGoal: null,
  });
  const [step, setStep] = useState(0);
  const [isRight, setIsRight] = useState(false);
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
  useEffect(() => {
    onData({
      dataSignUpFirstStep: data,
    });
  }, [data]);
  return (
    <div className="sign-up-steps-first new-css">
      <div className="container sign-up-steps-first__container">
        <div className="sign-up-steps-first__block">
          <motion.div
            key={step}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <h3 className="sign-up-steps-first__block__title">{titles[step].title}</h3>
            {step + 1 === 1 && <CheckboxItemsBlock type="isFreelancer" data={data} setData={setData} levels={['This is My Very First Time', 'Intermediate', 'Expert']} />}
            {step + 1 === 2 && <CheckboxItemsBlock type="yourGoal" data={data} setData={setData} levels={['To Earn Main Income', 'To Make Money On the Side', 'I Don’t Have a Goal in mind']} />}
          </motion.div>
          <div className="sign-up-steps-first__block__step-block">
            <span role="presentation" onClick={() => handleStep(0)} className={step + 1 === 1 ? 'sign-up-steps-first__block__step-block__num active' : 'sign-up-steps-first__block__step-block__num'}>1</span>
            <div className="sign-up-steps-first__block__step-block__line" />
            <span role="presentation" onClick={() => handleStep(1)} className={step + 1 === 2 ? 'sign-up-steps-first__block__step-block__num active' : 'sign-up-steps-first__block__step-block__num'}>2</span>
          </div>
        </div>
      </div>
    </div>
  );
}

SignUpStepsFirst.propTypes = {
  onData: PropTypes.func.isRequired,
};

export default SignUpStepsFirst;
