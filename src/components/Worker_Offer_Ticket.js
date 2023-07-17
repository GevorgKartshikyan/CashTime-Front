import React from 'react';
import UserSvg from '../assets/images/face.png';
import MessageSvg from '../assets/images/message.svg';
import PhoneSvg from '../assets/images/phone.svg';

function WorkerOfferTicket() {
  return (
    <div className="worker-offer-ticket">
      <div className="worker-offer-ticket__first-line">
        <h3 className="worker-offer-ticket__first-line__title">House Cleaning</h3>
        <div className="worker-offer-ticket__first-line__block">
          <img src={UserSvg} alt="" className="worker-offer-ticket__first-line__img" />
          <p className="worker-offer-ticket__first-line__name">Monica Jess</p>
        </div>
      </div>
      <div className="worker-offer-ticket__first-line">
        <div className="worker-offer-ticket__first-line__left">
          <p className="worker-offer-ticket__first-line__left__text">12:00-13:00</p>
          <p className="worker-offer-ticket__first-line__left__text">Gyurmi, Armenia</p>
          <p className="worker-offer-ticket__first-line__left__text">2199/75</p>
        </div>
        <div className="worker-offer-ticket__first-line__right">
          <img src={MessageSvg} alt="" className="worker-offer-ticket__first-line__right__svg" />
          <img src={PhoneSvg} alt="" className="worker-offer-ticket__first-line__right__svg" />
        </div>
      </div>
      <div className="worker-offer-ticket__second-line">
        <span className="worker-offer-ticket__second-line__price">4000 AMD</span>
      </div>
      <button type="button" className="worker-offer-ticket__button">Confirm</button>
      <button type="button" className="worker-offer-ticket__button">Delete</button>
    </div>
  );
}

export default WorkerOfferTicket;
