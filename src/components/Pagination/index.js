import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ page, setPage, getReposByPagination }) => (
  <button
    type="button"
    onClick={() => {
      setPage(page + 1);
      getReposByPagination(page + 1);
    }}
  >
    +
  </button>
);

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  getReposByPagination: PropTypes.func.isRequired,
};

export default Pagination;

//
