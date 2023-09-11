import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Wrapper from '../layouts/Wrapper';
import RemoveImg from '../assets/images/delete.svg';

function WriteReview() {
  const token = useSelector((state) => state.users.token);
  const [selectedStars, setSelectedStars] = useState(0);
  const [uploadedImages, setUploadedImages] = useState([]);

  const handleStarChange = (event) => {
    setSelectedStars(parseInt(event.target.value, 10));
  };

  const handleRemoveImage = (index) => {
    const imagesArray = [...uploadedImages];
    imagesArray.splice(index, 1);
    setUploadedImages([...imagesArray]);
  };

  const handleImageUpload = (event) => {
    const { files } = event.target;
    const imagesArray = [...uploadedImages]; // Make a copy of the existing images

    for (let i = 0; i < files.length; i += 1) {
      if (imagesArray.length < 4) {
        const reader = new FileReader();

        reader.onload = (e) => {
          imagesArray.push(e.target.result);
          setUploadedImages([...imagesArray]);
        };

        reader.readAsDataURL(files[i]);
      }
    }
  };

  if (!token) {
    window.location.href = '/login';
    return null;
  }

  return (
    <Wrapper>
      <div className="write__review">
        <div className="container">
          <div className="write__review__row">
            <div className="rate">
              <input
                type="radio"
                id="star5"
                name="rate"
                value="5"
                checked={selectedStars === 5}
                onChange={handleStarChange}
              />
              <label htmlFor="star5" title="text">5 stars</label>
              <input
                type="radio"
                id="star4"
                name="rate"
                value="4"
                checked={selectedStars === 4}
                onChange={handleStarChange}
              />
              <label htmlFor="star4" title="text">4 stars</label>
              <input
                type="radio"
                id="star3"
                name="rate"
                value="3"
                checked={selectedStars === 3}
                onChange={handleStarChange}
              />
              <label htmlFor="star3" title="text">3 stars</label>
              <input
                type="radio"
                id="star2"
                name="rate"
                value="2"
                checked={selectedStars === 2}
                onChange={handleStarChange}
              />
              <label htmlFor="star2" title="text">2 stars</label>
              <input
                type="radio"
                id="star1"
                name="rate"
                value="1"
                checked={selectedStars === 1}
                onChange={handleStarChange}
              />
              <label htmlFor="star1" title="text">1 star</label>
            </div>
            <div className="write__review__upload">
              <p className="write__review__text__one">Add Photos Here</p>
              <div className="img__review">
                <div className="images">
                  <div className="all__img__up">
                    {uploadedImages.slice(0, 4).map((image, index) => (
                      <div className="uploaded-image-container">
                        <img src={image} alt={`Uploaded ${index}`} className="uploaded-image" />
                        <button
                          type="submit"
                          className="remove-image-button"
                          onClick={() => handleRemoveImage(index)}
                        >
                          <img src={RemoveImg} alt="remove" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                <label htmlFor="image-upload" className={`upload__img__review ${uploadedImages.length >= 4 ? 'disabled__img__up' : 'not__disabled'}`}>
                  Upload Images
                </label>
                <input
                  className="img__up__review"
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  multiple
                  disabled={uploadedImages.length >= 4}
                  onChange={handleImageUpload}
                />
              </div>
            </div>
            <form action="#" className="write__review__form">
              <p className="write__review__text__one">Write A review here</p>
              <textarea
                className="write__review__text__area"
                name="text__area__review"
                rows="4"
                cols="50"
                placeholder="Write You Review Here"
              />
              <button type="submit" className="btn write__review__button">Confirm</button>
              <button type="submit" className="write__review__button__skip">Skip</button>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default WriteReview;
