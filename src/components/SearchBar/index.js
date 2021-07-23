import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Input, Segment, Form } from 'semantic-ui-react';

const SearchBar = ({ inputSearch, setInputSearch, getReposByInputSearch }) => {
  const textInput = useRef(null);

  useEffect(() => {
    console.log('on va placer le focus');

    // on pourrait utiliser document.getElementById('test'), mais on risquerait de
    // provoquer un conflit avec le DOM virtuel et que notre modification ne soit
    // pas visible

    // => utilisation d'une ref : raccourci vers un élément du DOM (balise ou composant)
    // https://fr.reactjs.org/docs/refs-and-the-dom.html
    textInput.current.focus();
  }, []);
  return (
    <Segment>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          getReposByInputSearch();
        }}
      >
        <Form.Field>
          <Input
            icon="search"
            iconPosition="left"
            placeholder="Rechercher..."
            value={inputSearch}
            onChange={(event) => {
              // console.log(event.currentTarget.value);
              setInputSearch(event.currentTarget.value);
            }}
            ref={textInput}
          />
        </Form.Field>
      </Form>
    </Segment>
  );
};

SearchBar.propTypes = {
  inputSearch: PropTypes.string.isRequired,
  setInputSearch: PropTypes.func.isRequired,
  getReposByInputSearch: PropTypes.func.isRequired,
};

export default SearchBar;
