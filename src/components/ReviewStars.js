import React from 'react';
import PropTypes from 'prop-types';

function ReviewStars(props) {
  const { fill } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" fill="none">
      <path d="M6.50781 0L7.96715 4.49139H12.6897L8.86908 7.26722L10.3284 11.7586L6.50781 8.98278L2.68721 11.7586L4.14655 7.26722L0.325945 4.49139H5.04847L6.50781 0Z" fill={fill || '#ccc'} />
    </svg>
  );
}

ReviewStars.propTypes = {
  fill: PropTypes.string.isRequired,
};
export default ReviewStars;
