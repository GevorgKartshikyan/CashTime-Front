import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { getFilterUser } from '../store/actions/users';
import { sendNotice } from '../store/actions/notice';

// nkar
// aply
// map
function OfferCvsList(props) {
  const { REACT_APP_API_URL } = process.env;
  const { data } = props;
  const limit = 2;
  const dispatch = useDispatch();
  const usersFilteredData = useSelector((state) => state.users.filteredUsers);
  const totalPages = useSelector((state) => state.users.filterUserTotalPages);
  console.log(usersFilteredData, 9999666);
  const handlePageChange = (ev) => {
    const page = ev.selected + 1;
    dispatch(getFilterUser({ data, page, limit }));
  };
  useEffect(() => {
    const page = 1;
    dispatch(getFilterUser({ data, page, limit }));
  }, [data]);
  const handleSendNotice = useCallback((creator) => {
    dispatch(sendNotice({ noticeTo: creator, noticeJobTo: null }));
  }, []);
  return (
    <div className="offer__container__right">
      <div className="offer__container__right__toggle">
        <div className="offer__container__right__toggle__buttons">
          <span type="button" className="offer__container__right__toggle__buttons__search active">Searched</span>
          <div className="parent-block-for-filter">
            {usersFilteredData?.map((user) => (
              <div style={{ marginTop: 20 }} className="worker-offer-ticket">
                <div className="worker-offer-ticket__first-line forFilter-first-line">
                  <h3 className="worker-offer-ticket__first-line__title forFilter-title">{user.createdCvs?.profRole}</h3>
                  <div className="worker-offer-ticket__first-line__block forFilter-block">
                    <img src={REACT_APP_API_URL + user.avatar} alt="" className="worker-offer-ticket__first-line__img" />
                    <div>
                      <p className="worker-offer-ticket__first-line__name forFilter-name">{user.firstName}</p>
                      <p className="worker-offer-ticket__first-line__name">{user.lastName}</p>
                    </div>
                  </div>
                </div>
                <div className="worker-offer-ticket__first-line forFilter-first-line">
                  <div className="worker-offer-ticket__first-line__left forFilter-left">
                    <p className="worker-offer-ticket__first-line__left__text">{user.city}</p>
                    <p className="worker-offer-ticket__first-line__left__text">{user.phone}</p>
                    <p className="worker-offer-ticket__first-line__left__text">{user.email}</p>
                  </div>
                  <div className="worker-offer-ticket__second-line forFilter-second-line">
                    <span className="worker-offer-ticket__second-line__price forFilter-price">
                      {user.createdCvs?.hourlyRate}
                      {' '}
                      AMD /hr
                    </span>
                  </div>
                </div>
                <button onClick={() => handleSendNotice(user.id)} type="button" className="worker-offer-ticket__button">Apply</button>
              </div>
            ))}
          </div>
          <div className="offer__container__right__paginate">
            {usersFilteredData?.length > 0 ? (
              <ReactPaginate
                activeClassName="item active-page"
                breakClassName="item break-me"
                breakLabel=""
                containerClassName="pagination"
                disabledClassName="disabled-page"
                marginPagesDisplayed={0}
                nextClassName="item next "
                onPageChange={handlePageChange}
                pageCount={totalPages} // total
                pageClassName="item pagination-page "
                pageRangeDisplayed={5}
                previousClassName="item previous"
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>

  );
}

export default OfferCvsList;
