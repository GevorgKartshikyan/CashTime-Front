import React from 'react';
import Wrapper from '../layouts/Wrapper';
import HomeJob from '../components/Home-job';
import JoinImg from '../assets/images/homejoin.svg';
import seeJobs from '../assets/images/seeJobs.svg';
import jobFind from '../assets/images/jobFind.svg';
import createProfile from '../assets/images/createProfile.svg';
import Button from '../components/Button';
import JobLocationIcon from '../assets/images/home_location_icon.svg';
import SearchIcon from '../assets/images/Search_Icon.svg';
import JobHiring from '../layouts/Job_hiring';

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
                <img className="join__right__img" src={JoinImg} alt="" />
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
                  <img className="join__bottom__form__icon" src={JobLocationIcon} alt="" />
                  <input type="text" maxLength="15" className="join__bottom__form__city" id="input-city" placeholder="City Name" />
                </label>
                <button type="submit" className="join__bottom__form__button">
                  <img className="join__bottom__form__button__icon" src={SearchIcon} alt="" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <JobHiring />
      <section className="information">
        <HomeJob rowReverse="" firstText="Let The Job Find You" secondText="Create A free Profile To Get Hired Easily" buttonTxt="Get Hired" img={jobFind} />
        <HomeJob rowReverse="row" firstText="Start Looking For a Job Perfect" secondText="Tell us more about yourself and we'll match you with the right jobs to help you reach them." buttonTxt="See Jobs" img={seeJobs} />
        <HomeJob rowReverse="" firstText="Create a Profile For a Better Experience" secondText="Your profile is your application. Apply to jobs instantly." buttonTxt="See Jobs" img={createProfile} />
      </section>
    </Wrapper>
  );
}

export default Home;
