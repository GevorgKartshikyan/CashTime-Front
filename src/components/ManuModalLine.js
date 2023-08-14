import React from 'react';
import PropTypes from 'prop-types';

function ManuModalLine(props) {
  const { image, text } = props;
  return (
    <button type="button" className="manu-modal__line">
      <img className="manu-modal__line__img" src={image} alt="" />
      <span className="manu-modal__line__text">{text}</span>
    </button>
  );
}

ManuModalLine.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
export default ManuModalLine;
