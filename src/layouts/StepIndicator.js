import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

function StepIndicator(props) {
  const { step, editCount, count } = props;

  const circleTransition = {
    type: 'tween',
    ease: 'easeInOut',
    duration: 0.5,
  };

  const fillTransition = {
    type: 'tween',
    ease: 'easeInOut',
    duration: 0.5,
  };

  return (
    <div className="step-indicator">
      {Array.from({ length: count }, (_, index) => (
        <div className="step-container" key={index}>
          <div className="circles-container">
            <svg onClick={() => { editCount(null, index + 1); }} className="big-circle" xmlns="http://www.w3.org/2000/svg" width="68" height="71" viewBox="0 0 68 71" fill="none">
              <motion.path
                d="M64.7349 35.0769C64.7349 52.8926 50.8167 67.1538 33.8674 67.1538C16.9182 67.1538 3 52.8926 3 35.0769C3 17.2612 16.9182 3 33.8674 3C50.8167 3 64.7349 17.2612 64.7349 35.0769Z"
                stroke={index + 1 < step ? '#031054' : '#9CA3AF'}
                strokeWidth="6"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={circleTransition}
              />
            </svg>
            {index < step && (
              <motion.svg onClick={() => { editCount(null, index + 1); }} className="small-circle" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <motion.ellipse
                  cx="11.5021"
                  cy="11.9129"
                  rx="11.5021"
                  ry="11.9129"
                  fill={index < step - 1 ? '#E17A01' : '#D1D5DB'}
                  initial={{ scale: 0, fillOpacity: 0 }}
                  animate={{ scale: 1, fillOpacity: 1 }}
                  exit={{ scale: 0, fillOpacity: 0 }}
                  transition={{ ...circleTransition, fill: fillTransition }}
                />
              </motion.svg>
            )}
          </div>
          {index !== count - 1 && (
            <svg className="circles-line" xmlns="http://www.w3.org/2000/svg" width="90" height="4" viewBox="0 0 90 4" fill="none">
              <rect x="0.0960693" y="0.0917969" width="89.4611" height="3.30914" fill="#D1D5DB" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}

StepIndicator.propTypes = {
  step: PropTypes.number.isRequired,
  editCount: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};

export default StepIndicator;
