import React from 'react';
import { useTranslation } from 'react-i18next';
// import { useDispatch } from 'react-redux';
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
import HomeProPage from '../components/HomeProPage';
// import { listRequest } from '../store/actions/users';

function Home() {
  // const dispatch = useDispatch();
  const { t } = useTranslation();
  // useEffect(async () => {
  //   const { payload } = await dispatch(listRequest({ page: 2, limit: 2 }));
  //   console.log(payload);
  // }, []);
  return (
    <Wrapper>
      <section className="join">
        <div className="container">
          <div className="join__row">
            <div className="join__content">
              <div className="join__left">
                <h1 className="join__left__title">
                  {t('join_left_title')}
                </h1>
                <p className="join__left__text">
                  {t('join_left_text')}
                </p>
                <div className="join__left__block join-block">
                  <Button className="join-block__btn1" title={t('join_block_btn1')} />
                  <Button
                    className="join-block__btn2"
                    title={t('join_block_btn2'
                    + '')}
                  />
                </div>
              </div>
              <div className="join__right">
                <img className="join__right__img" src={JoinImg} alt="" />
              </div>
            </div>
            <div className="join__bottom">
              <h3 className="join__bottom__title">{t('join_bottom_title')}</h3>
              <form className="join__bottom__form">
                <label htmlFor="input-job" className="join__bottom__form__label">
                  <input type="text" maxLength="15" className="join__bottom__form__job" id="input-job" placeholder={t('job_title_text')} />
                </label>
                <span className="join__bottom__form__line" />
                <label htmlFor="input-city" className="join__bottom__form__label">
                  <img className="join__bottom__form__icon" src={JobLocationIcon} alt="" />
                  <input type="text" maxLength="15" className="join__bottom__form__city" id="input-city" placeholder={t('city_name_text')} />
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
        <HomeJob rowReverse="" firstText={t('home_job_first_text_first')} secondText={t('home_job_first_text_second')} buttonTxt={t('home_job_first_text_button')} img={jobFind} />
        <HomeJob rowReverse="row" firstText={t('home_job_second_text_first')} secondText={t('home_job_second_text_second')} buttonTxt={t('home_job_second_text_button')} img={seeJobs} />
        <HomeJob rowReverse="" firstText={t('home_job_third_text_first')} secondText={t('home_job_third_text_second')} buttonTxt={t('home_job_second_text_button')} img={createProfile} />
      </section>
      <HomeProPage />
    </Wrapper>
  );
}

export default Home;
