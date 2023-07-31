import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function CreateJobFifth(props) {
  const { onData } = props;
  const fifthFormTitle = useSelector((state) => state.createJobForm.dataFromChild5) ?? '';
  const [description, setDescription] = useState(fifthFormTitle ?? '');
  useEffect(() => {
    onData({ dataFromChild5: description });
  }, [description]);
  return (
    <div className="job__form__container">
      <h4 className="create__job__title">Describe Your Job</h4>
      <textarea className="create-job-desc-text" value={description} onChange={(e) => setDescription(e.target.value)} />
    </div>
  );
}
CreateJobFifth.propTypes = {
  onData: PropTypes.func.isRequired,
};

export default CreateJobFifth;
