import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Wrapper from '../layouts/Wrapper';
import RemoveImg from '../assets/images/delete.svg';
import { sendReview } from '../store/actions/reviews';

function WriteReview() {
  const token = useSelector((state) => state.users.token);
  const [selectedStars, setSelectedStars] = useState(0);
  const [files, setFiles] = useState([]);
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const friendId = searchParams.get('friendId');
  const jobId = searchParams.get('jobId');
  const handleSendReview = useCallback(async (e) => {
    e.preventDefault();
    const { payload } = await dispatch(sendReview({
      files, text, rate: selectedStars, friendId, jobId,
    }));
    if (payload.status === 'ok') {
      navigate('/');
    }
  }, [files, text, selectedStars, friendId, jobId]);
  const handleStarChange = (event) => {
    setSelectedStars(parseInt(event.target.value, 10));
  };

  const handleRemoveImage = (index) => {
    const newFiles = files.slice();
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  const handleFileSelect = useCallback(async (ev) => {
    const newFiles = [...ev.target.files].map((file) => {
      file.uri = URL.createObjectURL(file);
      return file;
    });
    setFiles([...files, ...newFiles]);
  }, [files]);
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
                    {files.map((e, index) => (
                      <div key={e.uri} className="uploaded-image-container">
                        <img src={e.uri} alt={`Uploaded ${e.name}`} className="uploaded-image" />
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
                <label htmlFor="image-upload" className={`upload__img__review ${files?.length >= 4 ? 'disabled__img__up' : 'not__disabled'}`}>
                  Upload Images
                </label>
                <input
                  className="img__up__review"
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  multiple
                  disabled={files.length >= 4}
                  onChange={handleFileSelect}
                />
              </div>
            </div>
            <div className="write__review__form">
              <p className="write__review__text__one">Write A review here</p>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="write__review__text__area"
                name="text__area__review"
                rows="4"
                cols="50"
                placeholder="Write You Review Here"
              />
              <button onClick={handleSendReview} type="button" className="btn write__review__button">Confirm</button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default WriteReview;
