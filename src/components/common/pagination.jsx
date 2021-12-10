import React from "react";
import _ from "lodash"; // npm i lodash@4.17.10
import PropTypes from "prop-types";
const Pagination = ({ itemCount, pageSize, onPageChange, currentPage }) => {
  // const { itemCount, pageSize, onPageChange, currentPage } = props;
  const pageCount = Math.ceil(itemCount / pageSize);
  // using lodash to generate array with page numbers
  const pages = _.range(1, pageCount + 1); // output : array of pages
  // console.log(pages);
  if (pageCount === 1) return "";
  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={currentPage === page ? "page-item active" : "page-item"}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
Pagination.propTypes = {
  itemCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};
export default Pagination;
