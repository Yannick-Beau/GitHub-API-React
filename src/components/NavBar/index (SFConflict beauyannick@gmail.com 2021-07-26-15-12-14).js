import React from 'react';
import PropTypes from 'prop-types';

import { Menu } from 'semantic-ui-react';
import { NavLink, BrowserRouter } from 'react-router-dom';

const NavBar = ({ setUrl }) => (
  <Menu>
      <NavLink
        to="/"
        className="item"
        activeClassName="active item"
        exact
        onClick={() => {
          setUrl('/');
        }}
      >
        Recherche
      </NavLink>
      <NavLink
        to="/faq"
        className="item"
        activeClassName="active item"
        exact
        onClick={() => {
          setUrl('/faq');
        }}
      >
        FAQ
      </NavLink>
  </Menu>
);

NavBar.propTypes = {
  setUrl: PropTypes.func.isRequired,
};

export default NavBar;
