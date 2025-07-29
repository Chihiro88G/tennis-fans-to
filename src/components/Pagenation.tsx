import React, { Dispatch } from 'react';
import { LeftArrow, LeftBarArrow, RightArrow, RightBarArrow } from '../svgs';

interface PagenationProps {
  courtsPerPage: number,
  totalCourts: number,
  setCurrentPage: Dispatch<React.SetStateAction<number>>,
  currentPage: number,
}

function Pagenation({ courtsPerPage, totalCourts, setCurrentPage, currentPage}: PagenationProps) {
  const pageNumbers = [];
  const maxPageNum = 3;

  for (let i = 1; i <= Math.ceil(totalCourts / courtsPerPage); i++) {
    pageNumbers.push(i);
  }

  const totalPages = pageNumbers.length;

  let start = Math.max(currentPage - Math.floor(maxPageNum / 2), 1);
  let end = start + maxPageNum - 1;
  if (end > totalPages) {
    end = totalPages;
    start = Math.max(end - maxPageNum + 1, 1);
  }
  const visiblePageNumbers = pageNumbers.slice(start - 1, end);

  const setCurrentPageNo = ((pageNumber: number, e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  });

  return (
    <div>
      <ul className="pagination">
        <a 
          onClick={(e) => setCurrentPageNo(1, e)}
          href="!#"
        >
          <LeftBarArrow />
        </a>

        {currentPage > 1 && 
          <a 
            onClick={(e) => setCurrentPageNo(currentPage - 1, e)}
            href="!#"
          >
            <LeftArrow />
          </a>
        }
        
        {visiblePageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${currentPage === number ? "active" : ""}`}
          >
            <a
              onClick={(e) => setCurrentPageNo(number, e)}
              href="!#"
              className="page-link"
            >
              {number}
            </a>
          </li>
        ))}

        {totalPages !== currentPage &&
          <a 
            onClick={(e) => setCurrentPageNo(currentPage + 1, e)}
            href="!#"
          >
            <RightArrow />
          </a>
        }

        <a 
          onClick={(e) => setCurrentPageNo(totalPages, e)}
          href="!#"
        >
          <RightBarArrow />
        </a>

      </ul>
    </div>
  );
}

export default Pagenation;