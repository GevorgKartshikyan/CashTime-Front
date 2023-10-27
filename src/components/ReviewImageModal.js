import React, { useEffect, useRef } from 'react';

const { REACT_APP_API_URL } = process.env;

function ReviewImageModal({ image, selectedImgae }) {
  const ref = useRef();
  useEffect(() => {
    if (image) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [image]);

  return (
    <div ref={ref} className="review-big-image-block">
      <img src={REACT_APP_API_URL + image} alt="review" />
      <div
        onClick={() => selectedImgae('')}
        role="presentation"
        className="review-image-close"
      />
    </div>
  );
}

export default ReviewImageModal;
