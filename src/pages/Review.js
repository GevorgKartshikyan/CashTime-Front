import React, { useState } from 'react';
import { Progress } from 'react-sweet-progress';
import { useSelector } from 'react-redux';
import Avatar from '../assets/images/avatar.svg';
import 'react-sweet-progress/lib/style.css';
import ReviewUserCard from '../components/ReviewUserCard';
import Button from '../components/Button';
// import ReviewPhoto from '../components/ReviewPhoto';
import imageAssets from '../components/assetList';

function Review(props) {
  const { setShowImg } = props;
  const token = useSelector((state) => state.users.token);
  if (!token) {
    window.location.href = '/login';
    return null;
  }
  const [selectedStars, setSelectedStars] = useState(0);
  // const [selectedPhoto, setSelectedPhoto] = useState('');
  // const [showModal, setShowModal] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  // const [showModal, setShowModal] = useState(false);
  // const { jobImgSrc, setShowImg } = props;
  const progress = {
    excellent: 80,
  };
  const handleStarChange = (event) => {
    setSelectedStars(parseInt(event.target.value, 10));
  };

  // const handlePhotoClick = (selectedImage) => {
  //   setShowModal(true);
  //   const selectedIndex = imageAssets.indexOf(selectedImage);
  //   setSelectedPhoto(selectedIndex);
  // };
  const customStyle = {
    root: {
      height: '3px',
      background: 'rgba(3, 16, 84, 0.30)',
    },
  };

  return (
    <div className="review-info">
      <div className="review-info__box">
        <div className="review-info__box__rating">
          <h2 className="review-info__box__rating__opinion">4.0</h2>
          <div className="rate-orange">
            <input type="radio" id="star5" name="rate" value="5" checked={selectedStars === 5} onChange={handleStarChange} />
            <label htmlFor="star5" title="text">5 stars</label>
            <input type="radio" id="star4" name="rate" value="4" checked={selectedStars === 4} onChange={handleStarChange} />
            <label htmlFor="star4" title="text">4 stars</label>
            <input type="radio" id="star3" name="rate" value="3" checked={selectedStars === 3} onChange={handleStarChange} />
            <label htmlFor="star3" title="text">3 stars</label>
            <input type="radio" id="star2" name="rate" value="2" checked={selectedStars === 2} onChange={handleStarChange} />
            <label htmlFor="star2" title="text">2 stars</label>
            <input type="radio" id="star1" name="rate" value="1" checked={selectedStars === 1} onChange={handleStarChange} />
            <label htmlFor="star1" title="text">1 star</label>
          </div>
        </div>
      </div>
      <div className="review-info__rating">
        <h3 className="review-info__rating__title">Based on 30 Reviews</h3>
        <div className="review-info__rating__lines">
          <span className="review-info__rating__lines__text">Excellent</span>
          <div className="review-info__rating__lines__progress">
            <Progress
              style={customStyle.root}
              status="success"
              percent={progress.excellent}
              theme={{
                success: {
                  symbol: '',
                  color: '#1BB618',
                },
              }}
            />
          </div>
        </div>
        <div className="review-info__rating__hr" />
      </div>
      <ReviewUserCard
        imgSrc={Avatar}
        userName="Lusine Marry"
        timeText="1 day ago"
        ratingSum="5.0"
        aboutUser="An excellent specialist,
            has lots of pleasure working with her,
             my baby did like her a lot, such  a caring person "
      />
      <ReviewUserCard
        imgSrc={Avatar}
        userName="Lusine Marry"
        timeText="1 day ago"
        ratingSum="5.0"
        aboutUser="An excellent specialist,
            has lots of pleasure working with her,
             my baby did like her a lot, such  a caring person "
      />
      <button className="review-info__btn__small" type="button">See All</button>
      <Button className="btn review-info__btn__big" title="Write a Reivew" />
      <div className="review-info__job__imgBox" role="presentation" onMouseEnter={() => setShowBtn(true)} onMouseLeave={() => setShowBtn(false)}>
        <img className="review-info__job__imgBox__img" src={imageAssets[0]} alt="img" />
        {showBtn ? <button type="button" onClick={setShowImg} className="review-info__job__imgBox__btn">See All</button> : null}
      </div>
      {/* {showModal ? ( */}
      {/*   <> */}
      {/*     <div */}
      {/*       className="review-info__modal" */}
      {/*       role="presentation" */}
      {/*       onClick={() => setShowModal(false)} */}
      {/*     /> */}
      {/*     <div className="review-info__carouselBox"> */}
      {/*       <Carousel */}
      {/*         slideIndex={selectedPhoto} */}
      {/*         renderCenterLeftControls={({ previousSlide }) => ( */}
      {/*           <button className="carousel-btn" type="button" onClick={previousSlide}> */}
      {/*             {arrows.left} */}
      {/*           </button> */}
      {/*         )} */}
      {/*         renderCenterRightControls={({ nextSlide }) => ( */}
      {/*           <button className="carousel-btn" type="button" onClick={nextSlide}> */}
      {/*             {arrows.right} */}
      {/*           </button> */}
      {/*         )} */}
      {/*       > */}
      {/*         {imageAssets.map((image) => ( */}
      {/*           <img className="carousel-img" src={image} alt="IMG" /> */}
      {/*         ))} */}

      {/*       </Carousel> */}
      {/*     </div> */}
      {/*   </> */}
      {/* ) : null} */}

    </div>
  );
}
export default Review;
