import React, { Dispatch } from 'react';

interface PagenationProps {
  courtsPerPage: number,
  totalCourts: number,
  setCurrentPage: Dispatch<React.SetStateAction<number>>,
  currentPage: number,
}

function Pagenation({ courtsPerPage, totalCourts, setCurrentPage, currentPage}: PagenationProps) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCourts / courtsPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = ((pageNumber: number, e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  });

  return (
    <div>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${currentPage === number ? "active" : ""}`}
          >
            <a
              onClick={(e) => paginate(number, e)}
              href="!#"
              className="page-link"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagenation;