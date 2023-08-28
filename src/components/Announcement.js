import React from 'react';
import idea from '../assets/images/Idea.svg';

const { REACT_APP_API_URL } = process.env;

function Announcement(props) {
  const {
    description,
    jobPhoto,
    name,
    lastname,
    skills,
    price,
    experience,
    title,
  } = props;
  return (
    <div className="announcement">
      <div className="announcement__logo">
        <img src={idea} alt="" />
      </div>
      <div className="announcement__info">
        <div className="announcement__info__title">
          {description ? <p>{description}</p> : <p>!!!NO DESCRIPTION!!!</p>}
        </div>
        <div className="announcement__info__text">
          {title ? <span>{title?.toUpperCase()}</span> : <span>!!!NO TITLE!!!</span>}
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
          <span>{price.method}</span>
          <button className="announcement_accept" type="submit">Accept</button>
          <button className="announcement_delete" type="submit">Delete</button>
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
