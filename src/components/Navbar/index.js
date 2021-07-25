import React from 'react';
import {Bars, Nav, NavIcon, NavLink} from './NavbarElements';

// import { Container } from './styles';

function Navbar({alter}) {
  return (
      <>
          <Nav>
              <NavLink to='/'>Pizza Hot</NavLink>
              <NavIcon onClick={alter}>
                  <p>Menu</p>
                  <Bars />
              </NavIcon>
          </Nav>
      </>
  );
}

export default Navbar;