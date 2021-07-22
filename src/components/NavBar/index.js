import React from 'react';

import { Menu } from 'semantic-ui-react';
import { NavLink, BrowserRouter } from 'react-router-dom';

const NavBar = () => (
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

export default NavBar;
