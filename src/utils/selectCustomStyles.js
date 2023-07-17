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
    marginBottom: 15,
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
export default customStyles;
