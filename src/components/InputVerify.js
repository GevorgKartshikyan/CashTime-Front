import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

function InputVerify(props) {
  const { onData } = props;
  const inputs = useRef([]);
  const [code, setCode] = useState('');

  const handleInputChange = (index, e) => {
    const { value } = e.target;
    if (value.length === 1 && index < inputs.current.length - 1) {
      inputs.current[index + 1].focus();
    }
    setCode((prevState) => {
      const nextCode = prevState.substring(0, index) + value + prevState.substring(index + 1);
      return nextCode;
    });
  };

  useEffect(() => {
    onData(code);
  }, [code]);
  const handleKeyDown = (index, e) => {
    const { value } = e.target;
    if (e.keyCode === 8 && value.length === 0 && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  return (
    <div className="input__verify__div">
      {Array.from({ length: 4 }, (_, index) => (
        <input
          className={`input__verify ${index < 3 ? 'input__verify__upto_3' : ''}`}
          key={index}
          ref={(ref) => {
            inputs.current[index] = ref; return null;
          }}
          type="text"
          maxLength={1}
          onChange={(e) => handleInputChange(index, e)}
          onKeyDown={(e) => handleKeyDown(index, e)}
        />
      ))}
      {' '}

    </div>
  );
}

InputVerify.propTypes = {
  onData: PropTypes.func.isRequired,
};
export default InputVerify;
