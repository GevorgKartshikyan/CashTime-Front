import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import WorkerOfferTicket from '../components/Worker_Offer_Ticket';
import Header from '../layouts/Header';
import { jobsTitles, userJobInfo } from '../store/actions/jobsRequest';
import { noticeListSingleJobs } from '../store/actions/notice';
import MyJobCard from '../components/MyJobCard';

function WorkerOffers() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(jobsTitles());
  }, []);
  const titles = useSelector((state) => state.jobsRequest.jobsTitlesArray);
  const [selectedId, setSelectedId] = useState(titles?.length > 0 ? titles[0].id : null);
  useEffect(() => {
    if (titles.length > 0) {
      setSelectedId(titles[0].id);
    }
  }, [titles]);
  const handleSelectJob = (id) => {
    setSelectedId(id);
  };
  const [searchParams, setSearchParams] = useSearchParams({});
  const totalPagesSingleJob = useSelector((state) => state.notices.totalPagesSingleJob);
  const currentPageSingleJob = useSelector((state) => state.notices.currentPageSingleJob);
  const page = searchParams.get('page') || 1;
  const limit = searchParams.get('limit') || 5;
  const handlePageChange = (event) => {
    const selectedPage = event.selected + 1;
    setSearchParams({ page: selectedPage, limit: 5 });
  };
  useEffect(() => {
    dispatch(noticeListSingleJobs({ page, limit, jobId: selectedId }));
  }, [selectedId]);
  const noticesSingleJob = useSelector((state) => state.notices.noticesSingleJob);
  const [showJob, setShowJob] = useState(false);
  const token = useSelector((state) => state.users.token);
  if (!token) {
    window.location.href = '/login';
    return null;
  }
  const singleJobInfo = useSelector((state) => state.jobsRequest.userJob);
  console.log(noticesSingleJob);
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
          <div style={{ display: 'flex', flexDirection: 'column', width: '70%' }}>
            <div className="worker-offers">
              <div className="worker-offers-text" style={{ display: 'flex' }}>
                {titles.filter((e) => e.id === selectedId).map((e) => (
                  <h3 key={e.id}>{e.title}</h3>
                ))}
                <p
                  role="presentation"
                  onClick={() => {
                    setShowJob(true);
                    dispatch(userJobInfo({ id: selectedId }));
                  }}
                  className="show-job-details"
                  style={{ marginLeft: 5, marginBottom: 30 }}
                >
                  Show more about work
                </p>
              </div>
              <div className="worker-offers">
                {noticesSingleJob.map((e) => (
                  <WorkerOfferTicket
                    id={e.id}
                    jobId={e.noticeJobTo}
                    key={e.id}
                    date={e.createdAt}
                    jobTitle={e['fromJob.title']}
                    friendId={e['userFrom.id']}
                    avatar={e['userFrom.avatar']}
                    name={e['userFrom.firstName']}
                    lastName={e['userFrom.lastName']}
                    country={e['userFrom.country']}
                    city={e['userFrom.city']}
                  />
                ))}
              </div>
              {noticesSingleJob.length === 0 ? <h4 className="worker-offers-txt">No job applications.</h4> : null}
            </div>
            <div className="worker_pagination">
              <ReactPaginate
                activeClassName="admin-item admin-active-page"
                breakClassName="admin-item admin-break-me"
                pageClassName="admin-item admin-pagination-page add-skill-item"
                previousClassName="admin-item admin-previous"
                breakLabel=""
                containerClassName="pagination"
                disabledClassName="disabled-page"
                marginPagesDisplayed={0}
                nextClassName="admin-item admin-next"
                onPageChange={handlePageChange}
                pageCount={totalPagesSingleJob}
                pageRangeDisplayed={3}
                forcePage={currentPageSingleJob - 1}
              />
            </div>
          </div>
          {showJob && <MyJobCard job={singleJobInfo} />}
          {showJob && <div role="presentation" onClick={() => setShowJob(false)} className="add-service-overlay" />}
        </div>
      </div>
    </div>
  );
}

export default WorkerOffers;
