import React from 'react';
import WorkerOfferTicket from '../components/Worker_Offer_Ticket';
import Header from '../layouts/Header';

function WorkerOffers() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="worker">
          <div className="worker-desc">
            <h3 className="worker-desc__title">
              House Cleaning
            </h3>
            <h3 className="worker-desc__title">
              House Cleaning
            </h3>
            <h3 className="worker-desc__title">
              House Cleaning
            </h3>
            <h3 className="worker-desc__title">
              House Cleaning
            </h3>
          </div>
          <div className="worker-offers">
            <h3>House Cleaning</h3>
            <WorkerOfferTicket />
            <WorkerOfferTicket />
            <WorkerOfferTicket />
            <WorkerOfferTicket />
            <WorkerOfferTicket />
            <WorkerOfferTicket />
            <WorkerOfferTicket />
            <WorkerOfferTicket />
            <WorkerOfferTicket />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkerOffers;
