import React from 'react';
import PropTypes from 'prop-types';

import { Menu } from 'semantic-ui-react';
import { NavLink, BrowserRouter } from 'react-router-dom';

const NavBar = ({ setUrl }) => (
  <Menu>
    <BrowserRouter>
      <NavLink to="/" className="item" activeClassName="active item">
        Recherche
      </NavLink>
      <NavLink to="/faq" className="item" activeClassName="active item">
        FAQ
      </NavLink>
    </BrowserRouter>
  </Menu>
);

NavBar.propTypes = {
  setUrl: PropTypes.func.isRequired,
};

export default NavBar;
