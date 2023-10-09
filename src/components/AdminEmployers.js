import React, { useCallback, useEffect, useState } from 'react';
import Select from 'react-select';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import adminEmployeesSearchIcon from '../assets/images/admin_employees_search.svg';
import AdminDropdownTop from './AdminDropdownTop';
import UserInfoCard from './UserInfoCard';
import PaginationNext from './PaginationNextLabel';
import PaginationPreviousLabel from './PaginationPreviousLabel';
import { listRequest } from '../store/actions/users';

function AdminEmployers() {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = useSelector((state) => state.users.currentPage);
  const totalPages = useSelector((state) => state.users.totalPages);
  const page = parseInt(searchParams.get('page') || 1, 10);
  const limit = parseInt(searchParams.get('limit') || 5, 10);
  const [searchResults, setSearchResults] = useState([]);
  const options = [
    {
      value: 'Newest',
      label: 'Newest',
    },
    {
      value: 'Latest',
      label: 'Latest',
    }];

  const [selectedOption, setSelectedOption] = useState(options[0]);
  useEffect(() => {
    dispatch(listRequest({
      page, limit: 5, role: 'employer', search: searchResults, order: selectedOption.value,
    }));
  }, [page, searchResults, selectedOption]);
  useEffect(() => {
    setSearchParams({ page, limit });
  }, []);

  const handlePageChange = (event) => {
    const selectedPage = event.selected + 1;
    setSearchParams({ page: selectedPage, limit });
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'space-around',
      fontFamily: 'Lato,sans-serif',
      fontSize: 18,
      fontWeight: 400,
      paddingLeft: 12,
      paddingRight: 15,
      color: state.isSelected && state.data.value === '#4A62B6' ? '#4A62B6' : '#4A62B6',
      width: 207,
      height: 60,
      border: state.isFocused ? '2px solid #4A62B6' : '2px solid #4A62B6',
      borderRadius: 40,
      background: 'transparent',
      outline: 'none',
      boxShadow: 'none',
      '&:hover': {
        border: '2px solid #4A62B6',
      },
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? 'white' : '#4A62B6',
      background: state.isSelected ? '#4A62B6' : null,
      cursor: 'pointer',
    }),
    placeholder: (defaultStyles) => ({
      ...defaultStyles,
      color: '#4A62B6',
      fontSize: 18,
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: state.isSelected && state.data.value === '#4A62B6' ? '#4A62B6' : '#4A62B6',
    }),
  };

  const handleChange = useCallback((selected) => {
    setSelectedOption(selected);
  }, [selectedOption]);

  return (
    <div className="admin__employees">
      <div className="admin__row__dashboard__title"><h3>Employers</h3></div>
      <div className="admin__employees__search">
        <label htmlFor="admin-employees-search" className="admin__employees__search__label">
          <div className="admin__employees__search__label__box">
            <img
              alt="img"
              src={adminEmployeesSearchIcon}
              className="admin__employees__search__label__box__img"
            />
          </div>
          <input
            id="admin-employees-search"
            type="search"
            className="admin__employees__search__label__input"
            placeholder="Search here..."
            onChange={(e) => setSearchResults(e.target.value)}
          />
        </label>
        <Select
          placeholder="Newest"
          options={options}
          styles={customStyles}
          value={selectedOption}
          onChange={handleChange}
          components={{
            IndicatorsContainer: AdminDropdownTop,
          }}
        />
      </div>
      <div className="admin__employees__info">
        <div className="admin__employees__info__titles admin-title">
          <div className="admin__employees__info__titles__name">
            <h3>Name</h3>
          </div>
          <div className="admin__employees__info__titles__id">
            <h3>ID</h3>
          </div>
          <div className="admin__employees__info__titles__date">
            <h3>Date</h3>
          </div>
          <div className="admin__employees__info__titles__profession">
            <h3>Profession</h3>
          </div>
          <div className="admin__employees__info__titles__city">
            <h3>City</h3>
          </div>
          <div className="admin__employees__info__titles__status">
            <h3>Status</h3>
          </div>
        </div>
      </div>
      {users.map((user) => (
        <UserInfoCard
          status={user.status}
          key={user.id}
          img={user.avatar}
          firstName={user.firstName}
          lastName={user.lastName}
          userId={user.id}
          date={user.createdAt}
          profession={user.role}
          city={`${user.country}, ${user.city}`}
        />
      ))}
      <div className="admin__employees__paginate">
        <ReactPaginate
          activeClassName="admin-item admin-active-page"
          breakClassName="admin-item admin-break-me"
          pageClassName="admin-item admin-pagination-page "
          previousClassName="admin-item admin-previous"
          breakLabel=""
          maxPageCount={5}
          containerClassName="pagination"
          disabledClassName="disabled-page"
          marginPagesDisplayed={0}
          nextClassName="admin-item admin-next"
          nextLabel={<PaginationNext />}
          previousLabel={<PaginationPreviousLabel />}
          onPageChange={handlePageChange}
          pageCount={totalPages}
          pageRangeDisplayed={3}
          forcePage={currentPage - 1}
        />
      </div>
    </div>
  );
}

export default AdminEmployers;
