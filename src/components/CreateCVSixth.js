import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import dollarImg from '../assets/images/dollar.svg';

function CreateCvSixth(props) {
  const { onData } = props;
  const dataFromSixth = useSelector((state) => (state.createCvForm.dataFromChild6));
  const [sixthData, setSixthData] = useState(dataFromSixth ? dataFromSixth.sixthData : { category: '', rateSum: '' });

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      fontFamily: 'Lato,sans-serif',
      paddingLeft: 5,
      paddingRight: 15,
      color: 'rgba(3, 16, 84, 0.50)',
      width: 537,
      height: 37,
      border: state.isFocused ? 0 : 0,
      borderRadius: 8,
      background: '#FFF',
      outline: 'none',
      marginBottom: 30,
      boxShadow: 'none',
      '&:hover': {
        borderColor: 'rgba(3, 16, 84, 0.70)',
      },
      '&:focus': {
        borderColor: 'rgba(3, 16, 84, 0.90)',
        boxShadow: 'none',
      },
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? '#FFF' : '#333',
      background: state.isSelected ? 'rgba(3, 16, 84, 0.50)' : null,
      cursor: 'pointer',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'rgba(3, 16, 84, 0.70)',
    }),
    placeholder: (defaultStyles) => ({
      ...defaultStyles,
      color: 'rgba(3, 16, 84, 0.50)',
      fontSize: 14,
    }),
  };

  const options = [
    {
      value: 'chocolate',
      label: 'Chocolate',
    },
    {
      value: 'strawberry',
      label: 'Strawberry',
    },
    {
      value: 'vanilla',
      label: 'Vanilla',
    },
  ];

  useEffect(() => {
    onData({
      dataFromChild6: {
        sixthData,
      },
    });
  }, [sixthData]);

  return (
    <div className="CreateCvSixth">
      <div className="CreateCvSixth__services">
        <div className="CreateCvSixth__services__text">
          <h3>Great! Now Let Us Know What Services You Do. (category)</h3>
        </div>
        <div className="CreateCvSixth__services__select">
          <Select
            options={options}
            styles={customStyles}
            components={{
              IndicatorSeparator: () => null,
            }}
            placeholder="Search of Servcie"
            onChange={(e) => setSixthData({ ...sixthData, category: e.value })}
            value={options.find((option) => option.value === sixthData.category)}
          />
        </div>
      </div>
      <div className="CreateCvSixth__suggest">
        <h3 className="CreateCvSixth__suggest__title">
          Now Set Your Hourly Rate
        </h3>
        <div className="CreateCvSixth__suggest__block">
          <p className="CreateCvSixth__suggest__block-text">
            Hourly rate
          </p>
          <div className="CreateCvSixth__suggest__block-bottom">
            <label htmlFor="CreateCvSixth__suggest__block-input">
              <img src={dollarImg} alt="" />
              <input
                type="number"
                id="CreateCvSixth__suggest__block-input"
                placeholder="0.00"
                maxLength={3}
                className="CreateCvSixth__suggest__block-input"
                onChange={(e) => setSixthData({ ...sixthData, rateSum: e.target.value })}
                value={sixthData.rateSum}
              />
            </label>
            <p>/hr</p>
          </div>
        </div>
      </div>
    </div>
  );
}

CreateCvSixth.propTypes = {
  onData: PropTypes.func.isRequired,
};

export default CreateCvSixth;
