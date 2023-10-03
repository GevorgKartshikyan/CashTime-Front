import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function CreateCvSecond(props) {
  const { onData } = props;

  const educationHistoryData = useSelector((state) => (
    state.createCvForm.dataFromChild2.educationHistory
  ));

  const [educationHistory, setEducationHistory] = useState(educationHistoryData ?? {
    school: '', degree: '', dateAttended: '', dataExpected: '',
  });

  console.log(educationHistoryData);

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
    { value: '1992', label: '1992' },
    { value: '1993', label: '1993' },
    { value: '1994', label: '1994' },
    { value: '1995', label: '1995' },
    { value: '1996', label: '1996' },
    { value: '1997', label: '1997' },
    { value: '1998', label: '1998' },
    { value: '1999', label: '1999' },
    { value: '2000', label: '2000' },
    { value: '2001', label: '2001' },
    { value: '2002', label: '2002' },
    { value: '2003', label: '2003' },
    { value: '2004', label: '2004' },
    { value: '2005', label: '2005' },
    { value: '2006', label: '2006' },
    { value: '2007', label: '2007' },
    { value: '2008', label: '2008' },
    { value: '2009', label: '2009' },
    { value: '2010', label: '2010' },
    { value: '2011', label: '2011' },
    { value: '2012', label: '2012' },
    { value: '2013', label: '2013' },
    { value: '2014', label: '2014' },
    { value: '2016', label: '2016' },
    { value: '2017', label: '2017' },
    { value: '2018', label: '2018' },
    { value: '2019', label: '2019' },
    { value: '2020', label: '2020' },
    { value: '2021', label: '2021' },
    { value: '2022', label: '2022' },
    { value: '2023', label: '2023' },
  ];

  useEffect(() => {
    onData({
      dataFromChild2: {
        educationHistory,
      },
    });
  }, [educationHistory]);

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
            <input type="text" id="school" value={educationHistory.school} onChange={(e) => setEducationHistory({ ...educationHistory, school: e.target.value })} />
          </label>
          <label htmlFor="degree" className="create__second__form__degree">
            <p>Degree*</p>
            <input type="text" id="degree" value={educationHistory.degree} onChange={(e) => setEducationHistory({ ...educationHistory, degree: e.target.value })} />
          </label>
          <div className="create__second__form__dates">
            <p>Dates Attended*</p>
            <Select
              options={options}
              styles={customStyles}
              value={options.find((option) => option.value === educationHistory.dateAttended)}
              onChange={(e) => setEducationHistory({ ...educationHistory, dateAttended: e.value })}
              components={{
                IndicatorSeparator: () => null,
              }}
              placeholder="From"
            />
            <Select
              options={options}
              styles={customStyles}
              value={options.find((option) => option.value === educationHistory.dataExpected)}
              onChange={(e) => setEducationHistory({ ...educationHistory, dataExpected: e.value })}
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

CreateCvSecond.propTypes = {
  onData: PropTypes.func.isRequired,
};

export default CreateCvSecond;
