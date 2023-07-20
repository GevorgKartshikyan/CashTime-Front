import React from 'react';
import Select from 'react-select';

function CreateCvSecond() {
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      fontFamily: 'Lato,sans-serif',
      paddingLeft: 5,
      paddingRight: 15,
      color: 'rgba(3, 16, 84, 0.50)',
      width: 415,
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
    <div className="create__second">
      <div className="create__second__title">
        <h3>
          Add Your Education History
        </h3>
      </div>
      <div className="create__second__form">
        <form action="">
          <label htmlFor="school" className="create__second__form__school">
            <p>School*</p>
            <input type="text" id="school" />
          </label>
          <label htmlFor="degree" className="create__second__form__degree">
            <p>Degree*</p>
            <input type="text" id="degree" />
          </label>
          <div className="create__second__form__dates">
            <p>Dates Attended*</p>
            <Select
              options={options}
              styles={customStyles}
              components={{
                IndicatorSeparator: () => null,
              }}
              placeholder="From"
            />
            <Select
              options={options}
              styles={customStyles}
              components={{
                IndicatorSeparator: () => null,
              }}
              placeholder="To (or to expected graduation date)"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateCvSecond;
