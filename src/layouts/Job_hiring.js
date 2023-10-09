import React from 'react';
import { useTranslation } from 'react-i18next';
import UserCard from '../components/User_card';

function JobHiring({ randomJobs }) {
  const { t } = useTranslation();
  return (
    <div className="job-hiring">
      <div className="container job-hiring__block">
        <h3 className="job-hiring__block__title">{t('job_hiring_block_title')}</h3>
        <div className="job-hiring__block__jobs">
          {randomJobs.map((job) => (
            <UserCard title={job.title} text={`${job.city} ${job.country} ${job.priceMethod} ${job.description} ${job.priceFixed} ${job.phoneNumber} ${job.experience} `} image={job.jobPhoto} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default JobHiring;
