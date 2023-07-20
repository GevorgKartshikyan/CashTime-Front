import React from 'react';
import Select from 'react-select';

function CreateCvFirst() {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      fontFamily: 'Lato,sans-serif',
      paddingLeft: 5,
      paddingRight: 15,
      color: 'rgba(3, 16, 84, 0.50)',
      width: 220,
      height: 37,
      border: state.isFocused ? 0 : 0,
      borderRadius: 8,
      background: '#FFF',
      outline: 'none',
      boxShadow: 'none',
      cursor: 'pointer',
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
    placeholder: (defaultStyles) => ({
      ...defaultStyles,
      color: 'rgba(3, 16, 84, 0.50)',
      fontSize: 14,
    }),
  };

  return (
    <div className="create-cv-first">
      <div className="create-cv-first__row">
        <h3 className="create-cv-first__title">
          What’s Your Professional Role?
        </h3>
        <input type="text" className="create-cv-first__input1" placeholder="UI/UX designer | Softer Engineer | IOS" />
        <h3 className="create-cv-first__title">
          Which Languages Do You Know?
        </h3>
        <div className="create-cv-first__block">
          <input type="text" className="create-cv-first__input2" placeholder="Armenian" />
          <div className="create-cv-first__select1">
            <Select
              options={options}
              placeholder="Level"
              styles={customStyles}
              components={{
                IndicatorSeparator: () => null,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateCvFirst;
