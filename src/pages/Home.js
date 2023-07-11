import React from 'react';
import Wrapper from '../layouts/Wrapper';
import { ReactComponent as JoinImg } from '../assets/images/homejoin.svg';
import Button from '../components/Button';
import { ReactComponent as JobLocationIcon } from '../assets/images/home_location_icon.svg';
import { ReactComponent as SearchIcon } from '../assets/images/Search_Icon.svg';

function Home() {
  return (
    <Wrapper>
      <section className="join">
        <div className="container">
          <div className="join__row">
            <div className="join__content">
              <div className="join__left">
                <h1 className="join__left__title">
                  Join CashTime as a Client or a Freelancer And Start Making Money Easily
                </h1>
                <p className="join__left__text">
                  CashApp is The only Armenian Freelance
                  App That Will Allow You To find a Specialist Of
                  any Kind Within Seconds, and Freelancers to Find a Job
                </p>
                <div className="join__left__block join-block">
                  <Button className="join-block__btn1" title="Sign Up as a Freelancer" />
                  <Button className="join-block__btn2" title="Sign Up as a Client" />
                </div>
              </div>
              <div className="join__right">
                <JoinImg className="join__right__img" />
              </div>
            </div>
            <div className="join__bottom">
              <h3 className="join__bottom__title">Find a Part Time Job Of Your Choice , Easy and Quick</h3>
              <form className="join__bottom__form">
                <label htmlFor="input-job" className="join__bottom__form__label">
                  <input type="text" maxLength="15" className="join__bottom__form__job" id="input-job" placeholder="Job Titile" />
                </label>
                <span className="join__bottom__form__line" />
                <label htmlFor="input-city" className="join__bottom__form__label">
                  <JobLocationIcon className="join__bottom__form__icon" />
                  <input type="text" maxLength="15" className="join__bottom__form__city" id="input-city" placeholder="City Name" />
                </label>
                <button type="submit" className="join__bottom__form__button">
                  <SearchIcon className="join__bottom__form__button__icon" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}

export default Home;
