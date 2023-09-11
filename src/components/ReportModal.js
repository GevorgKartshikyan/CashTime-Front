import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { reportMessage } from '../store/actions/reports';

function ReportModal({ onChangeStatus, userId, modalFlag }) {
  const [textCount, setTextCount] = useState(0);
  const [reportText, setReportText] = useState('');
  const dispatch = useDispatch();
  console.log(reportText);
  const handleTextChange = (e) => {
    setTextCount(e.target.value.length);
    setReportText(e.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (reportText.split(' ').join('').length > 0) {
      await onChangeStatus(userId);
      modalFlag(false);
      dispatch(reportMessage({
        message: reportText,
        userId,
      }));
    }
  };

  return (
    <div className="report-modal">
      <p>
        You can write about your years of experience, industry, or skills.
        People also talk about their achievements or previous job experiences.
      </p>
      <form onSubmit={handleSubmit}>
        <textarea name="reportText" onChange={handleTextChange} maxLength={2600} />
        <div className="report-text-count">
          <p>{textCount}</p>
          /
          <p>2600</p>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default ReportModal;
