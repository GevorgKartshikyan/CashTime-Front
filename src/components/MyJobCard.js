import React from 'react';

const { REACT_APP_API_URL } = process.env;

function MyJobCard({ job }) {
  console.log(job);
  // alreadyDone:false
  // city:null
  // country:null
  // createdAt: "2023-09-27T11:36:30.000Z"
  // description:""
  // experience:""
  // fullAddress:""
  // geometry:null
  // jobPhoto:"\\images\\jobs\\default-job-image.jpg"
  // phoneNumber:""
  // priceFixed:null
  // priceMaxHourly:null
  // priceMethod:"Hourly Rate"
  // priceMinHourly:null
  // skill:[]
  // title:"Enginer"
  // updatedAt:"2023-09-27T18:56:09.000Z"
  const getPriceRange = () => {
    if (job.priceMinHourly && job.priceMaxHourly) {
      return `${job.priceMinHourly}$-${job.priceMaxHourly}$/${job.priceMethod}`;
    } if (job.priceMinHourly) {
      return `${job.priceMinHourly}$/${job.priceMethod}`;
    }
    return '';
  };
  return (
    <div className="mhy-job-card">
      <div className="card card-1">
        <img className="job-single-image" src={REACT_APP_API_URL + job.jobPhoto} alt="job" />
        <div className="work-rate">
          <p>{job.priceMethod}</p>
          {job.priceFixed ? `${job.priceFixed}$/${job.priceMethod}` ? getPriceRange() : getPriceRange() : 'No Price'}
        </div>
        <div className="pos-nd-loc">
          <p className="job-title">{job.title || 'No Job Title'}</p>
          <p className="location">{job.city && job.country ? `${job.country}/${job.city}` : 'No Select Address'}</p>
        </div>
        <hr />
        <p style={{ textAlign: 'center', fontSize: 18 }}>Skills</p>
        <div className="tags">
          {job.skills?.length > 0 ? (
            <>
              {job.skills.slice(0, 4).map((e) => (
                <p key={e.id}>{e.skill}</p>
              ))}
              {job.skills.length > 4 && (
                <p>
                  +
                  {job.skills.length - 4}
                  {' '}
                  more
                </p>
              )}
            </>
          ) : (
            'No Selected Skills'
          )}
        </div>

        <hr />
        <p className="job-desc">
          {job.description ? job.description : 'No Description'}
        </p>
      </div>
    </div>
  );
}

export default MyJobCard;
