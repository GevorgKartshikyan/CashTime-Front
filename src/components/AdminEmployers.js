import React, { useEffect } from 'react';
import Select from 'react-select';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import adminEmployeesSearchIcon from '../assets/images/admin_employees_search.svg';
import AdminDropdownTop from './AdminDropdownTop';
import UserInfoCard from './UserInfoCard';
import PaginationNext from './PaginationNextLabel';
import PaginationPreviousLabel from './PaginationPreviousLabel';
import { listRequest } from '../store/actions/users';

// import { ReactComponent as paginationNext } from '../assets/images/paginate_next.svg';

function AdminEmployers() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listRequest({
      page: 1,
      limit: 5,
      role: 'employer',
    }));
  }, []);

  console.log(users, 'users 2');

  const items = 905;
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
  const options = [
    {
      value: 'test1',
      label: 'Test1',
    },
    {
      value: 'test2',
      label: 'Test2',
    },
    {
      value: 'Newest',
      label: 'Newest',
    }];

  return (
    <div className="admin__employees">
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
            type="text"
            className="admin__employees__search__label__input"
            placeholder="Search here..."
          />
        </label>
        <Select
          placeholder="Newest"
          options={options}
          styles={customStyles}
          // onChange={handeChangeSelects('service')}
          components={{
            IndicatorsContainer: AdminDropdownTop,
          }}
        />
      </div>
      <div className="admin__employees__info">
        <div className="admin__employees__info__titles admin-title">
          <div className="admin__employees__info__titles__checkbox">
            <input type="checkbox" />
          </div>
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
          <div className="admin__employees__info__titles__contact">
            <h3>Contact</h3>
          </div>
          <div className="admin__employees__info__titles__status">
            <h3>Status</h3>
          </div>
          <div className="admin__employees__info__titles__action">
            <h3>Action</h3>
          </div>
        </div>
      </div>
      {users.users.map((user) => (
        <UserInfoCard
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
          onPageChange={() => null}
          pageCount={items}
          pageRangeDisplayed={3}
        />
      </div>
    </div>
  );
}

export default AdminEmployers;