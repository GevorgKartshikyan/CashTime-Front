import React from 'react';
import paginationNext from '../assets/images/paginate_next.svg';

function PaginationNextLabel() {
  return (
    <div className="pagination-label">
      <img className="pagination-label__img" src={paginationNext} alt="svg" />
    </div>
  );
}

export default PaginationNextLabel;
