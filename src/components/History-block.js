import React, { useState } from 'react';
import { motion } from 'framer-motion';
import helpIcon from '../assets/images/history_help_icon.svg';

function HistoryBlock() {
  const [showHelpBlock, setShowHelpBlock] = useState(false);

  const handleClick = () => {
    setShowHelpBlock(!showHelpBlock);
  };

  return (
    <div className="history__block">
      <p className="history__block__title">
        Sunday, May 14
      </p>
      <div className="history__block__content">
        <button
          className="history__block__button"
          type="button"
          onClick={() => handleClick()}
        >
          <p className="history__block__content-time">
            Evening Walk at 17:00-18:00
          </p>
          <p className="history__block__content-sum">
            9000AMD, Gyumri Armenia, Location
          </p>
        </button>
        {showHelpBlock ? (
          <motion.div
            className="history__block__help"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <button className="history__block__help-img" type="button">
              <img src={helpIcon} alt="" />
            </button>
            <p className="history__block__help-text">
              Help Center
            </p>
          </motion.div>
        ) : null}
      </div>
    </div>
  );
}

export default HistoryBlock;
