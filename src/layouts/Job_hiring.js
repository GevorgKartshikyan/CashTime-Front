import React from 'react';
import UserCard from '../components/User_card';
import UserImg from '../assets/images/face.png';

function JobHiring() {
  return (
    <div className="job-hiring">
      <div className="container job-hiring__block">
        <h3 className="job-hiring__block__title">Jobs Hiring Now</h3>
        <div className="job-hiring__block__jobs">
          <UserCard text="I’m Looking For a Lady Who Will Clean My House Dishes" title="Hourly:3000 AMD Armenia/Gyumri, Available, Expert Posed Yesterday Posted By Arlin D." image={UserImg} />
          <UserCard text="I’m Looking For a Lady Who Will Clean My House Dishes" title="Hourly:3000 AMD Armenia/Gyumri, Available, Expert Posed Yesterday Posted By Arlin D." image={UserImg} />
          <UserCard text="I’m Looking For a Lady Who Will Clean My House Dishes" title="Hourly:3000 AMD Armenia/Gyumri, Available, Expert Posed Yesterday Posted By Arlin D." image={UserImg} />
        </div>
      </div>
    </div>
  );
}

export default JobHiring;
