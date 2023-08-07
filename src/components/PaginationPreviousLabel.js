import React from 'react';
import paginationPrevious from '../assets/images/paginate_previous.svg';

function PaginationPreviousLabel() {
  return (
    <div className="pagination-label">
      <img className="pagination-label__img" src={paginationPrevious} alt="svg" />
    </div>
  );
}

export default PaginationPreviousLabel;
