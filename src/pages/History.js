import React from 'react';
import HistoryBlock from '../components/History-block';

function History() {
  return (
    <div className="history">
      <div className="container">
        <div className="history__row">
          <HistoryBlock />
          <HistoryBlock />
          <HistoryBlock />
          <HistoryBlock />
          <HistoryBlock />
        </div>
      </div>
    </div>
  );
}

export default History;
