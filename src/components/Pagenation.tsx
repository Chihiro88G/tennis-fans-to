import React from 'react';
import { LeftArrow, LeftBarArrow, RightArrow, RightBarArrow } from '../svgs';

interface PagenationProps {
  courtsPerPage: number,
  totalCourts: number,
  setCurrentPage: (page: number) => void,
  currentPage: number,
}

function Pagenation({ courtsPerPage, totalCourts, setCurrentPage, currentPage}: PagenationProps) {
  const pageNumbers = [];
  const maxPageNum = 3;

  for (let i = 1; i <= Math.ceil(totalCourts / courtsPerPage); i++) {
    pageNumbers.push(i);
  }

  const totalPages = pageNumbers.length;

  const leftArrowsDisabled = currentPage === 1;
  const rightArrowsDisabled = totalPages === currentPage;

  let start = Math.max(currentPage - Math.floor(maxPageNum / 2), 1);
  let end = start + maxPageNum - 1;
  if (end > totalPages) {
    end = totalPages;
    start = Math.max(end - maxPageNum + 1, 1);
  }
  const visiblePageNumbers = pageNumbers.slice(start - 1, end);

  return (
    <div>
      <ul className="pagination">
        <button
          type="button"
          className='arrow-btn'
          onClick={() => setCurrentPage(1)}
          disabled={leftArrowsDisabled}
        >
          <LeftBarArrow />
        </button>
        <button
          type="button"
          className='arrow-btn'
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={leftArrowsDisabled}
        >
          <LeftArrow />
        </button>
        
        {visiblePageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${currentPage === number ? "active" : ""}`}
          >
            <button
              type='button'
              onClick={() => setCurrentPage(number)}
            >
              {number}
            </button>
          </li>
        ))}

        <button
          type="button"
          className='arrow-btn'
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={rightArrowsDisabled}
        >
          <RightArrow />
        </button>
        <button
          type="button"
          className='arrow-btn'
          onClick={() => setCurrentPage(totalPages)}
          disabled={rightArrowsDisabled}
        >
          <RightBarArrow />
        </button>
      </ul>
    </div>
  );
}

export default Pagenation;