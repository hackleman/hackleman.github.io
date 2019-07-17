import React from 'react';
import icon from '../../assets/icon-01.svg';
import './navbar.scss';

function NavBar() {
  return (
    <div className = "navbar">
        <div className = "navbar-menu">
          <div className = "menu">
            <img className = "icon" src = {icon} />
            <div className = "text">MENU</div>
          </div>
        </div>
    </div>
  );
}

export default NavBar;
