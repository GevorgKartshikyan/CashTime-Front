import React, { useEffect, useRef } from 'react';
import ReactPaginate from 'react-paginate';
import ReactApexChart from 'react-apexcharts';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useSearchParams } from 'react-router-dom';
import employers from '../assets/images/employers.svg';
import employees from '../assets/images/employees.svg';
import services from '../assets/images/services.svg';
import Announcement from './Announcement';
import { jobListRequestFromAdmin } from '../store/actions/jobsRequest';
import PaginationNext from './PaginationNextLabel';
import PaginationPreviousLabel from './PaginationPreviousLabel';
import { allCountsForAdmin } from '../store/actions/app';
// eslint-disable-next-line import/named
import { chartData } from '../utils/charDataObj';
import { getChartForAdmin } from '../store/actions/admin';

function Dashboard() {
  const jobsCharCount = useSelector((state) => state.admin.jobsCharCount);
  const usersCharCount = useSelector((state) => state.admin.usersCharCount);
  const charDateCalendar = useSelector((state) => state.admin.charDate);
  console.log(jobsCharCount);
  console.log(charDateCalendar);
  console.log(usersCharCount);
  const ref = useRef();
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const jobsAdmin = useSelector((state) => state.jobsRequest.jobListAdmin);
  const currentPageAdmin = useSelector((state) => state.jobsRequest.currentPageAdmin);
  const totalPagesAdmin = useSelector((state) => state.jobsRequest.totalPagesAdmin);
  const page = parseInt(searchParams.get('page') || 1, 10);
  const limit = parseInt(searchParams.get('limit') || 5, 10);
  const allEmployers = useSelector((state) => state.app.allEmployers);
  const allEmployees = useSelector((state) => state.app.allEmployees);
  const allJobs = useSelector((state) => state.app.allJobs);
  useEffect(() => {
    dispatch(jobListRequestFromAdmin({ page, limit }));
  }, [page]);
  useEffect(() => {
    dispatch(getChartForAdmin());
    setSearchParams({ page, limit });
    dispatch(allCountsForAdmin());
  }, []);
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
        <NavLink to="/admin/employers" className="admin__row__dashboard__info-employers">
          <div className="admin__row__dashboard__info-employers-img">
            <img src={employers} alt="" className="col-blue-employers" />
          </div>
          <div className="text">
            <p>Employers</p>
            <h3>{allEmployers}</h3>
          </div>
        </NavLink>
        <NavLink to="/admin/employees" className="admin__row__dashboard__info-employees">
          <div className="admin__row__dashboard__info-employees-img">
            <img src={employees} alt="" className="col-orange-employees" />
          </div>
          <div className="text">
            <p>Employees</p>
            <h3>{allEmployees}</h3>
          </div>
        </NavLink>
        <div role="presentation" onClick={() => ref.current.scrollIntoView({ behavior: 'smooth' })} className="admin__row__dashboard__info-services">
          <div className="admin__row__dashboard__info-services-img">
            <img src={services} alt="" className="col-yellow-services" />
          </div>
          <div className="text">
            <p>Services</p>
            <h3>{allJobs}</h3>
          </div>
        </div>
      </div>
      <div id="chart">
        <ReactApexChart
          options={chartData(usersCharCount, jobsCharCount, charDateCalendar).options}
          series={chartData(usersCharCount, jobsCharCount, charDateCalendar).series}
          type="area"
          height={350}
        />
      </div>
      <div ref={ref} className="announcements">
        <div className="announcements__title">
          <h3>New Announcements</h3>
        </div>
        <div className="announcements__list">
          {jobsAdmin.map(((e) => (
            <Announcement
              key={e.id}
              id={e.id}
              name={e?.['creator.firstName']}
              lastname={e?.['creator.lastName']}
              jobPhoto={e?.jobPhoto}
              skills={e.skills}
              description={e?.description}
              priceMethod={e?.priceMethod}
              experience={e.experience}
              title={e.title}
            />
          )))}
          {jobsAdmin?.length > 0 && (
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
              nextLabel={<PaginationNext />}
              onPageChange={handlePageChange}
              previousLabel={<PaginationPreviousLabel />}
              pageCount={totalPagesAdmin}
              pageRangeDisplayed={3}
              forcePage={currentPageAdmin - 1}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
