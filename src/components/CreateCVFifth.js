import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function CreateCvFifth(props) {
  const { onData } = props;
  const [cvBio, setCvBio] = useState('');

  useEffect(() => {
    onData({
      dataFromChild4: {
        cvBio,
      },
    });
  }, [cvBio]);

  return (
    <div className="CreateCvFifth">
      <div className="CreateCvFifth__text">
        <h3>Write a Bio, Let The World Know You Better</h3>
      </div>
      <div className="CreateCvFifth__bio">
        <form action="">
          <label htmlFor="bio">
            <textarea id="bio" cols="30" rows="10" value={cvBio} onChange={(e) => setCvBio(e.target.value)} />
          </label>
          {/* <button type="submit">Save</button> */}
        </form>
      </div>
    </div>
  );
}

CreateCvFifth.propTypes = {
  onData: PropTypes.func.isRequired,
};

export default CreateCvFifth;
