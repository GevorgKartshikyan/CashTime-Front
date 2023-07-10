import React from 'react';
import Wrapper from '../layouts/Wrapper';

function Home() {
  return (
    <Wrapper>
      <section className="join">
        <div className="container">
          <div className="join__row">
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
                <button type="button" className="join-block__btn1">
                  Sign Up as a Freelancer
                </button>
                <button type="button" className="join-block__btn2">
                  Sign Up as a Client
                </button>
              </div>
            </div>
            <div className="join__right" />
          </div>
        </div>
      </section>
    </Wrapper>
  );
}

export default Home;
