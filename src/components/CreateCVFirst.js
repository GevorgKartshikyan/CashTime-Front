import React, { useCallback, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function CreateCvFirst(props) {
  const { onData } = props;
  const options = [
    { value: 'beginner', label: 'Beginner(Level A1)' },
    { value: 'intermediate', label: 'Intermediate(Level B1)' },
    { value: 'upper-intermediate', label: 'Upper-Intermediate(Level B2)' },
    { value: 'advanced', label: 'Advanced(Level C1)' },
    { value: 'mastery', label: 'Mastery(Level C2)' },
  ];

  const languagesData = useSelector((state) => state.createCvForm.dataFromChild1.languages);
  const proffesionValueData = useSelector((state) => (
    state.createCvForm.dataFromChild1.professionValue
  ));

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

  const [languages, setLanguages] = useState(languagesData ?? [
    { language: '', level: '', id: uuidv4() },
  ]);

  const [professionValue, setProfessionValue] = useState(proffesionValueData ?? '');

  const handleProfessionValue = useCallback((e) => {
    setProfessionValue(e.target.value);
  }, [professionValue]);

  const handleAddLanguage = useCallback(() => {
    setLanguages([...languages, { language: '', level: '', id: uuidv4() }]);
  }, [languages]);

  const handleChange = useCallback((index, key, value) => {
    const updatedLanguages = languages.map((lang, i) => {
      if (i === index) {
        return { ...lang, [key]: value };
      }
      return lang;
    });
    setLanguages(updatedLanguages);
  }, [languages]);
  useEffect(() => {
    onData({
      dataFromChild1: {
        professionValue,
        languages,
      },
    });
  }, [languages, professionValue]);
  return (
    <div className="create-cv-first">
      <div className="create-cv-first__row">
        <h3 className="create-cv-first__title">
          What’s Your Professional Role?
        </h3>
        <input type="text" className="create-cv-first__input1" value={professionValue} onChange={(e) => handleProfessionValue(e)} placeholder="UI/UX designer | Softer Engineer | IOS" />
        <h3 className="create-cv-first__title">
          Which Languages Do You Know?
        </h3>
        {languages.map((lang, index) => (
          <div className="create-cv-first__block" key={lang.id}>
            <input type="text" className="create-cv-first__input2" value={lang.language} placeholder="Armenian" onChange={(e) => handleChange(index, 'language', e.target.value)} />
            <div className="create-cv-first__select1">
              <Select
                options={options}
                placeholder="Level"
                value={options.find((option) => option.value === lang.level)}
                styles={customStyles}
                components={{
                  IndicatorSeparator: () => null,
                }}
                onChange={(e) => handleChange(index, 'level', e.value)}
              />
            </div>
          </div>
        ))}
        <button type="button" className="create-cv-first__button" onClick={handleAddLanguage}>
          + Add Language
        </button>
      </div>
    </div>
  );
}

CreateCvFirst.propTypes = {
  onData: PropTypes.func.isRequired,
};

export default CreateCvFirst;
