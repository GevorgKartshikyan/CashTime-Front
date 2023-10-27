import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams, Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import ProfileEditModal from '../components/ProfileEditModal';
import ProfileAboutEditModal from '../components/ProfileAboutEditModal';
import ProfileDeleteModal from '../components/ProfileDeleteModal';
import Available from '../assets/images/available.svg';
import Star from '../assets/images/Star.svg';
import LocationSvg from '../assets/images/vectorMapBlue.svg';
import EditIcon from '../assets/images/pen_icon.svg';
import PhoneIcon from '../assets/images/phone_call_orange_icon.svg';
import CloseIcon from '../assets/images/closeIcon.png';
import CVIcon from '../assets/images/scope_icon.svg';
import { editProfile } from '../store/actions/users';
import { addCvLink } from '../store/actions/createCvForm';
import ResetPasswordModal from '../components/resetPasswordModal';
import { reviewList } from '../store/actions/reviews';
import SingleReview from '../components/SingleReview';
import PaginationNext from '../components/PaginationNextLabel';
import PaginationPreviousLabel from '../components/PaginationPreviousLabel';
import ReviewImageModal from '../components/ReviewImageModal';

const { REACT_APP_API_URL } = process.env;
function Profile() {
  const [CvFlag, setCvFlag] = useState(false);
  const [active, setActive] = useState();
  const [cvInfo, setCvInfo] = useState('');
  const [cvLink, setCvLink] = useState(false);
  const [smallModalActive, setSmallModalActive] = useState();
  const [deleteAccountModal, setDeleteAccountModal] = useState();
  const [selectedImage, setSelectedImage] = useState('');
  const reviews = useSelector((state) => state.review.reviewsList);
  const totalPages = useSelector((state) => state.review.totalPages);
  const currentPage = useSelector((state) => state.review.currentPage);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get('page') || 1, 10);
  const limit = parseInt(searchParams.get('limit') || 4, 10);
  const [resetPasswordModal, setResetPasswordModal] = useState();
  const token = useSelector((state) => state.users.token);
  const userInfo = useSelector((state) => state.users.profile);
  console.log(userInfo);
  const userCvInfo = userInfo.createdCvs || {};
  const { skills = [], language = [] } = userCvInfo;
  const modalBg = useRef();
  const modalSmall = useRef();
  const handleOpenModal = useCallback(() => {
    setActive(true);
    document.body.style.overflowY = 'hidden';
  }, [active]);
  const handleCloseModal = useCallback((ev) => {
    if (ev.target === modalBg.current) {
      setSmallModalActive(false);
      document.body.style.overflowY = 'auto';
    }
  });
  const handleOpenSmallModal = useCallback(() => {
    setSmallModalActive(true);
    document.body.style.overflowY = 'hidden';
  }, [smallModalActive]);
  const handleCloseSmallModal = useCallback((ev) => {
    if (ev.target === modalSmall.current) {
      setActive(false);
      document.body.style.overflowY = 'auto';
    }
  }, [smallModalActive]);
  const dispatch = useDispatch();
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

  const handleAddCvLink = useCallback(() => {
    setCvLink(cvInfo);
    setCvFlag(false);
    setCvInfo(false);
    dispatch(addCvLink({
      cvLink: cvInfo,
    }));
  }, [cvLink, cvInfo]);

  console.log(cvInfo);
  console.log(cvLink);
  const handleDeleteLanguages = (id) => {
    const newLanguages = language.filter((e) => e.id !== id);
    console.log(newLanguages);
    dispatch(editProfile({
      userName: userInfo.firstName,
      surname: userInfo.lastName,
      addSkill: skills,
      education: userCvInfo.school,
      subject: userCvInfo.degree,
      address: null,
      addLanguages: newLanguages || [],
      phoneNumber: userInfo.phone,
      profession: userCvInfo.experience,
      avatar: null,
    }));
  };

  const handlePageChange = (event) => {
    const selectedPage = event.selected + 1;
    setSearchParams({ page: selectedPage, limit });
  };

  useEffect(() => {
    dispatch(reviewList({
      userTo: '',
      limit,
      page,
    }));
  }, [page]);
  if (!token) {
    window.location.href = '/login'; return null;
  }

  return (
    <div style={{ backgroundColor: 'white', position: 'relative' }}>
      <Header />
      <div className="container">
        <div className="profile">
          <div className="profile__edit">
            <button onClick={() => handleOpenSmallModal()} className="profile__edit__btn" type="button">
              <img className="profile__edit__btn__img" src={EditIcon} alt="IMG" />
            </button>
          </div>
          <div className="profile__user">
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
                  <span className="profile__user__info__global__text__reviewNumber">4</span>
                  <img className="profile__user__info__global__text__starSvg" src={Star} alt="IMG" />
                  <span className="profile__user__info__global__text__specialization">{userCvInfo.experience}</span>
                </div>

                <div className="profile__user__info__global__jobs">
                  <div className="profile__user__info__global__jobs__count">
                    <span className="profile__user__info__global__jobs__count__number">104</span>
                    <span className="profile__user__info__global__jobs__count__text">Total Jobs</span>
                  </div>
                  <div className="profile__user__info__global__jobs__count">
                    <span className="profile__user__info__global__jobs__count__number">1</span>
                    <span className="profile__user__info__global__jobs__count__text">In Progress</span>
                  </div>
                </div>

                <div className="profile__user__info__global__cv">
                  <span className="profile__user__info__global__cv__text">CV Link:</span>
                  {/* <button type="button" className="profile__user__info__global__cv__link"> */}
                  {/*   <img className="profile__user__info__global__cv__link__img"
                  src={CVIcon} alt="IMG" /> */}
                  {/* </button> */}
                  {userCvInfo.link
                    ? (
                      <Link className="cv-link-button" target="_blank" rel="stylesheet" to={userCvInfo.link}>
                        <img className="cv-link-button__img" src={CVIcon} alt="img" />
                      </Link>
                    )
                    : (
                      <>
                        <div className="cvLink">
                          {
                        CvFlag
                          ? (
                            <>
                              <input className="cvLink__cvLinkInput" onChange={(event) => setCvInfo(event.target.value)} type="text" />
                              <button onClick={() => setCvFlag(false)} type="button" className="cvLink__closeBtn">
                                <img src={CloseIcon} alt="img" className="cvLink__closeBtn__img" />
                              </button>
                            </>
                          ) : null
                      }

                        </div>
                        {
                    CvFlag
                      ? <button type="button" onClick={handleAddCvLink} className="plusBtn">+</button>
                      : <button type="button" onClick={() => setCvFlag(true)} className="plusBtn">+</button>
                  }
                      </>
                    )}

                </div>
              </div>
            </div>
            <span className="profile__user__jobPrice">
              9000 AMD/hr
            </span>
          </div>
          <div className="profile__info">
            <div className="profile__info__job">
              <div className="profile__edit">
                <button className="profile__edit__btn" onClick={() => handleOpenModal()} type="button">
                  <img className="profile__edit__btn__img" src={EditIcon} alt="IMG" />
                </button>
              </div>
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

                {userCvInfo.school ? (
                  <>
                    <span className="profile__info__job__box__education bigTextProfile">Education</span>
                    <span
                      className="profile__info__job__box__educationName"
                    >
                      {userCvInfo.school.toUpperCase()}
                    </span>
                  </>

                ) : null}
                {userCvInfo.degree
                  ? (
                    <div className="profile__info__job__box__educationInfo">
                      <span className="profile__info__job__box__educationInfo__span">
                        {userCvInfo.degree}
                      </span>
                    </div>
                  ) : null}
                {skills?.length !== 0 && <span className="profile__info__job__box__skills bigTextProfile">Skills</span> }
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

                {language.length
                  ? (
                    <>
                      <span className="profile__info__job__box__language bigTextProfile">Languages</span>
                      { language?.map((e) => (
                        <ul>
                          <li key={e.id} className="profile__info__job__box__language">
                            {e.language}
                            (
                            {e.level.value ?? e.level}
                            )
                            <button className="skills-delete-btn" onClick={() => handleDeleteLanguages(e.id)} type="button">Delete</button>
                          </li>
                        </ul>
                      )) }
                      {' '}

                    </>
                  )
                  : null}

              </div>
              <div className="profile-delete-box">
                {userInfo.type === 'ordinary' ? <button type="button" className="profile-delete-box__reset-password" onClick={() => setResetPasswordModal(true)}>Reset password</button> : null}
                <button type="button" className="profile-delete-box__delete-account" onClick={() => setDeleteAccountModal(true)}>Delete account</button>
              </div>
            </div>
            <div className="profile__info__contacts">
              <h2 className="profile__info__contacts__location">Location:</h2>
              <span className="profile__info__contacts__locationName">
                <img className="profile__user__info__global__location__marker" src={LocationSvg} alt="IMG" />
                {userInfo.city}
                {' '}
                {userInfo.country}
              </span>
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
      {deleteAccountModal ? <ProfileDeleteModal closeModal={setDeleteAccountModal} /> : null}
      {resetPasswordModal ? <ResetPasswordModal closeModal={setResetPasswordModal} /> : null}
      {selectedImage && <ReviewImageModal selectedImgae={setSelectedImage} image={selectedImage} />}
      {selectedImage && <div role="presentation" onClick={() => setSelectedImage('')} className="review-image-modal" />}
      <Footer />
    </div>
  );
}

export default Profile;
