import React from 'react';
import WorkerOfferTicket from '../components/Worker_Offer_Ticket';
import Header from '../layouts/Header';

function WorkerOffers() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="worker-offers">
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
  );
}

export default WorkerOffers;
