import React from 'react';
import { useSelector } from 'react-redux';
import HistoryBlock from '../components/History-block';
import Header from '../layouts/Header';

function History() {
  const token = useSelector((state) => state.users.token);
  if (!token) {
    window.location.href = '/login';
    return null;
  }
  return (
    <div className="history">
      <Header />
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
