import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ReviewPhoto(props) {
  const [showBtn, setShowBtn] = useState(false);
  // const [showModal, setShowModal] = useState(false);
  const { jobImgSrc, setShowImg } = props;

  return (
    <div className="review-info__job__imgBox" role="presentation" onMouseEnter={() => setShowBtn(true)} onMouseLeave={() => setShowBtn(false)}>
      <img className="review-info__job__imgBox__img" src={jobImgSrc} alt="img" />
      {showBtn ? <button type="button" onClick={setShowImg} className="review-info__job__imgBox__btn">See All</button> : null}
    </div>
  );
}
ReviewPhoto.propTypes = {
  jobImgSrc: PropTypes.string.isRequired,
  setShowImg: PropTypes.func.isRequired,
};

export default ReviewPhoto;
