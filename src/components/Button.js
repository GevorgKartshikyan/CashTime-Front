import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { className, title } = props;
  return (
    <button type="button" className={className}>{title}</button>
  );
}

Button.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,

};
export default Button;
