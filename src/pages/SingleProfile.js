import React, {
  useCallback, useEffect, useRef,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import ProfileEditModal from '../components/ProfileEditModal';
import ProfileAboutEditModal from '../components/ProfileAboutEditModal';
import Available from '../assets/images/available.svg';
import Star from '../assets/images/Star.svg';
import LocationSvg from '../assets/images/vectorMapBlue.svg';
import CVIcon from '../assets/images/scope_icon.svg';
import PhoneIcon from '../assets/images/phone_call_orange_icon.svg';
import { editProfile, getSingleUser } from '../store/actions/users';
import { reviewList } from '../store/actions/reviews';
import SingleReview from '../components/SingleReview';
import PaginationNext from '../components/PaginationNextLabel';
import PaginationPreviousLabel from '../components/PaginationPreviousLabel';
import ReviewImageModal from '../components/ReviewImageModal';

const { REACT_APP_API_URL } = process.env;
function SingleProfile() {
  const [active, setActive] = useState();
  const [selectedImage, setSelectedImage] = useState('');
  const reviews = useSelector((state) => state.review.reviewsList);
  const totalPages = useSelector((state) => state.review.totalPages);
  const currentPage = useSelector((state) => state.review.currentPage);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get('page') || 1, 10);
  const limit = parseInt(searchParams.get('limit') || 4, 10);
  const [smallModalActive, setSmallModalActive] = useState();
  const token = useSelector((state) => state.users.token);
  const userInfo = useSelector((state) => state.users.singleUser);
  const userCvInfo = userInfo.createdCvs || {};
  const { skills = [], language = [] } = userCvInfo;
  const dispatch = useDispatch();
  const { userId } = useParams();
  const modalBg = useRef();
  const modalSmall = useRef();
  useEffect(() => {
    dispatch(getSingleUser(userId));
  }, [userId]);
  console.log(userInfo);
  const handlePageChange = (event) => {
    const selectedPage = event.selected + 1;
    setSearchParams({ page: selectedPage, limit });
  };
  useEffect(() => {
    dispatch(reviewList({
      userTo: userId,
      limit,
      page,
    }));
  }, [userId, page]);
  const handleCloseModal = useCallback((ev) => {
    if (ev.target === modalBg.current) {
      setSmallModalActive(false);
      document.body.style.overflowY = 'auto';
    }
  });
  const handleCloseSmallModal = useCallback((ev) => {
    if (ev.target === modalSmall.current) {
      setActive(false);
      document.body.style.overflowY = 'auto';
    }
  }, [smallModalActive]);
  const handleDeleteSkill = (id) => {
    const newSkills = skills.filter((e) => e.id !== id);
    dispatch(editProfile({
      userName: userInfo.firstName,
      surname: userInfo.lastName,
      addSkill: newSkills,
      education: userCvInfo.school,
      subject: userCvInfo.degree,
      address: null,
      addLanguages: userCvInfo.language,
      phoneNumber: userInfo.phone,
      profession: userCvInfo.experience,
      avatar: null,
    }));
  };
  if (!token) {
    window.location.href = '/login'; return null;
  }

  return (
    <div style={{ backgroundColor: 'white', position: 'relative' }}>
      <Header />
      <div className="container">
        <div className="profile">
          <div className="profile__edit" />
          <div className="profile__user profile__user__single">
            <div className="profile__user__info">
              <div className="profile__user__info__img">
                <img className="profile__user__info__img__img" src={REACT_APP_API_URL + userInfo.avatar} alt="IMG" />
                <img className="profile__user__info__img__available" src={Available} alt="IMG" />
              </div>
              <div className="profile__user__info__global">
                <div className="profile__user__info__global__text">
                  <h3 className="profile__user__info__global__text__name">
                    {userInfo.firstName}
                    {' '}
                    {userInfo.lastName}
                  </h3>
                  <span className="profile__user__info__global__text__reviewNumber">{userInfo.stars}</span>
                  <img className="profile__user__info__global__text__starSvg" src={Star} alt="IMG" />
                  <span className="profile__user__info__global__text__specialization">{userCvInfo.experience}</span>
                </div>
                <div className="profile__user__info__global__location">
                  <img className="profile__user__info__global__location__marker" src={LocationSvg} alt="IMG" />
                  <span className="profile__user__info__global__location__info">
                    {userInfo.city}
                    {' '}
                    {userInfo.country}
                  </span>
                </div>
                <div className="profile__user__info__global__jobs">
                  <div className="profile__user__info__global__jobs__count">
                    <span className="profile__user__info__global__jobs__count__number">{userInfo.totalJobs}</span>
                    <span className="profile__user__info__global__jobs__count__text">Total Jobs</span>
                  </div>
                  {/* <div className="profile__user__info__global__jobs__count"> */}
                  {/*   <span className="profile__user__info__global__jobs__count__number">
                  1</span> */}
                  {/*   <span className="profile__user__info__global__jobs__count__text">
                  In Progress</span> */}
                  {/* </div> */}
                </div>
                <div className="profile__user__info__global__cv">
                  <span className="profile__user__info__global__cv__text">CV Link:</span>
                  <button type="button" className="profile__user__info__global__cv__link">
                    <img className="profile__user__info__global__cv__link__img" src={CVIcon} alt="IMG" />
                  </button>
                </div>
              </div>
            </div>
            <span className="profile__user__jobPrice">
              9000 AMD/hr
            </span>
          </div>
          <div className="profile__info">
            <div className="profile__info__job">
              <div className="profile__edit" />
              <div className="profile__info__job__box">
                {userCvInfo.experience
                  ? (
                    <>
                      <span className="profile__info__job__box__specialization">Specialized In:</span>
                      <h2 className="profile__info__job__box__specializationName">{userCvInfo.experience}</h2>
                    </>
                  )
                  : null }
                <p className="profile__info__job__box__about">
                  {
                    userCvInfo.bio
                  }
                </p>
                <span className="profile__info__job__box__education">Education</span>
                {userCvInfo.school ? (
                  <span
                    className="profile__info__job__box__educationName"
                  >
                    {userCvInfo.school.toUpperCase()}
                  </span>
                ) : null}
                {userCvInfo.degree
                  ? (
                    <div className="profile__info__job__box__educationInfo">
                      <span className="profile__info__job__box__educationInfo__span">
                        {userCvInfo.degree}
                      </span>
                    </div>
                  ) : null}
                {skills?.length !== 0 && <span className="profile__info__job__box__skills">Skills</span> }
                <ul>
                  {
                    skills !== null ? skills.map((e) => (
                      <li key={e.id} className="profile__info__job__box__skill">
                        {e.skill}
                        {'      '}
                        <button className="skills-delete-btn" onClick={() => handleDeleteSkill(e.id)} type="button">Delete</button>
                      </li>
                    )) : null
                  }
                </ul>
                <span className="profile__info__job__box__languages">Languages</span>
                <ul>
                  {
                    language?.map((e) => (
                      <li key={e.id} className="profile__info__job__box__language">
                        {e.language}
                        (
                        {e.level.value ?? e.level}
                        )
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
            <div className="profile__info__contacts">
              <h2 className="profile__info__contacts__location">Location:</h2>
              <span className="profile__info__contacts__locationName">2199/75</span>
              <div className="profile__info__contacts__phone">
                <h2 className="profile__info__contacts__phone__title">Phone Number:</h2>
                <img className="profile__info__contacts__phone__img" src={PhoneIcon} alt="IMG" />
              </div>
              <span className="profile__info__contacts__phone__number">{userInfo.phone || userCvInfo.phoneNumber}</span>

            </div>
          </div>
          {reviews.length > 0 ? (
            <div className="review">
              {reviews.map((e) => (
                <SingleReview
                  selectImage={setSelectedImage}
                  key={e.id}
                  firstName={e.reviewFrom?.firstName}
                  lastName={e.reviewFrom?.lastName}
                  rate={e.rate}
                  text={e.text}
                  date={e.formattedCreatedAt}
                  profileImg={e.reviewFrom?.avatar}
                  images={e.files}
                />
              ))}
              <ReactPaginate
                activeClassName="admin-item admin-active-page"
                breakClassName="admin-item admin-break-me"
                pageClassName="admin-item admin-pagination-page add-skill-item"
                previousClassName="admin-item admin-previous"
                breakLabel=""
                containerClassName="pagination pagination-user-reviews"
                disabledClassName="disabled-page"
                marginPagesDisplayed={0}
                nextClassName="admin-item admin-next"
                nextLabel={<PaginationNext />}
                onPageChange={handlePageChange}
                previousLabel={<PaginationPreviousLabel />}
                pageCount={totalPages}
                pageRangeDisplayed={3}
                forcePage={currentPage - 1}
              />
            </div>
          ) : null}
        </div>
      </div>
      { smallModalActive ? (
        <div className="profile-edit-modal" role="presentation" ref={modalBg} onClick={(ev) => handleCloseModal(ev)}>
          <ProfileEditModal
            skills={skills}
            language={language}
            profile={userInfo}
            profileCV={userCvInfo}
            modalFlag={setSmallModalActive}
          />
        </div>
      ) : null }
      {active ? (
        <div className="profile-edit-modal" role="presentation" ref={modalSmall} onClick={(ev) => handleCloseSmallModal(ev)}>
          <ProfileAboutEditModal
            cvBio={
              userCvInfo.bio
            }
            modalFlag={setActive}
          />
        </div>
      ) : null }
      {selectedImage && <ReviewImageModal selectedImgae={setSelectedImage} image={selectedImage} />}
      {selectedImage && <div role="presentation" onClick={() => setSelectedImage('')} className="review-image-modal" />}
      <Footer />
    </div>
  );
}

export default SingleProfile;
