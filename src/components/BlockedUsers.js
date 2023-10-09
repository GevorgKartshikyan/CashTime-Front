import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { blockedUsers } from '../store/actions/users';
import PaginationNext from './PaginationNextLabel';
import PaginationPreviousLabel from './PaginationPreviousLabel';

function BlockedUsers() {
  const users = useSelector((state) => state.users.blocked);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = useSelector((state) => state.users.currentBlockedPage);
  const totalPages = useSelector((state) => state.users.totalBlockedPages);
  const page = parseInt(searchParams.get('page') || 1, 10);
  const limit = parseInt(searchParams.get('limit') || 6, 10);

  const { REACT_APP_API_URL } = process.env;
  const handleGetSingleUser = (id) => {
    navigate(`/admin/user?id=${id}`);
  };
  useEffect(() => {
    dispatch(blockedUsers({ page, limit: 6 }));
  }, [page, limit]);
  useEffect(() => {
    setSearchParams({ page, limit });
  }, [page, limit]);
  const handlePageChange = (event) => {
    const selectedPage = event.selected + 1;
    setSearchParams({ page: selectedPage, limit });
  };
  return (
    <div className="blocked">
      <div className="admin__row__dashboard__title blocked__title"><h3>Blocked Users</h3></div>
      <div className="blocked__row">
        {users.map((user) => (
          <div key={user.id} className="blocked__user">
            <div className="blocked__user__info">
              <div
                className="blocked__user__info__img"
                role="presentation"
                onClick={() => handleGetSingleUser(user.id)}
              >
                <img src={REACT_APP_API_URL + user.avatar} alt="" />
              </div>
              <div className="blocked__user__info__text">
                <div
                  role="presentation"
                  onClick={() => handleGetSingleUser(user.id)}
                  className="blocked__user__info__text__name"
                >
                  <p>{user.firstName}</p>
                  <p>{user.firstName}</p>
                </div>
                <div className="blocked__user__info__text__role">
                  <p>{user.role}</p>
                </div>
              </div>
            </div>
            <div className="blocked__user__text">
              <p>{user['report.text']}</p>
            </div>
          </div>
        ))}
      </div>
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

export default BlockedUsers;
