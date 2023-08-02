import React from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as ProPlanIcon } from '../assets/images/home_pro_plan.svg';
import Button from './Button';

function HomeProPage() {
  const { t } = useTranslation();
  return (

    <section className="pro">
      {/* 1paddingneri pahy 2svgi dirky 3bagraundy */}
      <h1 className="pro__title">
        {t('pro_title')}
        <br />
        Experience
      </h1>

      <div className="pro__plan">
        <div className="pro__plan__card">

          <ProPlanIcon className="pro__plan__card__icon" />

          <h2 className="pro__plan__card__title">Pro Plan</h2>
          <h2 className="pro__plan__card__title">
            10$/
            <span className="pro__plan__card__title__span">Month</span>
          </h2>
          <p className="pro__plan__card__text">1. You’ll Get More Offers</p>
          <p className="pro__plan__card__text">2. You’ll Get More Offers</p>
          <p className="pro__plan__card__text">3. You’ll Get More Offers</p>
        </div>
      </div>
      <Button className="btn color-blue" title="Buy  It Now" />
    </section>

  );
}

export default HomeProPage;
