import React from 'react';
import menuicon from '../assets/menu.svg';
import './components.scss';

function NavBar() {
  return (
    <div className = "navbar">
        <div className = "navbar-menu">
            <img src = {menuicon} />
        </div>
    </div>
  );
}

export default NavBar;
