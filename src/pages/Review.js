import React, { useState } from 'react';
import { Progress } from 'react-sweet-progress';
import Header from '../layouts/Header';
import Avatar from '../assets/images/avatar.svg';
import 'react-sweet-progress/lib/style.css';
import ReviewUserCard from '../components/ReviewUserCard';

function Review() {
  const [selectedStars, setSelectedStars] = useState(0);
  const progress = {
    excellent: 80,
    good: 70,
    average: 50,
    bellowAverage: 40,
    poor: 20,
  };
  const handleStarChange = (event) => {
    setSelectedStars(parseInt(event.target.value, 10));
  };

  const customStyle = {
    root: {
      height: '3px',
      background: 'rgba(3, 16, 84, 0.30)',
    },
  };

  return (
    <>
      <Header />
      <div className="review-info">
        <div className="review-info__box">
          <div className="review-info__box__img">
            <img src={Avatar} alt="IMG" className="review-info__box__img__avatar" />
          </div>
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
          <div className="review-info__rating__lines">
            <span className="review-info__rating__lines__text">Good</span>
            <div className="review-info__rating__lines__progress">
              <Progress
                style={customStyle.root}
                status="success"
                percent={progress.good}
                theme={{
                  success: {
                    symbol: '',
                    color: '#78C96B',
                  },
                }}
              />
            </div>
          </div>
          <div className="review-info__rating__lines">
            <span className="review-info__rating__lines__text">Average</span>
            <div className="review-info__rating__lines__progress">
              <Progress
                style={customStyle.root}
                status="success"
                percent={progress.average}
                theme={{
                  success: {
                    symbol: '',
                    color: '#CFED18',
                  },
                }}
              />
            </div>
          </div>
          <div className="review-info__rating__lines">
            <span className="review-info__rating__lines__text">Bellow Average</span>
            <div className="review-info__rating__lines__progress">
              <Progress
                style={customStyle.root}
                status="success"
                percent={progress.bellowAverage}
                theme={{
                  success: {
                    symbol: '',
                    color: '#E17A01',
                  },
                }}
              />
            </div>
          </div>
          <div className="review-info__rating__lines">
            <span className="review-info__rating__lines__text">Poor</span>
            <div className="review-info__rating__lines__progress">
              <Progress
                style={customStyle.root}
                status="success"
                percent={progress.poor}
                theme={{
                  success: {
                    symbol: '',
                    color: '#E31515',
                  },
                }}
              />
            </div>
          </div>
          <div className="review-info__rating__hr" />
        </div>
        <ReviewUserCard />
      </div>
    </>
  );
}

export default Review;
