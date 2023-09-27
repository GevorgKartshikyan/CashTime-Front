import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import WorkerOfferTicket from '../components/Worker_Offer_Ticket';
import Header from '../layouts/Header';
import { jobsTitles } from '../store/actions/jobsRequest';

function WorkerOffers() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(jobsTitles());
  }, []);
  const titles = useSelector((state) => state.jobsRequest.jobsTitlesArray);
  const [selectedId, setSelectedId] = useState(titles.length > 0 ? titles[0].id : null);
  useEffect(() => {
    if (titles.length > 0) {
      setSelectedId(titles[0].id);
    }
  }, [titles]);
  const handleSelectJob = (id) => {
    setSelectedId(id);
  };
  // useEffect(() => {
  //   dispatch(noticeList({ page: 1, limit: 10, jobId: selectedId }));
  // }, [selectedId]);
  const token = useSelector((state) => state.users.token);
  if (!token) {
    window.location.href = '/login';
    return null;
  }
  return (
    <div>
      <Header />
      <div className="container">
        <div className="worker">
          <div className="worker-desc">
            {titles.map((e) => (
              <h3 role="presentation" onClick={() => handleSelectJob(e.id)} key={e.id} className="worker-desc__title">
                {e.title || 'No Name Job'}
              </h3>
            ))}
          </div>
          <div className="worker-offers">
            {titles.filter((e) => e.id === selectedId).map((e) => (
              <h3 key={e.id}>{e.title}</h3>
            ))}
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
