import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import ReactApexChart from 'react-apexcharts';
import employers from '../assets/images/employers.svg';
import employees from '../assets/images/employees.svg';
import services from '../assets/images/services.svg';
import Announcement from './Announcement';

function Dashboard() {
  const items = 905;
  const [chartData] = useState({
    series: [
      {
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'area',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '2018-09-19T00:00:00.000Z',
          '2018-09-19T01:30:00.000Z',
          '2018-09-19T02:30:00.000Z',
          '2018-09-19T03:30:00.000Z',
          '2018-09-19T04:30:00.000Z',
          '2018-09-19T05:30:00.000Z',
          '2018-09-19T06:30:00.000Z',
        ],
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
    },
  });
  const arr = [
    {
      id: 1,
      name: 'Alice',
      lastname: 'Muradyan',
      userImage: 'https://picsum.photos/200',
      title: 'Looking for a builder who will help me to build a small house with me ',
      text: 'Builder, Expert, hourly rate, Design skills, Painting, flooring  ',
    },
    {
      id: 2,
      name: 'Bob',
      lastname: 'Muradyan',
      userImage: 'https://picsum.photos/200',
      title: 'Looking for a builder who will help me to build a small house with me ',
      text: 'Builder, Expert, hourly rate, Design skills, Painting, flooring  ',
    },
    {
      id: 3,
      name: 'Charlie',
      lastname: 'Muradyan',
      userImage: 'https://picsum.photos/200',
      title: 'Looking for a builder who will help me to build a small house with me ',
      text: 'Builder, Expert, hourly rate, Design skills, Painting, flooring  ',
    },
    {
      id: 4,
      name: 'David',
      lastname: 'Muradyan',
      userImage: 'https://picsum.photos/200',
      title: 'Looking for a builder who will help me to build a small house with me ',
      text: 'Builder, Expert, hourly rate, Design skills, Painting, flooring  ',
    },
  ];

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
          {arr.map(((e) => (
            <Announcement
              key={e.id}
              name={e.name}
              lastname={e.lastname}
              userImage={e.userImage}
              text={e.text}
              title={e.title}
            />
          )))}
          <ReactPaginate
            activeClassName="item active-page"
            breakClassName="item break-me"
            breakLabel=""
              // maxPageCount={5}
            containerClassName="pagination adminPaginate"
            disabledClassName="disabled-page"
            marginPagesDisplayed={0}
            nextClassName="item next"
              // nextLabel={<ArrowForwardIosIcon style={{ fontSize: 18, width: 150 }} />}
            onPageChange={() => null}
            pageCount={items}
            pageClassName="item pagination-page "
            pageRangeDisplayed={5}
            previousClassName="item previous"
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
