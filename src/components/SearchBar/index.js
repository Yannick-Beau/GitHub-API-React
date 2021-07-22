import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react';

const SearchBar = ({ inputSearch, setInputSearch, getReposByInputSearch }) => (
  <form
    className="form-addTask"
    onSubmit={(event) => {
      event.preventDefault();
      getReposByInputSearch();
    }}
  >
    <Input
      icon="search"
      iconPosition="left"
      placeholder="Rechercher..."
      value={inputSearch}
      onChange={(event) => {
        // console.log(event.currentTarget.value);
        setInputSearch(event.currentTarget.value);
      }}
      onSubmit={() => {
        getReposByInputSearch(inputSearch);
      }}
    />
  </form>
);

SearchBar.propTypes = {
  inputSearch: PropTypes.string.isRequired,
  setInputSearch: PropTypes.func.isRequired,
  getReposByInputSearch: PropTypes.func.isRequired,
};

export default SearchBar;
