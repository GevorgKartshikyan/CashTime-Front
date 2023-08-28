import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import ReactApexChart from 'react-apexcharts';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import employers from '../assets/images/employers.svg';
import employees from '../assets/images/employees.svg';
import services from '../assets/images/services.svg';
import Announcement from './Announcement';
import { jobListRequestFromAdmin } from '../store/actions/jobsRequest';
import charDataObj from '../utils/charDataObj';

function Dashboard() {
  const [chartData] = useState(charDataObj);
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const jobsAdmin = useSelector((state) => state.jobsRequest.jobListAdmin);
  const currentPageAdmin = useSelector((state) => state.jobsRequest.currentPageAdmin);
  const totalPagesAdmin = useSelector((state) => state.jobsRequest.totalPagesAdmin);
  const page = parseInt(searchParams.get('page') || 1, 10);
  const limit = parseInt(searchParams.get('limit') || 5, 10);

  useEffect(() => {
    dispatch(jobListRequestFromAdmin({ page, limit }));
  }, [page]);
  const handlePageChange = (event) => {
    const selectedPage = event.selected + 1;
    setSearchParams({ page: selectedPage, limit });
  };
  return (
    <div className="admin__row__dashboard">
      <div className="admin__row__dashboard__title">
        <h3>Dashboard</h3>
      </div>
      <div className="admin__row__dashboard__info">
        <div className="admin__row__dashboard__info-employers">
          <div className="admin__row__dashboard__info-employers-img">
            <img src={employers} alt="" className="col-blue-employers" />
          </div>
          <div className="text">
            <p>Employers</p>
            <h3>932</h3>
          </div>
        </div>
        <div className="admin__row__dashboard__info-employees">
          <div className="admin__row__dashboard__info-employees-img">
            <img src={employees} alt="" className="col-orange-employees" />
          </div>
          <div className="text">
            <p>Employees</p>
            <h3>1200</h3>
          </div>
        </div>
        <div className="admin__row__dashboard__info-services">
          <div className="admin__row__dashboard__info-services-img">
            <img src={services} alt="" className="col-yellow-services" />
          </div>
          <div className="text">
            <p>Services</p>
            <h3>40</h3>
          </div>
        </div>
      </div>
      <div id="chart">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="area"
          height={350}
        />
      </div>
      <div className="announcements">
        <div className="announcements__title">
          <h3>New Announcements</h3>
        </div>
        <div className="announcements__list">
          {jobsAdmin.map(((e) => (
            <Announcement
              key={e.id}
              name={e?.['creator.firstName']}
              lastname={e?.['creator?.lastName']}
              jobPhoto={e?.jobPhoto}
              skills={e.skills}
              description={e?.description}
              price={e?.price}
              experience={e.experience}
              title={e.title}
            />
          )))}
          <ReactPaginate
            activeClassName="item active-page"
            breakClassName="item break-me"
            breakLabel=""
            containerClassName="pagination adminPaginate"
            disabledClassName="disabled-page"
            marginPagesDisplayed={0}
            nextClassName="item next"
            onPageChange={handlePageChange}
            pageCount={totalPagesAdmin}
            pageClassName="item pagination-page "
            pageRangeDisplayed={5}
            forcePage={currentPageAdmin - 1}
            previousClassName="item previous"
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
