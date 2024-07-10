import React from 'react';
import './Pagination.css'

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    onPageChange(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={currentPage === i ? 'active' : ''}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </li>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="pagination">
      <ul>
        {currentPage > 1 && (
          <li onClick={() => handlePageChange(currentPage - 1)}>
            &laquo; Previous
          </li>
        )}
        {renderPageNumbers()}
        {currentPage < totalPages && (
          <li onClick={() => handlePageChange(currentPage + 1)}>
            Next &raquo;
          </li>
        )}
      </ul>
    </div>
  );
};

export default Pagination;