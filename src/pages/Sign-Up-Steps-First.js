import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CheckboxItemsBlock from '../components/Checkbox-Items-block';

function SignUpStepsFirst(props) {
  const { onData } = props;
  const [data, setData] = useState({
    isFreelancer: null,
    yourGoal: null,
  });
  useEffect(() => {
    onData({
      dataSignUpFirstStep: data,
    });
  }, [data]);
  return (
    <div className="sign-up-steps-first new-css">
      <div className="container sign-up-steps-first__container">
        <div className="sign-up-steps-first__block">
          <div>
            <h3 className="sign-up-steps-first__block__title">Have You Done a freelance Before?</h3>
            <CheckboxItemsBlock type="isFreelancer" data={data} setData={setData} levels={['This is My Very First Time', 'Intermediate', 'Expert']} />
            <h3 className="sign-up-steps-first__block__title">What’s Your Goal?</h3>
            <CheckboxItemsBlock type="yourGoal" data={data} setData={setData} levels={['To Earn Main Income', 'To Make Money On the Side', 'I Don’t Have a Goal in mind']} />
          </div>
        </div>
      </div>
    </div>
  );
}

SignUpStepsFirst.propTypes = {
  onData: PropTypes.func.isRequired,
};

export default SignUpStepsFirst;
