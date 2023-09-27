import React from 'react';
import { useDispatch } from 'react-redux';
// import idea from '../assets/images/Idea.svg';
import { activateJobAdmin, deleteJobAdmin } from '../store/actions/jobsRequest';

const { REACT_APP_API_URL } = process.env;

function Announcement(props) {
  const {
    description,
    jobPhoto,
    name,
    id,
    lastname,
    skills,
    priceMethod,
    experience,
    title,
  } = props;
  const dispatch = useDispatch();
  const handleActivateJob = (jobId) => {
    try {
      dispatch(activateJobAdmin({ jobId }));
    } catch (e) {
      console.error(e);
    }
  };
  const handleDeleteJob = (jobId) => {
    try {
      dispatch(deleteJobAdmin({ jobId }));
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div className="announcement">
      {/* <div className="announcement__logo"> */}
      {/*   <img src={idea} alt="" /> */}
      {/* </div> */}
      <div className="announcement__info">
        <div className="announcement__info__title">
          {title ? <span>{title?.toUpperCase()}</span> : <span>!!!NO TITLE!!!</span>}
        </div>
        <div className="announcement__info__text">
          {description ? <p>{description}</p> : <p>!!!NO DESCRIPTION!!!</p>}
          <div className="announcement__info__text-span-block">
            {skills?.length > 0 ? (
              skills.map((e) => (
                e.skill ? (
                  <span key={e.id}>
                    {e.skill}
                  </span>
                ) : (
                  <span key={e.id}>
                    !!!NO SKILLS!!!
                  </span>
                )
              ))
            ) : (
              <span>!!!NO SKILLS!!!</span>
            )}
            {experience ? <span>{experience}</span> : <span>!!!NO EXPERIENCE</span>}
          </div>
          <span>{priceMethod}</span>
          <div className="announcement__info__text__buttons">
            <button className="announcement_accept" type="submit" onClick={() => handleActivateJob(id)}>Accept</button>
            <button className="announcement_delete" type="submit" onClick={() => handleDeleteJob(id)}>Delete</button>
          </div>
        </div>
      </div>
      <div className="announcement__user">
        <div className="announcement__user__img">
          <img src={REACT_APP_API_URL + jobPhoto} alt="jobImage" />
        </div>
        <div className="announcement__user__name">
          <p>
            {`${name} ${lastname}`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Announcement;
