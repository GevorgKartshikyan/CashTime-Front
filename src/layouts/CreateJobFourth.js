import React, { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

function CreateJobFourth(props) {
  const { onData } = props;
  const { t } = useTranslation();
  const fourthFormPrice = useSelector((state) => state.createJobForm.dataFromChild4) ?? {};
  const methods = [t('create_job_page_four_two'), t('create_job_page_four_three')];
  const [selectedMethod, setSelectedMethod] = useState(fourthFormPrice.method || 'Hourly Rate');
  const [priceFrom, setPriceFrom] = useState(fourthFormPrice.priceFrom || '');
  const [priceTo, setPriceTo] = useState(fourthFormPrice.priceTo || '');
  const [maxPrice, setMaxPrice] = useState(fourthFormPrice.maxPrice || '');
  const currencySign = '$';
  useEffect(() => {
    onData({
      dataFromChild4: {
        method: selectedMethod,
        priceFrom: priceFrom || null,
        priceTo: priceTo || null,
        maxPrice: maxPrice || null,
      },
    });
  }, [priceFrom, priceTo, maxPrice, selectedMethod]);
  const handleInputFromChange = useCallback((e) => {
    let { value } = e.target;
    value = value.replace(currencySign, '');
    setPriceFrom(value);
    setMaxPrice('');
  }, []);
  const handleInputToChange = useCallback((e) => {
    let { value } = e.target;
    value = value.replace(currencySign, '');
    setPriceTo(value);
    setMaxPrice('');
  }, []);
  // console.log(priceFrom, priceTo);

  const handleProjectChange = useCallback((e) => {
    setMaxPrice(e.target.value);
    setPriceTo('');
    setPriceFrom('');
  }, []);
  const methodChange = (event) => {
    setSelectedMethod(event.target.value);
  };
  return (
    <div className="job__form__container">
      <h4 className="create__job__title second">
        {t('create_job_page_four_one')}
      </h4>
      <div className="job-third-checkbox fourth">
        <div className="label-container">
          {methods.map((e) => (
            <label htmlFor={e} className="level-label fourth-checkbox" key={e}>
              <p className="label-desc">{e}</p>
              <input type="radio" name="method" value={e} id={e} className="level-input" checked={selectedMethod === e} onChange={methodChange} />
              <div className="check-container">
                <span className="check-squad">
                  {selectedMethod === e && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                    <path d="M10.063 16.4L6.06299 12.4L7.46299 11L10.063 13.6L16.663 7L18.063 8.4L10.063 16.4Z" fill="white" />
                  </svg>
                  )}
                </span>
              </div>
            </label>
          ))}
        </div>
        {selectedMethod === t('create_job_page_four_two') ? (
          <motion.div
            key="input-container"
            className="input-container-fourth"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeInOut' }}
          >
            <div className="price-container">
              <div>
                <p className="price-from">{t('create_job_page_four_four')}</p>
                <input value={`${priceFrom}${currencySign}`} onChange={handleInputFromChange} type="text" className="price-from-input" />
              </div>
              <span className="hr">/hr</span>
            </div>
            <div className="price-container">
              <div style={{ marginLeft: '20px' }}>
                <p className="price-from">{t('create_job_page_four_five')}</p>
                <input value={`${priceTo}${currencySign}`} onChange={handleInputToChange} type="text" className="price-to-input" />
              </div>
              <span className="hr">{t('create_job_page_four_six')}</span>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="project-container"
            className="project-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeInOut' }}
          >
            <p className="max-price">Maximum project budget (USD)</p>
            <input value={maxPrice} type="text" className="price-to-input project" onChange={handleProjectChange} />
          </motion.div>
        )}
      </div>
    </div>
  );
}
CreateJobFourth.propTypes = {
  onData: PropTypes.func.isRequired,
};

export default CreateJobFourth;
