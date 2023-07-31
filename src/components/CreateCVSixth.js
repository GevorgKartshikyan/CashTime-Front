import React from 'react';
import Select from 'react-select';

function CreateCvSixth() {
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
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  return (
    <div className="CreateCvSixth">
      <div className="CreateCvSixth__services">
        <div className="CreateCvSixth__services__text">
          <h3>Great! Now Let Us Know What Services You Do.</h3>
        </div>
        <div className="CreateCvSixth__services__select">
          <Select
            options={options}
            styles={customStyles}
            components={{
              IndicatorSeparator: () => null,
            }}
            placeholder="Search of Servcie"
          />
        </div>
      </div>
      <div className="CreateCvSixth__suggest">
        <p>Suggested Service</p>
        <button type="button">+ Web Designer</button>
      </div>
    </div>
  );
}

export default CreateCvSixth;
