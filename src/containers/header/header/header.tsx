import React from 'react';

import './header.scss';
import HomeLink from '../home-link/home-link';
import NavMenu from "../nav-menu/nav-menu";

function Header() {
  return (
    <header className="header">
      <HomeLink/>
      <NavMenu/>
    </header>
  );
}

export default Header;
